import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import bikes from "../assets/Bikes"
import spareParts from '../assets/SpareParts'
import { IoArrowForwardOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './product-slide.css';

import { Pagination } from 'swiper/modules';
import CardItem from './CardItem'

const Products = () => {
  let [section, setSection] = useState(false)

  function sectionHandler() {
    setSection(!section)
  }

  let [favorite, setFavorite] = useState(false)
  function favoriteHandler(id) {
    
  }


  return (
    <section id='products' className='' style={{margin: "50px 0"}}>
      <div className="container">
        <div className="title flex max-sm:flex-col justify-between ">
          <h1 className='text-3xl max-sm:text-2xl max-sm:text-center font-semibold text-white'>MAHSULOTLARIMIZ</h1>
          <div className='flex text-xl text-white gap-4 justify-center' style={{margin: "20px 0"}}>
            <button href='#' className={`cursor-pointer ${section ? "" : "underline decoration-[#DD1212]"}`}  onClick={() => setSection(false)}>Bikes</button>
            <button href='#' className={`cursor-pointer ${!section ? "" : "underline decoration-[#DD1212]"}`}  onClick={() => setSection(true)}>Spare Parts</button>
          </div>
        </div>
        <ul className={`flex flex-wrap justify-between max-sm:justify-evenly  ${section ? 'hidden': ''}`} >
          {bikes.map((i, index) => (
            // <CardItem key={index} item={i}/>
            <li key={index} className='shadow-red-700 hover:shadow-lg transition-all w-[45%] sm:w-[250px] h-[370px] bg-[#1c1c1c] rounded-[20px] overflow-hidden relative' style={{marginTop: '30px'}}>
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
                  i.images.map((j, index) => (
                    <SwiperSlide>
                      <img src={j} alt={i.name} className='h-full w-full object-cover'/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              </div>
              <div className="text-white" style={{padding: "0 20px"}}>
                <p className='text-2xl text-red-600 font-semibold' style={{marginTop: "5px"}}>{i.price}</p>
                <p className='line-clamp-1'>{i.name}</p>
                <p className='text-sm text-neutral-600'>{i.size}</p>
                <Link to={`./bike/${i.id}`} style={{margin: "10px 0"}} className='text-red-600 items-center gap-x-3 text-xl font-semibold flex'>See More <IoArrowForwardOutline /></Link>
              </div>

            </li>
          ))}
        </ul>


        <ul className={`flex flex-wrap justify-between max-sm:justify-evenly  ${!section ? 'hidden': ''}`} >
          {spareParts?.map((i, index) => (
            <li key={index} className='shadow-red-700 hover:shadow-lg transition-all w-[45%] sm:w-[250px] h-[370px] bg-[#1c1c1c] rounded-[20px] overflow-hidden relative' style={{marginTop: '30px'}}>
              <div className='absolute top-3 right-3 z-50'>
                <label className="ui-bookmark bg-amber-700">
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
                  i.images.map((j, index) => (
                    <SwiperSlide key={index}>
                      <img src={j} alt={i.name} className='h-full w-full object-cover'/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              </div>
              <div className="text-white" style={{padding: "0 20px"}}>
                <p className='text-2xl text-red-600 font-semibold' style={{marginTop: "5px"}}>{i.price}</p>
                <p className='line-clamp-1'>{i.name}</p>
                <p className='text-sm text-neutral-600'>{i.size}</p>
                <Link to={`./bike/${i.id}`} style={{margin: "10px 0"}} className='text-red-600 items-center gap-x-3 text-xl font-semibold flex'>See More <IoArrowForwardOutline /></Link>
              </div>

            </li>
          ))}
        </ul>
        
        {/* <ul className={`flex flex-wrap justify-between max-sm:justify-center ${!section ? 'hidden': ''}`}>
          {spareParts.map((i) => (
            <li key={i.id} className='w-[250px] h-[300px]  bg-red-600' style={{marginTop: "30px"}}><Link to={`bike/${i.id}`}>{i.name}</Link> - {i.price}</li>
          ))}
        </ul> */}
      </div>
    </section>
  )
}

export default Products
