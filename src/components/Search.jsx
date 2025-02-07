import React from 'react'
import "./search.css"

const Search = () => {
  const type_options = [
    { name: "All", value: "all" },
    { name: "Mountain Bike", value: "mountain" },
    { name: "Road Bike", value: "road" },
    { name: "Hybrid Bike", value: "hybrid" },
    { name: "BMX", value: "bmx" },
    { name: "Cruiser Bike", value: "cruiser" },
    { name: "Folding Bike", value: "folding" },
    { name: "Electric Bike", value: "electric" },
    { name: "Touring Bike", value: "touring" },
    { name: "Gravel Bike", value: "gravel" },
    { name: "Fat Bike", value: "fat" },
    { name: "Recumbent Bike", value: "recumbent" },
    { name: "Tandem Bike", value: "tandem" },
    { name: "Track Bike", value: "track" }
  ];
  const size_options = [
    { name: "All", value: "all" },
    { name: "Extra Small (XS)", value: "xs" },
    { name: "Small (S)", value: "s" },
    { name: "Medium (M)", value: "m" },
    { name: "Large (L)", value: "l" },
    { name: "Extra Large (XL)", value: "xl" },
    { name: "Kids", value: "kids" },
    { name: "One Size", value: "one_size" }
  ];
  const brand_options = [
    { name: "All", value: "all" },
    { name: "Trek", value: "trek" },
    { name: "Specialized", value: "specialized" },
    { name: "Giant", value: "giant" },
    { name: "Cannondale", value: "cannondale" },
    { name: "Scott", value: "scott" },
    { name: "Santa Cruz", value: "santa_cruz" },
    { name: "Bianchi", value: "bianchi" },
    { name: "Merida", value: "merida" },
    { name: "Fuji", value: "fuji" },
    { name: "Cervelo", value: "cervelo" },
    { name: "Orbea", value: "orbea" },
    { name: "Kona", value: "kona" },
    { name: "BMC", value: "bmc" },
    { name: "Yeti", value: "yeti" },
    { name: "Marin", value: "marin" }
  ];


  return (
    <div className=' sm:relative' id='search_section'>
      <div className="container bg-[#1c1c1c] sm:rounded-[30px] ">
        <h1 className='text-center text-3xl max-sm:text-2xl max-sm:font-medium font-semibold'>VELOLOGIYANI QIDIRISH</h1>
        <form action="" className='flex max-sm:flex-col gap-4 sm:justify-between sm:items-end' >
          <div>
          <label htmlFor="bike_type">Turi</label>
          <select name="type" id="bike_type" className='w-1/4'>
            {
              type_options.map((i, index) => (
                <option key={index} value={i.value}>{i.name}</option>
              ))
            }
          </select>
          </div>

          <div>
          <label htmlFor="bike_size">Size</label>
          <select name="type" id="bike_size">
            {
              size_options.map((i, index) => (
                <option key={index} value={i.value}>{i.name}</option>
              ))
            }
          </select>
          </div>
          
          <div>
          <label htmlFor="bike_brand">Brand</label>
          <select name="type" id="bike_brand">
            {
              brand_options.map((i, index) => (
                <option key={index} value={i.value}>{i.name}</option>
              ))
            }
          </select>
          </div>

          <input type="submit" value={"Search"} className='text-xl' />
        </form>
      </div>

    </div>
  )
}

export default Search
