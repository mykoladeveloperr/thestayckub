import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Cta from './components/Cta/Cta'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <div>
      <Hero>
        <Header></Header>
      </Hero>
      <Cta></Cta>
      <Footer></Footer>
    </div>
  )
}

export default App
