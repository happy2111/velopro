import React from 'react'
import heroIMG from '../assets/hero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiTelegramLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay} from 'swiper/modules';

import './slide.css';

const Hero = () => {
  
  return (
    <div
        className="max-sm:h-[50vh] h-full relative w-full bg-black"
     >
      <div className=' text-white left-3 text-4xl absolute z-50 top-[50%] translate-y-[-50%] flex flex-col gap-1.5'>
        <a href="https://t.me/hy_21"><RiTelegramLine /></a>
        <a href=""><FaWhatsapp/></a>
        <a href="tel:+998934474009"><IoCallOutline/></a>
      </div>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={heroIMG} alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1496147433903-1e62fdb6f4be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBiaWtlfGVufDB8fDB8fHww" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i1.pickpik.com/photos/233/284/1020/road-bike-fixie-handlebar-black-preview.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://c02.purpledshub.com/uploads/sites/39/2020/01/Capture-One17641-707be0a-scaled.jpg?webp=1&w=1200" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
