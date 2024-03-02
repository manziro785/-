import React from 'react'
import './mainPAge.css'
import Header from '../../componentes/header/header'
import Cards from '../../componentes/cards/cards'
import Info from '../../componentes/info/info'
import Video from '../../componentes/video/video'
import Aboutus from '../../componentes/aboutus/aboutus'
import Footer from '../../componentes/footer/footer'



export  function MainPage() {
  return (
    <>
    <Header/>
    <Cards/>
    <Info/>
    <Video/>
    <Aboutus/>
    <Footer/>
    </>
  )
}
