import { useEffect, useState } from 'react'
import { Classification, Page, ProductResponseDTO } from '../../types';
import { CardProduct, ClassificationNavbar, PaginationSection } from './components';
import { fetchByClassificationProducts } from '../../services';
import { EmptyContent } from '../../components';

type PlantStatusType = 'AVAILABLE' | 'IN_CONSERVATION' | 'NON_EXISTENT'

interface ProductResponse {
  id: number,
  commonName: string
  scientificName: string
  scientistSurnameInitial: string
  status: PlantStatusType
  family: string
  urlPicture: Array<string>
}

interface MyPage {
  content: Array<ProductResponse>
  number: number
  totalElements: number
  totalPages: number
  size: number
  numberOfElements: number
  empty: boolean
  first: boolean
  last: boolean
}

const infoPageDefault = {
  totalElements: 0,
  totalPages: 0,
  last: false,
  size: 0,
  number: 0,
  numberOfElements: 0,
  first: false,
  empty: false
}

export const CatalogPage = () => {
  const [products, setProducts] = useState<Array<ProductResponseDTO>>([]);
  const [numberPage, setNumberPage] = useState(0);
  const [classification, setClassification] = useState<Classification>('ALL');
  const [infoPage, setInfoPage] = useState<Page>(infoPageDefault);

  useEffect(() => {
    fetchByClassificationProducts(classification, numberPage)
      .then(response => {
        setProducts(response.content);
        setInfoPage(response);
      });
  }, [numberPage, classification]);

  const changeClassification = (classification: Classification) => {
    setClassification(classification);
    setNumberPage(0);
  }

  const goFirstPage = () => setNumberPage(0);
  const prevPage = () => setNumberPage(prev => prev - 1);
  const nextPage = () => setNumberPage(prev => prev + 1);

  return (
    <section className='w-full flex flex-col justify-between items-center'>
      <ClassificationNavbar changeClassification={changeClassification} />
      {
        infoPage.empty ?
          <EmptyContent
            message='A&uacute;n no tenemos plantas que mostrar'
            pathImage='src/assets/no-content-plants.png'
            alt='empty_content_plants'
          />
          :
          <>
            <SectionCardProduct products={products} />
            <PaginationSection
              infoPage={infoPage}
              goFirstPage={goFirstPage}
              prevPage={prevPage}
              nextPage={nextPage}
            />
          </>
      }
    </section>
  )
}

interface SectionCardProductProps {
  products: Array<ProductResponseDTO>
}

const SectionCardProduct = ({ products }: SectionCardProductProps) => (
  <div className='w-full grid grid-cols-4 place-items-center gap-5 p-5'>
    {
      products.map(product =>
        <CardProduct
          key={product.id}
          productResponseDTO={product}
        />
      )
    }
  </div>
)
