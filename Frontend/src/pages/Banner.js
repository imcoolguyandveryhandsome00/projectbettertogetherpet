import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import './Banner.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'; // Import from swiper/modules

import slide_image_1 from '../photo/20.jpg';
import slide_image_2 from '../photo/21.jpg';
import slide_image_3 from '../photo/22.jpg';
import slide_image_4 from '../photo/23.jpg';
import slide_image_5 from '../photo/24.jpg';
import slide_image_6 from '../photo/25.jpg';
import slide_image_7 from '../photo/20.jpg';

function Banner() {
  return (
    <div className="banner-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image_1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image_2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image_3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image_4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image_5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image_6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image_7" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
