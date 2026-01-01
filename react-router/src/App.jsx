import { useState } from 'react'
import './App.css'
import Home from './home/home'
import Header from './header/header'
import Footer from './footer/footer'
// import {Outlet} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header />
      <Home />
      <footer />

    </>
  )
}

export default App
