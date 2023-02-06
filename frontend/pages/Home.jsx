import React from 'react'
import Cart from '../components/Cart'
import Filters from '../components/Filters'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='store'>
        <Filters/>
        <Products/>
        <Cart/>
    </div>
  )
}

export default Home