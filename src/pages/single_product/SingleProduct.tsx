import { useEffect, useState } from 'react'
import { SingleProductResponseDTO } from '../../types'
import { useParams } from 'react-router'
import { fetchByIdProduct } from '../../services'
import { SwiperPicture, InformationPlant } from './components'
import { Link } from 'react-router-dom'

const singleProductInitial: SingleProductResponseDTO = {
  id: 0,
  commonName: '',
  scientificName: '',
  scientistSurnameInitial: '',
  family: '',
  status: 'NON_EXISTENT',
  urlPictures: [],
  classifications: []
}

export const SingleProduct = () => {
  const [product, setProduct] = useState(singleProductInitial);
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      fetchByIdProduct(parseInt(productId))
        .then(responseProduct => setProduct(responseProduct));
    }
  }, []);

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col gap-5 w-2/3 bg-[var(--color-level-two)] p-5'>
        <div className='flex justify-evenly'>
          <SwiperPicture urlPictures={product.urlPictures} />
          <InformationPlant product={product} />
        </div>
        <Link to='/' className='self-center'>
          <button
            className='text-base w-fit p-3 text-[var(--color-level-one)] bg-[var(--color-level-six)] hover:bg-[var(--color-level-three)] rounded-md'
            type='button'>
            Volver a Home
          </button>
        </Link>
      </div>
    </div>
  )
}
