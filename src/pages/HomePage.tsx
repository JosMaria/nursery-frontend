import './stylesheets/HomePage.css';
import { TbPlant } from "react-icons/tb";

interface HomePageProps {
  product: {
    id: number,
    commonName: string,
    scientificName?: string,
    firstLetterLastname?: string,
    family?: string,
    status: string
  }
}

export const HomePage = ({ product }: HomePageProps) => {
  return (
    <section>
      <Product product={product} />


    </section>
  )
}

const Product = ({ product }: HomePageProps ) => {
  return (
    <div className='product-bottom'>
      <div className='identification-container'>
        <p><b>{product.commonName}</b></p>
        <p><i>{product.scientificName} {product.firstLetterLastname}</i></p>
        <p>{product.family}</p>
      </div>
      <TbPlant size='3em' />
    </div>
  )
}