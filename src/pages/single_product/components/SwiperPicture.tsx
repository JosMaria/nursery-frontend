import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Keyboard, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './stylesheets/SwiperPicture.css';

const urlPicturesMock = [
  'https://www.duiops.net/seresvivos/galeria/plantasflores/56541_poster2000.jpg',
  'https://vivezapoapan2013.files.wordpress.com/2012/11/plantas.jpg',
  'https://www.duiops.net/seresvivos/galeria/plantasflores/56529_poster2000.jpg',
  'https://lh5.googleusercontent.com/-j1vVA-ELv0Y/TYcz5AXBBJI/AAAAAAAAAE4/vM8unD_vJp0/s1600/DSCF3681.JPG'  
];

interface SwiperPictureProps {
  urlPictures: Array<string>
}

export const SwiperPicture = ({ urlPictures }: SwiperPictureProps) => (
  <Swiper
    className='swiper-container' dir='rtl' slidesPerView={1} spaceBetween={10}
    keyboard={{ enabled: true }} zoom={true} navigation={true} pagination={{ clickable: true }}
    modules={[ Zoom, Keyboard, Navigation, Pagination ]}>
    {
      urlPicturesMock.map((urlPicture, index) => (
        <SwiperSlide className='swiper-slice-container' key={index}>
          <div className='swiper-zoom-container'>
            <img alt={urlPicture} src={urlPicture} loading='lazy' />
          </div>
        </SwiperSlide>
      ))
    }
  </Swiper>
)
