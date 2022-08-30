import React, { useContext, useEffect }  from 'react';
import { Link } from "react-router-dom";
import PortifolioContext from '../../../context/PortifolioContext';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';
import './Header.css';
import BRIcon from '../../../icons/BRIcon';
import ENIcon from '../../../icons/ENIcon';

export default function Header() {
  const { classMenu, handleClick, changeLanguage, isEnglish, toggleTheme, theme } = useContext(PortifolioContext);

  useEffect(() => {
    const root = document.querySelector(':root');
    root.setAttribute('color-scheme', theme);
  }, [theme])

  const btnTheme = theme;

  return (
    <header className='header'>
      <div className="header_bar">
        <a href='https://www.linkedin.com/in/carolina-kauark-fontes/'
        target="_blank"
        rel="noreferrer"
        className="logo"><em>CK.</em></a>
        { isEnglish ? (
          <nav className="header_menu">
            <span 
              className="lang"
              onClick={ () => changeLanguage()}
            ><ENIcon /></span>

            <button 
              className="theme"
              onClick={ () => toggleTheme()}
            >{ btnTheme === "light" ? (
              <BsMoonStarsFill />
            ) : (
              <BsSun />
            )}
            </button>

            <div 
              className="menu_line"
              onClick={ () => handleClick()}
            >
              <div className="menu_line1"></div>
              <div className="menu_line1"></div>
              <div className="menu_line1"></div>
            </div>

            <ul
              className={classMenu}
            >
              <Link to='/' className="link">HOME</Link>
              <Link to='/about' className="link">ABOUT</Link>
              <Link to='/skills' className="link">SKILLS</Link>
              <Link to='/projects' className="link">PROJECTS</Link>
              <Link to='/contact' className="link">CONTACT</Link>  
            </ul>
          </nav>
        ) : (
          <nav className="header_menu">
            <span 
              className="lang"
              onClick={ () => changeLanguage()}
            ><BRIcon /></span>

            <button 
              className="theme"
              onClick={ () => toggleTheme()}
            >{ btnTheme === "light" ? (
              <BsMoonStarsFill />
            ) : (
              <BsSun />
            )}
            </button>

            <div 
              className="menu_line"
              onClick={ () => handleClick()}
            >
              <div className="menu_line1"></div>
              <div className="menu_line1"></div>
              <div className="menu_line1"></div>
            </div>

            <ul
              className={classMenu}
            >
              <Link to='/' className="link">INICIO</Link>
              <Link to='/about' className="link">SOBRE</Link>
              <Link to='/skills' className="link">HABILIDADES</Link>
              <Link to='/projects' className="link">PROJETOS</Link>
              <Link to='/contact' className="link">CONTATO</Link>  
            </ul>
          </nav>
        )

        }
      </div>
    </header>
  )
}
