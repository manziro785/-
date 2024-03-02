import React from 'react'
import './testPAge.css'
import Footer from '../../componentes/footer/footer'

export  function TestPage() {
  return (
    <>
<div className="header-test">
  <div className="header">
<div className="logo">
          <a href="/"> <img src="./src/assets/pictures/ОРТ мастер.svg" alt="" className="logo-main" />
          </a>  </div>
        <div className="navbar">
            <div className="autor">
                <img src="./src/assets/pictures/icon (1).svg" alt="" />
            </div> 
        </div>
</div>
</div>
<main>
  <div className="title-test">
  Онлайн тест
  </div>
  <div className="subjects">
   <a href="https://testing.kg/tests/22"><img src="./src/assets/pictures/Frame 7 (1).svg" alt="" /></a> 
   <a href="https://testing.kg/tests/32"><img src="./src/assets/pictures/Frame 10.svg" alt="" /></a> 
   <a href="https://testing.kg/tests/43"><img src="./src/assets/pictures/Frame 12.svg" alt="" /></a> 
   <a href="https://testing.kg/tests/23"><img src="./src/assets/pictures/Frame 13.svg" alt="" /></a> 
   <a href="https://testing.kg/tests/30"><img src="./src/assets/pictures/Frame 8 (1).svg" alt="" /></a> 
   <a href="https://testing.kg/tests/34"><img src="./src/assets/pictures/Frame 9 (1).svg" alt="" /></a> 
   <a href="https://testing.kg/tests/39"><img src="./src/assets/pictures/Frame 11.svg" alt="" /></a> 

  </div>
  <div className="btn-back">
    <a href="/"><img src="./src/assets/pictures/Group 1.svg" alt="" /></a>
  </div>
</main>
<Footer/>
    </>
  )
}
