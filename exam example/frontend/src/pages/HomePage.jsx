import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../layout/Header'
import ShopProduct from '../layout/ShopProduct'
import WomenProducts from '../layout/WomenProducts'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Header/>
      <ShopProduct/>
      <WomenProducts/>
    </>
  )
}

export default HomePage
