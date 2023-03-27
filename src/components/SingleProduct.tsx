import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchProductById } from '../services';
import { SingleProductResponseDTO } from '../types';
import plantImage from '../assets/image-plant.jpeg';

export const SingleProduct = () => {
    const [product, setProduct] = useState<SingleProductResponseDTO>();
    const { productId } = useParams()

    useEffect(() => {
        if (productId) {
            fetchProductById(productId)
                .then(data => setProduct(data));
        }
        
    }, [])

    return (
        <div className='flex flex-col align-center justify-center p-10'>
            <h1 className='text-6xl capitalize text-center'>{product?.commonName}</h1>
            
            <div className='flex justify-center p-10'>
                <img className='rounded-t-lg w-2/6' src={plantImage} alt={product?.commonName} />
                <div className='flex flex-col p-10'>
                    <p className='text-lg'><b>Nombre cientifico: </b>{product?.scientificName} {product?.firstLetterLastname}</p>
                    <p className='text-lg'><b>Familia: </b>{product?.family}</p>
                    <p className='text-lg'><b>Estado:</b>{product?.status}</p>
                </div>
            </div>
            
            <Link to={'/'} className='flex justify-start min-w-full p-10'>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Volver a Home
                </button>
            </Link>
        </div>
    )
}
