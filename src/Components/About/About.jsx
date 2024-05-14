import React, { useEffect } from 'react'
import './about.css'
import customerImg from '../../Assets/customer.png'
import ecologyImg from '../../Assets/Ecology.png'
import technologyImg from '../../Assets/image.png'
import video from '../../Assets/video.mp4'

// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section id='about' className='about  section'>
      <div className="secContainer">

        <h2 className='title'>
          Почему Quand?
        </h2>


        <div className="mainContent container grid">

          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={technologyImg} alt="Image" />
            <h3>Инновационные технологии</h3>
            <p>Quand работает с использованием современных технологий, таких как лазерный станок, что позволяет нам создавать продукты высокого качества с уникальным дизайном.</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img src={ecologyImg} alt="Image" />
            <h3>Экологическая ответственность</h3>
            <p>Мы придаем большое значение экологической чистоте наших продуктов. Материалы, которые мы используем, являются экологически чистыми и безопасными для окружающей среды. </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src={customerImg} alt="Image" />
            <h3>Индивидуальный подход</h3>
            <p>Мы гордимся нашим индивидуальным подходом к каждому клиенту. Независимо от сложности и объема заказа, мы стремимся удовлетворить все потребности и пожелания клиента, создавая уникальные и персонализированные продукты </p>
          </div>
        </div>

        {/* <div className="videoCard container">
          <div className=" cardContent grid">
            <div data-aos="fade-right" className="cardText">
              <h2>Wonderful House experience nin there!</h2>
              <p>The Adventure subranking is based on an equally weighted average of scores from five country. </p>
            </div>

            <div data-aos="fade-left" className="cardVideo">
              <video src={video} autoPlay muted loop type="video/mp4"></video>
            </div>
          </div>
        </div> */}
      </div>

    </section>
  )
}

export default About