import {React, useEffect, useState} from "react";
import './header.css'


function Header () {
    // const user = React.useContext(UserContext);

    const scrollToTop = () => {
      const scrollStep = -window.scrollY / (1000 / 15);
  
      function scroll() {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
          requestAnimationFrame(scroll);
        }
      }
  
      requestAnimationFrame(scroll);
    };
  
    const scrollToElement = (element, duration) => {
      if (element) {
        const start = window.pageYOffset;
        const end = element.getBoundingClientRect().top;
    
        let startTime = null;
    
        const scrollStep = (timestamp) => {
          if (!startTime) {
            startTime = timestamp;
          }
    
          const progress = timestamp - startTime;
          const easeInOutCubic = progress => progress < 0.5
            ? 4 * progress ** 3
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    
          window.scrollTo(0, start + end * easeInOutCubic(progress / duration));
    
          if (progress < duration) {
            requestAnimationFrame(scrollStep);
          }
        };
    
        requestAnimationFrame(scrollStep);
      }
    };


    const images = ['./src/assets/pictures/image 6.svg', './src/assets/pictures/image 11.svg', './src/assets/pictures/image 12.svg'];

    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
    return (  
        <>

    <div className="header">
        <div className="logo">
            <img src="./src/assets/pictures/ОРТ мастер.svg" alt="" className="logo-main" />
        </div>
        <div className="navbar">
            <button className="btn-head" > Главная</button>
            <button className="btn-head" onClick={() => scrollToElement(document.getElementById('team'), 1000)}>О нас</button>
            <a href="/test" className="btn-head">Тест</a>
            <button className="btn-head"onClick={() => scrollToElement(document.getElementById('end'), 1000)}>Контакты</button>   
            <div className="autor">
                <img src="./src/assets/pictures/icon (1).svg" alt="" />
            </div> 
        </div>
    </div>
    <div className="container">
    <div className="banner">
     <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="img-banner"/>
     <div className="title">
        <div className="title-bann">
        ОРТ Легко и Бесплатно
        </div>
        <div className="subt-bann">
        Вместе к Знаниям, Шаг за Шагом
        </div>
     </div>
    </div>
    </div>
        </>
    );
}

export default Header;