import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchProductById, getUrls } from '../services';
import { SingleProductResponseDTO } from '../types';
import { Status } from '../types'

import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Keyboard, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './singleProduct.css';

const singleProductInitial: SingleProductResponseDTO = {
    id: 0,
	commonName: '',
	scientificName: '',
	firstLetterLastname: '',
	family: '',
	status: 'IN_CONSERVATION',
    urlPicture: []
}

export const SingleProduct = () => {
    const [product, setProduct] = useState<SingleProductResponseDTO>(singleProductInitial);
    const [urlPictures, setUrlPictures] = useState<Array<string>>([]);

    const { productId } = useParams()

    useEffect(() => {
        if (productId) {
            fetchProductById(productId)
                .then(data => setProduct(data));
        }
        getUrls(4).then(response => setUrlPictures(response));
    }, [])

    return (
        <div className='flex flex-col align-center justify-center p-10'>
            <div className='flex justify-evenly'>
                <SwiperPicture urlPictures={urlPictures} />
                <InformationMain 
                    commonName={product.commonName}
                    scientificName={product.scientificName}
                    firstLetterLastname={product.firstLetterLastname}
                    family={product.family}
                    status={product.status}    
                />
            </div>
            <Link to={'/'} className='flex justify-start min-w-full p-10'>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Volver a Home
                </button>
            </Link>
        </div>
    )
}

interface SwiperPictureProps {
    urlPictures: Array<string>
}

const SwiperPicture = ({ urlPictures }: SwiperPictureProps) => {
    return (
        <Swiper
            dir="rtl"
            slidesPerView={1}
            spaceBetween={10}
            keyboard={{ enabled: true }}
            zoom={true}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[ Zoom, Keyboard, Navigation, Pagination ]}
            className='swiper-container'>
            {
                urlPictures.map((urlPicture, index) => (
                    <SwiperSlide className='swiper-slice-container' key={index}>
                        <PictureSlide 
                            alt={urlPicture} 
                            src={urlPicture} 
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

interface PictureSlideProps {
    alt: string;
    src: string
}

const PictureSlide = ({ alt, src }: PictureSlideProps) => (
    <div className="swiper-zoom-container">
        <img alt={alt} src={src} loading="lazy" />
    </div>
)

interface InformationMainProps {
	commonName: string,
	scientificName?: string,
	firstLetterLastname?: string,
	family?: string,
	status: Status
}

const InformationMain = ({ commonName, scientificName, firstLetterLastname, family, status }: InformationMainProps) => {
    return (
        <div className='flex flex-col'>
            <h1 className='text-2xl p-3.5'>{commonName}</h1>
            <p className='text-lg'><b>Nombre cientifico:</b><i> {scientificName} {firstLetterLastname}</i></p>
            <p className='text-lg'><b>Familia:</b> {family}</p>
            <p className='text-lg'><b>Estado:</b> {status}</p>
        </div>
    )
}
