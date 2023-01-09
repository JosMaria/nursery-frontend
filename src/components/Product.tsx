import { IdentificationResponseDTO, ProductResponseDTO } from '../types'
import { getIconGivenStatus } from '../utils';

import PlantImage from '../assets/image-plant.jpeg';

import './stylesheets/Product.css';

export const Product = ({ identification, status }: ProductResponseDTO) => {
  const iconStatus: JSX.Element = getIconGivenStatus(status);

  return (
    <div className='product-container'>
      <ImageProduct alt={identification.commonName} />
      <div className='product-bottom'>
        <ProductIdentification
          id={identification.id}
          commonName={identification.commonName}
          scientificName={identification.scientificName}
          firstLetterLastname={identification.firstLetterLastname}
          family={identification.family}
        />
        { iconStatus }
      </div>
    </div>
  )
}

interface ImageProductProps {
  alt: string;
}

const ImageProduct = ({ alt }: ImageProductProps): JSX.Element => (
  <div className='image-container'>
    <img src={PlantImage} alt={alt} className='image-plant' />
  </div>
)

const ProductIdentification = ({ commonName, scientificName, firstLetterLastname, family }: IdentificationResponseDTO): JSX.Element => (
  <div className='identification-container'>
    <p><b>{commonName}</b></p>
    <p><i>{scientificName} {firstLetterLastname}</i></p>
    <p>{family}</p>
  </div>
)

interface ProductStatusProps {
  icon: JSX.Element,
  description: string
}

export const ProductStatus = ({ icon, description }: ProductStatusProps): JSX.Element => (
  <div className='status-container'>
    { icon }
    <p className='status-word'><b>{description}</b></p>
  </div>
)

