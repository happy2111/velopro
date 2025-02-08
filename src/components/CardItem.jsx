import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './product-slide.css';
import { Pagination } from 'swiper/modules';
import { IoArrowForwardOutline } from 'react-icons/io5';

const CardItem = (key, item) => { 
  return (
    <li key={key} className='shadow-red-700 hover:shadow-lg transition-all w-[45%] sm:w-[250px] h-[370px] bg-[#1c1c1c] rounded-[20px] overflow-hidden relative' style={{marginTop: '30px'}}>
              <div className='absolute top-3 right-3 z-50'>
                <label className="ui-bookmark">
                  <input type="checkbox" />
                  <div className="bookmark">
                    <svg
                      viewBox="0 0 16 16"
                      style={{marginTop: "4px"}}
                      className="bi bi-heart-fill"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </label>
              </div>
              
              <div className='w-full h-[65%] card__image'>
              <Swiper
                pagination={{
                  dynamicBullets: false,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {
                  item.images.map((j, index) => (
                    <SwiperSlide>
                      <img src={j} alt={item.name} className='h-full w-full object-cover'/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              </div>
              <div className="text-white" style={{padding: "0 20px"}}>
                <p className='text-2xl text-red-600 font-semibold' style={{marginTop: "5px"}}>{item.price}</p>
                <p className='line-clamp-1'>{item.name}</p>
                <p className='text-sm text-neutral-600'>{item.size}</p>
                <Link to={`./bike/${item.id}`} style={{margin: "10px 0"}} className='text-red-600 items-center gap-x-3 text-xl font-semibold flex'>See More <IoArrowForwardOutline /></Link>
              </div>

    </li>
  ) 
}
export default CardItem
