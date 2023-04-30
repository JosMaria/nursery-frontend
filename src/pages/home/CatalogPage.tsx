import { useEffect, useState } from 'react'
import { ProductResponseDTO } from '../../types';
import { CardProduct, ClassificationNavbar, ButtonsPagination } from './components';
import { fetchAllProducts } from '../../services';

export const CatalogPage = () => {
  const [products, setProducts] = useState<Array<ProductResponseDTO>>([]);

  useEffect(() => {
    fetchAllProducts()
    .then(responseProducts => setProducts(responseProducts));
  }, [])

  return (
    <section className='bg-gray-400 w-full flex flex-col justify-between black'>
      <ClassificationNavbar />
      <div className='flex flex-wrap justify-evenly gap-10 p-8'>
        {
          products.length === 0 ?
            <h1>No hay plantas</h1> :
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
      <ButtonsPagination />
    </section>
  )
}
