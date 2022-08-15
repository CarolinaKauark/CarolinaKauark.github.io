import React, { useContext, useEffect } from 'react';
import Ck from '../../images/Ck.jpg';
import './Home.scss';
import Typewriter from "typewriter-effect";
import PortifolioContext from '../../context/PortifolioContext';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Home({history}) {  
  const { updatePage, isEnglish, } = useContext(PortifolioContext);

  useEffect(() => {
    updatePage();
  }, [])

  return ( 
    <main className='home'>
      <section className='home__titles'>
        <div className='home__titles_container'>
          <div className='home__titles__type1'>
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
              <h1 className='home__titles__name'>Carolina Kauark.</h1>
              <h3 className='home__titles__type2'>Hey There,</h3>
              <p className='home__titles__type2'>Welcome to my portfolio. <br/> Here you can find more about me and my projects.</p>
              <button
                type='button' className='home__titles__button'
                onClick={() => history.push("/contact") }
              >
                Let's work together!
              </button>
            </> ) 
            : (
            <>
              <h1 className='home__titles__name'>Carolina Kauark.</h1>
              <h3 className='home__titles__type2'>Olá,</h3>
              <p className='home__titles__type2'>Bem vindo ao meu portifólio. <br/> Aqui você encontra mais informações sobre meus projetos.</p>
              <button
                type='button' className='home__titles__button'
                onClick={() => history.push("/contact") }
              >
                Vamos trabalhar juntos! 
              </button>
            </>
          )}
        </div>
        <aside className='home__titles__icon'>
          <div className='home__titles__icon__line'></div>
          <a className='home__titles__icon__logo' href='https://www.linkedin.com/in/carolina-kauark-fontes/'
              target="_blank"
              rel="noreferrer"
          ><BsLinkedin /></a>
          <a className='home__titles__icon__logo'
          href='https://github.com/CarolinaKauark'
              target="_blank"
              rel="noreferrer"
          ><BsGithub /></a>
          <div className='home__titles__icon__line'></div>
        </aside>
      </section>
      <div className='home__line'></div>
      <div className='home__profile__pic'>
        <img src={ Ck } alt='profile-pic' />
      </div> 
    </main>
  );
}

 