import { useState } from 'react'
import './App.css'
import Home from './home/home' // Change made by Amazon Q - Fixed import path
import Header from './header/header' // Change made by Amazon Q - Fixed import path
import Footer from './footer/footer' // Change made by Amazon Q - Fixed import path
import {Outlet} from 'react-router-dom'

function Layout() { // Change made by Amazon Q - Fixed component name capitalization

  return (
    <>
      <Header /> {/* Change made by Amazon Q - Fixed component capitalization */}
      <Outlet />
      <Footer /> {/* Change made by Amazon Q - Fixed component capitalization */}

    </>
  )
}

export default Layout // Change made by Amazon Q - Fixed export name