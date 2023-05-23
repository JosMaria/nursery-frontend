import { useEffect, useState } from 'react'
import { Classification, ProductResponseDTO } from '../../types';
import { CardProduct, ClassificationNavbar, ButtonsPagination, EmptyContent } from './components';
import { fetchByClassificationProducts } from '../../services';

export const CatalogPage = () => {
  const [products, setProducts] = useState<Array<ProductResponseDTO>>([]);
  const [page, setPage] = useState(0);
  const [classification, setClassification] = useState<Classification>('ALL');

  useEffect(() => {
    fetchByClassificationProducts(classification, page)
      .then(response => setProducts(response.content));
  }, [page, classification]);

  const changeClassification = (classification: Classification) => {
    setClassification(classification);
    setPage(0);
  }

  return (
    <section className='w-full flex flex-col justify-between items-center'>
      <ClassificationNavbar changeClassification={changeClassification} />
      {
        products.length === 0 ?
          <EmptyContent /> :
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
      }
      <ButtonsPagination
        isDisabledPrev={page <= 0}
        isDisabledNext={products.length < 12}
        setPage={setPage}
      />
    </section>
  )
}
