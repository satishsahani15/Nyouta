import React from 'react'
import HeroSection from '../components/HeroSection'
import CustomersFavorites from '../components/CustomerFavorites'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CustomersFavorites/>
      <Cards/>
    </div>
  )
}

export default Home