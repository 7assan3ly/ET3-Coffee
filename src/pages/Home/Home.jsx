import React from 'react'
import { Navbar, Head, MakeCaffee, Products, Join } from '../../components'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Head />
        <MakeCaffee />
        <Products />
        <Join />
    </div>
  )
}

export default Home