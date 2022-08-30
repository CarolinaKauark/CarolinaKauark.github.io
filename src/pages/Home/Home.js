import React, { useContext, useEffect } from 'react';
import Ck from '../../images/Ck.jpg';
import './Home.css';
import Typewriter from "typewriter-effect";
import PortifolioContext from '../../context/PortifolioContext';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Home({history}) {  
  const { updatePage, isEnglish, theme } = useContext(PortifolioContext);

  useEffect(() => {
    updatePage();
  }, [])

  // useEffect(() => {
  //   const root = document.querySelector(':root');
  //   root.setAttribute('color-scheme', theme);
  // }, [theme])

  return ( 
    <main className='home'>
      <aside className='titles_icon'>
            <div className='icon_line'></div>
            <a className='icon_logo' href='https://www.linkedin.com/in/carolina-kauark-fontes/'
                target="_blank"
                rel="noreferrer"
            ><BsLinkedin /></a>
            <a className='icon_logo'
            href='https://github.com/CarolinaKauark'
                target="_blank"
                rel="noreferrer"
            ><BsGithub /></a>
            <div className='icon_line'></div>
          </aside>
      <div className='home_container'>
        <section className='home_titles'>
          <div className='titles_container'>
            <div className='type1'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('FrontEnd Developer')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('BackEnd Developer')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('FullStack Developer')
                    .pauseFor(3000)            
                    .start();
                }}
              />
            </div>
            { isEnglish ? (
              <>
                <h1 className='name'>Carolina Kauark.</h1>
                <h3 className='type2'><strong>Hey There,
                </strong></h3>
                <p className='type2'>Welcome to my portfolio. <br/> Here you can find more about me and my projects.</p>
                <button
                  type='button' className='titles_button'
                  onClick={() => history.push("/contact") }
                >
                  Let's work together!
                </button>
              </> ) 
              : (
              <>
                <h1 className='name'>Carolina Kauark.</h1>
                <h3 className='type2'><strong>Olá,</strong></h3>
                <p className='type2'>Bem vindo ao meu portifólio. <br/> Aqui você encontra mais informações sobre meus projetos.</p>
                <button
                  type='button' className='titles_button'
                  onClick={() => history.push("/contact") }
                >
                  Vamos trabalhar juntos! 
                </button>
              </>
            )}
          </div>
          {/* <aside className='titles_icon'>
            <div className='icon_line'></div>
            <a className='icon_logo' href='https://www.linkedin.com/in/carolina-kauark-fontes/'
                target="_blank"
                rel="noreferrer"
            ><BsLinkedin /></a>
            <a className='icon_logo'
            href='https://github.com/CarolinaKauark'
                target="_blank"
                rel="noreferrer"
            ><BsGithub /></a>
            <div className='icon_line'></div>
          </aside> */}
        </section>
        <div className='home_line'></div>
        <div className='profile_pic'>
          <img src={ Ck } alt='profile-pic' />
        </div> 

      </div>
    </main>
  );
}

 