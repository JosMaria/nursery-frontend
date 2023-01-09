import { TbPlant, TbPlantOff } from "react-icons/tb";
import { BsBagCheck } from "react-icons/bs";
import plantImage from '../assets/image-plant.jpeg';

import './stylesheets/HomePage.css';

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
    <div className='product-container'>
           
      <div className='image-container'>
        <img src={plantImage} alt={product.commonName} className='image-plant' />
      </div>
      
      <div className='product-bottom'>
        <div className='identification-container'>
          <p><b>{product.commonName}</b></p>
          <p><i>{product.scientificName} {product.firstLetterLastname}</i></p>
          <p>{product.family}</p>
        </div>
        {
          selectIconToStatus(product.status)
        }
      </div>
    </div>
  )
}

interface ProductStatusProps {
  icon: JSX.Element,
  description: string
}

const ProductStatus = ({ icon, description }: ProductStatusProps) => {
  return (
    <div className='status-container'>
      { icon }
      <p className='status-word'><b>{description}</b></p>
    </div>
  )
}

const selectIconToStatus = (status: string) => {
  if (status === 'AVAILABLE') {
    return <ProductStatus icon={<BsBagCheck size='2.2em' />} description='DISPONIBLE' />;
  } else if (status === 'CONSERVATION') {
    return <ProductStatus icon={<TbPlant size='2.2em' />} description='CONSERVACIÓN' />;
  } else {
    return <ProductStatus icon={<TbPlantOff size='2.2em' />} description='NO EXISTENTE' />;
  }
}