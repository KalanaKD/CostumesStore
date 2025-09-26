import './App.css'
import React from 'react'
import Header from './components/Header.jsx'
import ProductCard from './components/ProductCard.jsx'
import { Test } from './components/Test.jsx'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import HomePage from './pages/HomePage.jsx'
import Register from './pages/Register.jsx'
import { AdminPage } from './pages/AdminPage.jsx'
import { Toaster } from 'react-hot-toast'
import AdminProductsPage from './pages/admin/AdminProductsPage.jsx'

function App() {

  return (
    <>
    <Toaster position='top-right'/>
      {/* <h1>Hello Vite + React!</h1> */}
      {/* <div className="product-container bg-red-100" >
          
        <ProductCard image="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/media-gallery/gray/non-touch/notebook-laptop-xps-16-9640-nt-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1344&qlt=100,1&resMode=sharp2&size=1344,804&chrss=full"
        altDes="dell-laptop"
        name="Gaming Laptop"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        price="$1200"
        />
        <ProductCard image="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/media-gallery/gray/non-touch/notebook-laptop-xps-16-9640-nt-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1344&qlt=100,1&resMode=sharp2&size=1344,804&chrss=full"
        altDes="dell-laptop"
        name="Gaming Laptop"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        price="$1200"
        />
        <ProductCard image="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/media-gallery/gray/non-touch/notebook-laptop-xps-16-9640-nt-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1344&qlt=100,1&resMode=sharp2&size=1344,804&chrss=full"
        altDes="dell-laptop"
        name="Gaming Laptop"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        price="$1200"
        />
        <ProductCard image="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/media-gallery/gray/non-touch/notebook-laptop-xps-16-9640-nt-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1344&qlt=100,1&resMode=sharp2&size=1344,804&chrss=full"
        altDes="dell-laptop"
        name="Gaming Laptop"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        price="$1200"
        />
      </div> */}
      {/* <Header /> */}
      {/* <Test /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin/*' element={<AdminPage />} />
          <Route path='*' element={<h1>404 Not Found!</h1>} />
          <Route path='/testing' element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
