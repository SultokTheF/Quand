import React, { useEffect } from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section id="home" className='home'>
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
            Творите вместе с Quand
          </h1>
          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Создавайте свои изделия любой сложности из экологически чистых материалов вместе с нами!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home