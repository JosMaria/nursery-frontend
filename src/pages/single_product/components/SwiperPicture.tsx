import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Keyboard, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './stylesheets/SwiperPicture.css';

interface SwiperPictureProps {
  urlPictures: Array<string>
}

export const SwiperPicture = ({ urlPictures }: SwiperPictureProps) => (
  <Swiper
    className='swiper-container' dir='rtl' slidesPerView={1} spaceBetween={10}
    keyboard={{ enabled: true }} zoom={true} navigation={true} pagination={{ clickable: true }}
    modules={[ Zoom, Keyboard, Navigation, Pagination ]}>
    {
      urlPictures.map((urlPicture, index) => (
        <SwiperSlide className='swiper-slice-container' key={index}>
          <div className='swiper-zoom-container'>
            <img alt={urlPicture} src={urlPicture} loading='lazy' />
          </div>
        </SwiperSlide>
      ))
    }
  </Swiper>
)