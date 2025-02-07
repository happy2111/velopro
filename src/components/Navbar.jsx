import React, { useState } from 'react'
import { IoCart, IoCartOutline, IoHeartOutline, IoHeart, IoMenuOutline, IoCloseOutline    } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [ menu, setMenu ] = useState(false)

  function menuHandler() {
    setMenu(!menu)
  }
  let links = [
    {name: "Asosiy", href: "", current: true },
    {name: "Do'kon", href: "", current: true },
    {name: "Biz Haqimizda", href: "", current: true },
    {name: "Bog'lanish", href: "", current: true },
  ]
  return (
    <header className='h-[80px] max-sm:h-[55px] bg-black flex items-center relative '>
        <nav className='container flex justify-between text-white'>
          <div className='flex gap-2 items-center'>
            <span className='sm:hidden text-3xl'>
              <IoMenuOutline onClick={menuHandler} className={menu ? "hidden": "block"}/>
              <IoCloseOutline className={menu ? "block": "hidden"} onClick={menuHandler}/>
            </span>
            
            <a href="" className='font-semibold text-3xl max-sm:text-2xl' >VELOPRO</a>
          </div>
          
          <ul className='hidden sm:flex items-center gap-[35px] text-[16px] '>
            {
              links.map((i, index) => (
                <li key={index}><a href={i.href} className="">{i.name}</a></li>
              ))
            }
          </ul>

          <div className='flex items-center text-3xl gap-[20px]'>
            <IoHeartOutline />
            <IoCartOutline />
          </div>

          <div className={menu ? "top-[55px] fixed bg-black  left-0  w-full z-90" : "h-0!  top-[55px] opacity-0 bg-black absolute  left-0  w-full "}  style={{height: "calc(100vh - 55px)", transition: "0.3s", padding: "30px 15px 0 15px"}} >
            <ul className='flex flex-col items-start gap-[30px] text-[18px] '>
              {
                links.map((i, index) => (
                  <li key={index}><Link onClick={menuHandler} href={i.href} className="">{i.name}</Link></li>
                ))
              }
            </ul>
          </div>
        </nav>
    </header>
  )
}

export default Navbar
