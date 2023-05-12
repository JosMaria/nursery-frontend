import { SingleProductResponseDTO } from '../../../types'

interface InformationPlantProps {
  product: SingleProductResponseDTO
}

export const InformationPlant = ({ product }: InformationPlantProps) => {
  return (
    <div className='flex flex-col justify-start'>
      <h1 className='text-3xl font-medium uppercase mb-5'>
        {product.commonName}
      </h1>
      <p className='text-lg'>
        <b>Nombre cientifico:</b> <i>{product.scientificName} {product.scientistSurnameInitial}</i>
      </p>
      <p className='text-lg'>
        <b>Familia:</b> {product.family}
      </p>
      <p className='text-lg'>
        <b>Estado:</b> {product.status}
      </p>
      {/* <ul>
        {
          classifications.map(classification => 
            <li>
              {classification}
            </li>
          )
        }
      </ul> */}
    </div>
  )
}
