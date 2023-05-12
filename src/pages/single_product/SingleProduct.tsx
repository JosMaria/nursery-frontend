import { useEffect, useState } from 'react'
import { SingleProductResponseDTO } from '../../types'
import { useParams } from 'react-router'
import { fetchByIdProduct } from '../../services'
import { SwiperPicture, InformationPlant } from './components'

const singleProductInitial: SingleProductResponseDTO = {
  id: 0,
  commonName: '',
  scientificName: '',
  scientistSurnameInitial: '',
  family: '',
  status: 'NON_EXISTENT',
  urlPictures: []
}

export const SingleProduct = () => {
  const [product, setProduct] = useState<SingleProductResponseDTO>(singleProductInitial);
  const { productId } = useParams()

  useEffect(() => {
    if (productId) {
      fetchByIdProduct(parseInt(productId))
        .then(responseProduct => setProduct(responseProduct));
    }
  }, []);

  return (
    <div className='flex flex-col align-center justify-center p-10'>
      <div className='flex justify-evenly'>
        <SwiperPicture urlPictures={product.urlPictures} />
        <InformationPlant product={product} />
      </div>
      <button 
        className='text-base w-fit p-3 text-[var(--color-level-one)] bg-[var(--color-level-six)] hover:bg-[var(--color-level-three)] rounded-md' 
        type='button'>
        Volver a Home
      </button>
    </div>
  )
}
