import * as React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './single-project.css'

const Timdesign = () => {

    return (
      <div className="single-project single-timdesign">
        <Header />
        <div className="wrapper">
            <h1>TIMDESIGN</h1>
            <div className='single-project-infos'>
              <div className='single-project-content'>
                <nav>
                  <ul>
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>JavaScript</li>
                    <li>Swiperjs</li>
                  </ul>
                </nav>
                <p>Timdesign est un projet scolaire dont le but était de créer un site de conférence fictif visant à appliquer les connaissances apprises tout au long de la session.</p>
                <p>Le but de ce projet était d’intégrer un site web avancé à l’aide d’HTML, CSS et JavaScript tout en s’occupant minutieusement du responsive. De plus, un slideshow devait être intégré à l’aide de le librairie Swiper.</p>
                <div className='single-project-btn-ctn'>
                  <a href="https://jbrochu.dectim.ca/timdesign/" target="_blank">Visiter le site</a>
                </div>
              </div>
              <div className='single-project-media'>
                <img src="./public/assets/timdesign.jpg" alt="Image du projet Traveler" />
              </div>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Timdesign