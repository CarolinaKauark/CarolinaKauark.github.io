import React, { useContext, useEffect } from 'react';
import Ck_pink from '../../images/Ck_pink.jpg';
import PortifolioContext from '../../context/PortifolioContext';
import './About.scss';
import { isElement } from 'react-dom/test-utils';

export default function About() {
  const { updatePage, isEnglish } = useContext(PortifolioContext);

  useEffect(() => {
    updatePage();
  }, [])

  return (
    <main className='about'>
      { isEnglish ? (
          <h2 className='about_h2'>About</h2>
        ) : (
          <h2 className='about_h2'>Sobre</h2>
      )}
      <section className='about_description'>  
        <div className='about_description_pic'>
          <img src={ Ck_pink } alt='profile-pic' />
        </div>
        {isEnglish ? (
          <p>
            
            Hello,
            <br/><br/>
            I'm Carolina Kauark, feel free to call me Carol. I am 27 years old, I live in Salvador - Brazil and I have a degree in Architecture and Urbanism from the Federal University of Ouro Preto - UFOP. Currently undergoing professional training at Trybe in the Full Stack Web development course.
            <br/><br/> 
            Almost finishing my degree in Architecture, I got to know, through optional subjects, the area of technology and programming. It was love at first sight! After graduating and eager to learn, I decided to become a full stack web developer. Today, with the Frontend module completed, I have relevant projects in the area that use the most sought-after technologies on the market. I am currently studying the third (Back end) of four bootcamp modules.
            <br/><br/>            
            I describe myself as a proactive, dedicated person and identify myself as transparent and adaptable. I have experience working in groups, from my work as an Architect and Urban Planner in multidisciplinary projects as well as in projects related to the technology area, using agile methodologies (Scrumm and Kanban) following market practices, including a focus on soft skills.
          </p>
        ) : (
          <p>
            Olá,
            <br></br>
            Sou Carolina Kauark, sinta-se a vontade para me chamar de Carol. Tenho 27 anos, moro em Salvador, BA e sou formada em Arquitetura e Urbanismo pela Universidade Federal de Ouro Preto - UFOP. Atualmente em formação profissionalizante pela Trybe no curso de <strong>desenvolvimento Web Full Stack</strong>.
            <br/><br/> 
            Quase terminando a graduação em Arquitetura conheci, por meio de matérias opcionais, a área da tecnologia e da programação. Foi amor a primeira vista! Depois de graduada e com muita <strong>vontade de aprender</strong>, decidi me tornar desenvolvedora web full stack. Hoje, com o módulo de Frontend concluído, possuo projetos pertinentes na área que utilizam as tecnologias mais procuradas no mercado. Atualmente estou cursando o terceiro (Back end) de quatro módulos do bootcamp.
            <br/><br/>
            Me descrevo como uma pessoa proativa, dedicada e me identifico como
            alguém transparente e adaptável. Possuo experiência em trabalhar em
            grupos, desde a minha atuação como Arquiteta e Urbanista em projetos
            multidisciplinares como em projetos relacionados à área de tecnologia,
            utilizando metodologias ágeis (Scrumm e Kanban) seguindo as práticas do mercado, incluindo o foco em soft skills.
          </p>
        )}
      </section>
    </main>
  )
}

