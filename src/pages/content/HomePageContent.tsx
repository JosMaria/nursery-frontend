import { useEffect, useState } from 'react';
import { Product } from '../../components'
import { fetchAllProducts } from '../../services';
import { ProductResponseDTO } from '../../types';

import './stylesheets/HomePageContent.css'

interface HomePageContentProps {
  products: ProductResponseDTO[]
}

export const HomePageContent = () => {
  
  const [products, setProducts] = useState(Array<ProductResponseDTO>);
  
  useEffect(() => {
    fetchAllProducts()
      .then(data => setProducts(data));
  }, [])
  
  return (
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
  )
}
