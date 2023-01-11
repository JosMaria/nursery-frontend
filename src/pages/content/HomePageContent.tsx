import { useEffect, useState } from 'react';
import { Product } from '../../components'
import { fetchAllProducts } from '../../services';
import { ProductResponseDTO } from '../../types';

import './stylesheets/HomePageContent.css'

const totalProductsByPage = 12;

export const HomePageContent = () => {
  
  const [products, setProducts] = useState(Array<ProductResponseDTO>);
  const[page, setPage] = useState(1)
  
  useEffect(() => {
    fetchAllProducts(page)
      .then(data => setProducts(data));
  }, [page])
  
  const nextPage = () => setPage(prev => prev + 1);
  const prevPage = () => setPage(prev => prev - 1);

  return (
    <section className='content-container'>
      <section className='home-page-content'>
        {
          products.map(product => 
            <Product
              key={product.id}
              id={product.id}
              commonName={product.commonName}
              scientificName={product.scientificName}
              firstLetterLastname={product.firstLetterLastname}
              family={product.family}
              status={product.status}
            />
          )  
        }
      </section>
      <div className='button-pagination-container'>
        <button onClick={prevPage} disabled={page === 0}>Anterior</button>
        <button onClick={nextPage} disabled={products.length < totalProductsByPage}>Siguiente</button>
      </div>
    </section>
  )
}
