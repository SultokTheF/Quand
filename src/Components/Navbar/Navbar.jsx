import React, { useState } from 'react'
import './navbar.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { SiYourtraveldottv } from 'react-icons/si'

const Navbar = () => {

  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const removeNav = () => {
    setActive('navBar')
  }

  //code statement to add a background color to the header.
  const [transparent, setTransparent] = useState('header')
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader')
    } else {
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>
      <header className={transparent}>

        <div className="logoDiv">
          <a href="#" className="logo flex"><h1>Quand</h1></a>
        </div>

        <div className={active}>
          <ul onClick={removeNav} className="navLists flex">
            <li className="navItem">
              <a href="#home" className="navLink">Главная</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Услуги</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Предложения</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Контакты</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Дополнительная информация</a>
            </li>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  )
}

export default Navbar