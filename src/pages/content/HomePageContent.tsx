import { Product } from '../../components'
import { ProductResponseDTO } from '../../types';
import { products } from '../../utils/data';

import './stylesheets/HomePageContent.css'

export const HomePageContent = () => {
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
