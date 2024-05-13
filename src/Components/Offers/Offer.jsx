import React, { useEffect } from 'react'
import './offer.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { MdKingBed } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { MdBathtub } from 'react-icons/md'
import { MdAirportShuttle } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'


// Images ======================>
import img6 from '../../Assets/image (6).jpg'
import img7 from '../../Assets/image (7).jpg'
import img8 from '../../Assets/image (8).jpg'
// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [

  {
    id: 1,
    imgSrc: img8,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    price: '$7,452'
  },

  {
    id: 2,
    imgSrc: img6,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    price: '$2,452'
  },

  {
    id: 3,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    price: '$4,400',
  },

]


const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className='offer section container'>
      <div className="secContainter">

        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className='secTitle'>
            Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of the world!
          </p>

        </div>

        <div className="mainContent grid">
          {/* Single Offer from the map Array */}

          {
            Data.map(({ id, imgSrc, destTitle, location, price }) => {
              return (
                <div key={id} data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt={destTitle} />

                    <span className="discount">
                      30% Off
                    </span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>
                        {price}
                      </h4>
                      <span className="status">
                        For Rent
                      </span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className="icon" />
                        <small>2 Beds</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdBathtub className="icon" />
                        <small>1 Bath</small>
                      </div>
                      <div className="singleAmenity flex">
                        <FaWifi className="icon" />
                        <small>Wi-Fi</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdAirportShuttle className="icon" />
                        <small>Shuttle</small>
                      </div>
                    </div>

                    <div className="location flex">
                      <MdLocationOn className="icon" />
                      <small> 450 Vine St #310,{location}</small>
                    </div>

                    <button className='btn flex'>View Details <BsArrowRightShort className='icon' /></button>

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