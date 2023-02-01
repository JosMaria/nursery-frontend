import { IdentificationResponseDTO, ProductResponseDTO } from '../types'
import { getIconGivenStatus } from '../utils';

import plantImage from '../assets/image-plant.jpeg';

export const Product = ({ id, commonName, scientificName, firstLetterLastname, family, status }: ProductResponseDTO) => {
  const iconStatus: JSX.Element = getIconGivenStatus(status);
  return (
    <div className='max-w-xs border border-gray-200 rounded-2xl shadow bg-gray-800 hover:bg-neutral-800 dark:border-gray-700 hover:shadow-2xl transition-transform'>
      <img className='rounded-t-lg' src={plantImage} alt={commonName} />
      <div className='flex items-center justify-between py-5 px-4'>
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

interface ProductStatusProps {
  icon: JSX.Element,
  description: string
}

export const ProductStatus = ({ icon, description }: ProductStatusProps): JSX.Element => (
  <div className='flex flex-col items-center gap-2'>
    <div className='bg-gray-300 p-2 rounded-full'>{ icon }</div>
    <p className='text-gray-100 text-xs'><b>{description}</b></p>
  </div>
)

const ProductIdentification = ({ commonName, scientificName, firstLetterLastname, family }: IdentificationResponseDTO) => {
  const style = 'text-sm tracking-tight text-gray-700 dark:text-white'
  return (
    <div className=''>
      <p className={`font-bold ${style}`}>{commonName}</p>
      <p className={`font-normal ${style}`}><i>{scientificName} {firstLetterLastname}</i></p>
      <p className={`font-normal ${style}`}>{family}</p>
    </div>
  )
}
