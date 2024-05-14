import React, { useEffect } from 'react'
import './popular.css'

// Images ======================>
import img2 from '../../Assets/Souvenirs.jpg'
import img5 from '../../Assets/ad.jpg'
import img9 from '../../Assets/Model.png'
import img7 from '../../Assets/Furnitures.png'

// import AOS ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'




const Data = [

  {
    id: 1,
    imgSrc: img2,
    destTitle: 'Сувениры',
    description: 'Создание уникальных и оригинальных подарков, которые будут выражать индивидуальность и характер клиента'
  },

  {
    id: 2,
    imgSrc: img5,
    destTitle: 'Рекламные материалы',
    description: 'Разработка и изготовление рекламных элементов, таких как вывески, логотипы, стенды, баннеры и другие элементы для продвижения бизнеса'
  },

  {
    id: 3,
    imgSrc: img7,
    destTitle: 'Мебель',
    description: 'Изготовление дизайнерской мебели, элементов интерьера, декоративных панелей и других предметов для оформления помещений'
  },


  {
    id: 4,
    imgSrc: img9,
    destTitle: 'Производство деталей',
    description: 'Создание деталей и элементов для прототипирования новых продуктов, моделирования и проектирования различных изделий и механизмов'
  }

]


const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='popular section container'>
      <div className="secContainter">

        <div className="secHeader flex">

          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
            <h2 className='secTitle'>
              Популярные услуги
            </h2>
            <p>
            От детских мечтаний до великих проектов
            </p>
          </div>
        </div>

        <div className="mainContent grid">
          {/* Single Destination from the map Array */}

          {
            Data.map(({ id, imgSrc, destTitle, description }) => {
              return (
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="destImage">

                    <img src={imgSrc} alt="" />

                    <div className="overlayInfo">
                      <h3>
                        {destTitle}
                      </h3>
                      <p>
                        {description}
                      </p>

                      {/* <BsArrowRightShort className='icon' /> */}

                    </div>
                  </div>

                  <div className="destFooter">
                    <div className="number">
                      0{id}
                    </div>

                    <div className="destText flex">
                      <h6>
                        {destTitle}
                      </h6>
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

export default Popular