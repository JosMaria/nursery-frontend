import { IdentificationResponseDTO, ProductResponseDTO } from '../types'
import { getIconGivenStatus } from '../utils';

import PlantImage from '../assets/image-plant.jpeg';

import './stylesheets/Product.css';

export const Product = ({ id, commonName, scientificName, firstLetterLastname, family, status }: ProductResponseDTO) => {
  const iconStatus: JSX.Element = getIconGivenStatus(status);

  return (
    <div className='product-container'>
      <ImageProduct alt={commonName} />
      <div className='product-bottom'>
        <ProductIdentification
          id={id}
          commonName={commonName}
          scientificName={scientificName}
          firstLetterLastname={firstLetterLastname}
          family={family}
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

