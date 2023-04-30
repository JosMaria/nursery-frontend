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
      <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Volver a Home
      </button>
    </div>
  )
}
