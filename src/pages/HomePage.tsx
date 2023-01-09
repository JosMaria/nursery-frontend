import { ProductResponseDTO } from "../types";
import { Product } from "../components";

import './stylesheets/HomePage.css';


interface HomePageProps {
  products: ProductResponseDTO[]
}

export const HomePage = ({ products }: HomePageProps) => {
  return (
    <section>
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
