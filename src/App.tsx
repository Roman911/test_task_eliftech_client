import React from 'react'
import { Routes, Route } from "react-router-dom"
import { ShoppingCart } from './modules'
import { Header, Shop } from './Components'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path='shopping-cart' element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
