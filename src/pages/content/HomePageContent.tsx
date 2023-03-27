import { useEffect, useState } from 'react';
import { Product, ClassificationNavbar } from '../../components'
import { fetchAllProducts, fetchAllProductsByClassification } from '../../services';
import { ProductResponseDTO } from '../../types';

const FIRST_PAGE = 0;

const styleButtonPage = 'gap-1 text-lg font-medium bg-slate-300 hover:bg-slate-400 text-gray-900 p-4 rounded-xl';
const styleButtonPageDisabled = 'gap-1 text-lg font-medium bg-slate-500  p-4 rounded-xl';

export const HomePageContent = () => {

  const [products, setProducts] = useState<Array<ProductResponseDTO>>();
  const [page, setPage] = useState(FIRST_PAGE);

  useEffect(() => {
    fetchAllProducts(page)
      .then(data => setProducts(data));
  }, [page])

  const setProductByDefault = () => {
    fetchAllProducts().then(data => setProducts(data));
  }

  const setProductsByClassification = (classification: string) => {
    fetchAllProductsByClassification(classification)
      .then(response => setProducts(response));
  }

  const nextPage = () => setPage(prevPage => prevPage + 1);
  const prevPage = () => setPage(prevPage => prevPage - 1);

  return (
    <section className='bg-gray-400 w-full flex flex-col justify-between black'>
      <ClassificationNavbar
        setProductByDefault={setProductByDefault}
        setProductsByClassification={setProductsByClassification}
      />
      {products && <ContentProducts products={products} />}

      <div className='flex gap-5 justify-center p-5'>
        <button
          className={page === FIRST_PAGE ? styleButtonPageDisabled : styleButtonPage}
          disabled={page === FIRST_PAGE}
          onClick={prevPage}>
          Anterior
        </button>
        <button
          className={products?.length === 0 ? styleButtonPageDisabled : styleButtonPage}
          disabled={products?.length === 0}
          onClick={nextPage}>
          Siguiente
        </button>
      </div>
    </section>
  )
}

interface ContentProductsProps {
  products: Array<ProductResponseDTO>
}

const ContentProducts = ({ products }: ContentProductsProps) => (
  <section className='flex flex-wrap justify-evenly gap-10 p-8'>
    {
      products.length === 0 ? <div>No hay plantas</div> :
        products.map(product =>
          <Product
            key={product.id}
            id={product.id}
            commonName={product.commonName}
            scientificName={product.scientificName}
            firstLetterLastname={product.firstLetterLastname}
            family={product.family}
            status={product.status}
            urlPicture={product.urlPicture}
          />
        )
    }
  </section>
)
