import React, { useEffect } from 'react'
import './offer.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { MdKingBed } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { MdBathtub } from 'react-icons/md'
import { MdAirportShuttle } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'


// Images ======================>
import img6 from '../../Assets/workshop.jpg'
import img7 from '../../Assets/kids_workshop.png'
import img8 from '../../Assets/kids.png'
// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [

  {
    id: 1,
    imgSrc: img8,
    destTitle: 'Радость и творчество для детей',
    describtion: 'Создайте свой уникальный детский мир с персонализированными игрушками, пазлами и декоративными элементами для комнаты вашего малыша! Получите скидку 20% на первый заказ для детей и поддержите их креативность и воображение',
    discount: '20% Off'
  },

  {
    id: 2,
    imgSrc: img6,
    destTitle: 'Образование без границ',
    describtion: 'Поддержите образование и развитие современных технологий с нашими услугами по созданию учебных пособий, прототипов и образовательных игр. Специальное предложение для образовательных учреждений - получите бесплатную консультацию и 15% скидку на первый заказ!',
    discount: '15% Off'
  },

  {
    id: 3,
    imgSrc: img7,
    destTitle: 'Радость и творчество для детей',
    describtion: 'Создайте уют в своем доме с индивидуально разработанной мебелью и элементами интерьера по доступным ценам. Скидка 10% для социально уязвимых групп населения, помогая им сделать свои жилища комфортнее и уютнее.',
    discount: '10% Off'
  },

]


const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section id='offers' className='offer section container'>
      <div className="secContainter">

        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className='secTitle'>
            Специальные предложения
          </h2>
          <p>
            Воплощаем радость, знания и заботу в каждом детале!
          </p>

        </div>

        <div className="mainContent grid">
          {/* Single Offer from the map Array */}

          {
            Data.map(({ id, imgSrc, destTitle, describtion, discount }) => {
              return (
                <div key={id} data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt={destTitle} />

                    <span className="discount">
                      {discount}
                    </span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>
                        {destTitle}
                      </h4>
                    </div>

                    <div className="amenities flex">
                      {describtion}
                    </div>
                  </div>
                </div>
              )
            })
          }



        </div>
      </div>
    </section>
  )
}

export default Offer