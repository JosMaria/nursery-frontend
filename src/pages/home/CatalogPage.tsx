import { useEffect, useState } from 'react'
import { ProductResponseDTO } from '../../types';
import { CardProduct, ClassificationNavbar, ButtonsPagination, EmptyContent } from './components';
import { fetchAllProducts } from '../../services';

export const CatalogPage = () => {
  const [products, setProducts] = useState<Array<ProductResponseDTO>>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchAllProducts(page)
      .then(responseProducts => setProducts(responseProducts));
  }, [page]);

  return (
    <section className='w-full flex flex-col justify-between items-center'>
      <ClassificationNavbar />
      {
        products.length === 0 ?
          <EmptyContent /> :
          <div className='w-full grid grid-cols-4 gap-4 place-items-center p-5'>
            {
              products.map(product =>
                <CardProduct
                  key={product.id}
                  id={product.id}
                  commonName={product.commonName}
                  scientificName={product.scientificName}
                  scientistSurnameInitial={product.scientistSurnameInitial}
                  family={product.family}
                  status={product.status}
                  firstUrlPicture={product.firstUrlPicture}
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
