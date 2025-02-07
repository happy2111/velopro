import Layout from './Layout.jsx'
import BikeDetails from './page/BikeDetail.jsx'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path='/bike/:id' element={<BikeDetails/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
