import { ProductResponseDTO } from '../../../types'

const style = 'text-sm tracking-tight text-gray-700 dark:text-white';

export const CardProduct = ({commonName, scientificName, scientistSurnameInitial, family, status}: ProductResponseDTO) => (
  <div className='max-w-xs border border-gray-200 rounded-2xl shadow bg-gray-800 hover:bg-neutral-800 dark:border-gray-700 hover:shadow-2xl transition-transform'>
    <img className='rounded-t-lg' src='https://dog.ceo/api/breeds/image/random' alt={commonName} />
    <div>
      <p className={`font-bold ${style}`}>{commonName}</p>
      <p className={`font-normal ${style}`}><i>{scientificName} {scientistSurnameInitial}</i></p>
      <p className={`font-normal ${style}`}>{family}</p>
      <p>{status}</p>
    </div>
  </div>
)
