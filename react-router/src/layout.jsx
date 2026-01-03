import { useState } from 'react'
import './App.css'
import Header from './header/header'
import Footer from './footer/footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout