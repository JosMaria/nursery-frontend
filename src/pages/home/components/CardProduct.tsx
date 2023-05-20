import { Link } from 'react-router-dom'
import { ProductResponseDTO } from '../../../types'

interface CardProductProps {
  productResponseDTO: ProductResponseDTO
}

export const CardProduct = ({ productResponseDTO }: CardProductProps) => (
  <div className='w-9/12 m-3 h-full hover:shadow-xl flex flex-col justify-center bg-[var(--color-level-five)]'>
    <img
      className='rounded-t w-full p-1 h-4/6'
      src='https://2.bp.blogspot.com/-A5OrWCBE6hk/VLZlh6NP2fI/AAAAAAAAAYc/vhvMMqtlu18/s1600/plantas.jpg'
      alt={productResponseDTO.commonName}
    />
    <Link className='text-[var(--color-level-one)] p-3 rounded-b-xl h-2/6 grid grid-rows-4' to={`/products/${productResponseDTO.id}`}>
      <p className='font-medium text-sm capitalize'>{productResponseDTO.commonName}</p>
      <p className='font-medium text-sm capitalize'><i>{productResponseDTO.scientificName} {productResponseDTO.scientistSurnameInitial}</i></p>
      <p className='font-medium text-sm capitalize'>{productResponseDTO.family}</p>
      <p className='font-semibold text-xs text-center place-self-end'>{productResponseDTO.status}</p>
    </Link>
  </div>
)
