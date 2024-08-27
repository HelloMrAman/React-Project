import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' //It kept it's upper and lower content as base for all web pages. Ex: Navbar and Footer display in each and every webpage

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        {/* upper (Header) and lower (Footer) element of Outlet should be same for all webpages. */}
        <Footer />
    </>
  )
}

export default Layout