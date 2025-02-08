import React from 'react'
import { useParams } from 'react-router-dom'
import bikes from "../assets/Bikes"
import { IoArrowBack } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slide.css';

import { Pagination, Navigation } from 'swiper/modules';


const BikeDetail = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} thumbnails" style="">
              <img src="${bike.images[index]}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px;" />
            </span>`;
    },
  };

  const { id } = useParams();
  let bike = bikes.find((b) => b.id == parseInt(id));
  console.log(bike.images)
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <section className='' id='bikeDetails'>
      <div className="container pb-3">
        <Link to="../" className='border-white border-2 rounded-[20px] text-2xl text-white flex w-40 justify-evenly items-center px-4 py-2 my-8 hover:bg-white hover:text-black transition-all' style={{}}><IoArrowBack/>Orqaga</Link>

        <ul className='flex my-8'>
          <li>
            <Link to="/" className='text-red-700'>Asosiy</Link>
          </li>
          {pathnames.map((value, index) => {
            const path = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={path} className='flex items-center'>
                <span className='mx-2 text-gray-500'>/</span>
                {isLast ? (
                  <span className='text-gray-500'>{value}</span>
                ) : (
                  <Link to={path} className='text-gray-500'>
                    {formatBreadcrumb(value)}
                  </Link>
                )}

              </li>
            )
          })}
        </ul>
        
        <main className=''>
          <div className="flex gap-[40px] max-sm:flex-col ">
            <div className='h-auto sm:w-[60%] rounded-[30px] overflow-hidden'>
            <Swiper
                pagination={pagination}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {
                  bike.images.map((i, index) => {
                    console.log(i)
                    return (
                      <SwiperSlide key={index}><img src={i} alt={i} /></SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
            <div className='bg-white border-2 grow-1'>shoping details</div>
          </div>

          <div className="flex">
            <div className='bg-white border-2 basis-[60%]'>description</div>
          </div>


        </main> 
        
        {/* <div className='bg-white border-2'>
          footer
        </div> */}
      </div>
    </section>
  )
}

const formatBreadcrumb = (text) => {
  const map = {
    "categories": "Все категории",
    "sports": "Спорт и отдых",
    "cycling": "Велоспорт",
    "accessories": "Аксессуары для велоспорта", 
  }
  return map[text] || text;
}

export default BikeDetail
