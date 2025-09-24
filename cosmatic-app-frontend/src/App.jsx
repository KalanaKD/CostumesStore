import './App.css'
import React from 'react'
import Header from './components/Header.jsx'
import ProductCard from './components/ProductCard.jsx'

function App() {

  return (
    <>
      <h1>Hello Vite + React!</h1>
      <div className="product-container">
          
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
      </div>
      <Header />
    </>
  )
}

export default App
