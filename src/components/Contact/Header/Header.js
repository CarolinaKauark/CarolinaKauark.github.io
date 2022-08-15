import React, { useContext }  from 'react';
import { Link } from "react-router-dom";
import PortifolioContext from '../../../context/PortifolioContext';
import './Header.scss';

export default function Header() {
  const { classMenu, handleClick, changeLanguage, isEnglish } = useContext(PortifolioContext);

  return (
    <header className='header'>
      <div className="header__bar">
        <a href='https://www.linkedin.com/in/carolina-kauark-fontes/'
        target="_blank"
        rel="noreferrer"
        className="header__bar__logo"><em>CK.</em></a>
        { isEnglish ? (
          <nav className="header__bar__menu">
            <span 
              className="header__bar__menu__lang"
              onClick={ () => changeLanguage()}
            >PT</span>
            <div 
              className="header__bar__menu__line"
              onClick={ () => handleClick()}
            >
              <div className="header__bar__menu__line__1"></div>
              <div className="header__bar__menu__line__1"></div>
              <div className="header__bar__menu__line__1"></div>
            </div>

            <ul
              className={classMenu}
            >
              <Link to='/' className="header__bar__menu__ul__link">HOME</Link>
              <Link to='/about' className="header__bar__menu__ul__link">ABOUT</Link>
              <Link to='/skills' className="header__bar__menu__ul__link">SKILLS</Link>
              <Link to='/projects' className="header__bar__menu__ul__link">PROJECTS</Link>
              <Link to='/contact' className="header__bar__menu__ul__link">CONTACT</Link>  
            </ul>
          </nav>
        ) : (
          <nav className="header__bar__menu">
            <span 
              className="header__bar__menu__lang"
              onClick={ () => changeLanguage()}
            >EN</span>
            <div 
              className="header__bar__menu__line"
              onClick={ () => handleClick()}
            >
              <div className="header__bar__menu__line__1"></div>
              <div className="header__bar__menu__line__1"></div>
              <div className="header__bar__menu__line__1"></div>
            </div>

            <ul
              className={classMenu}
            >
              <Link to='/' className="header__bar__menu__ul__link">INICIO</Link>
              <Link to='/about' className="header__bar__menu__ul__link">SOBRE</Link>
              <Link to='/skills' className="header__bar__menu__ul__link">HABILIDADES</Link>
              <Link to='/projects' className="header__bar__menu__ul__link">PROJETOS</Link>
              <Link to='/contact' className="header__bar__menu__ul__link">CONTATO</Link>  
            </ul>
          </nav>
        )

        }
      </div>
    </header>
  )
}
