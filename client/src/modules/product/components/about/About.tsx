import React, {useEffect}  from 'react'
import './About.css'

// import Support from '../../assets/images/Support.png'
// import Development from '../../assets/images/info.png'
// import Field from '../../assets/images/choice.png'

// import video from '../../assets/video/AldiyarFlex.MOV'

import Handshake from '../../assets/images/handshake.png';
import Quality from '../../assets/images/quality.png';
import Durability from '../../assets/images/Durability.png';

// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'


const About: React.FC = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <section className='about  section' id={`about`}>
      <div className="secContainer">

        <h2 className='title'>
          Почему Quand?
        </h2>


      <div className="mainContent container grid">

        <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
          <img src={Quality} alt="Image" />
          <h3>Точность и высокое качество</h3>
          <p>Лазерные станки обеспечивают высокую степень точности и качества при обработке фанеры.</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
          <img src={Handshake} alt="Image" />
          <h3>Индивидуальный подход</h3>
          <p>Quand предлагает услуги индивидуального заказа, клиенты могут оценить возможность создания уникальных и персонализированных товаров из фанеры.</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
          <img src={Durability} alt="Image" />
          <h3>Долговечность продукции</h3>
          <p>Продукция, изготовленная на лазерных станках из фанеры, обычно обладает высокой степенью долговечности.</p>
        </div>
      </div>

      <div className="videoCard container">
        <div className=" cardContent grid">
          <div data-aos="fade-right" className="cardText">
            <h2>QUSH</h2>
            <p>Quantitative, Qualitative and Quick</p>
          </div>

          <div data-aos="fade-left" className="cardVideo">
            <video autoPlay muted loop>
              <source type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About