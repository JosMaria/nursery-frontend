import { Link } from 'react-router-dom'
import { ProductResponseDTO } from '../../../types'

export const CardProduct = ({id, commonName, scientificName, scientistSurnameInitial, family, status}: ProductResponseDTO) => (
  <div className='w-5/6 h-fit hover:shadow-xl flex flex-col my-4 bg-[var(--color-level-five)]'>
    <img 
      className='rounded-t h-72 w-full p-1' 
      src='https://ornamentalis.com/wp-content/uploads/2016/06/la-poda-de-plantas-ornamentales.jpg' 
      alt={commonName} 
    />
    <div className='text-[var(--color-level-one)] p-3 rounded-b-xl'>
      <Link to={`/products/${id}`}>
        <p className='font-medium text-sm'>{commonName}</p>
        <p className='font-medium text-sm'><i>{scientificName} {scientistSurnameInitial}</i></p>
        <p className='font-medium text-sm'>{family}</p>
        <p className='font-semibold text-xs text-center'>{status}</p>
      </Link>
    </div>
  </div>
)
