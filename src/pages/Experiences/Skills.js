import React, { useContext, useEffect } from 'react';
import PortifolioContext from '../../context/PortifolioContext';
import { hardSkills, softSkills, agileList } from '../../data/SkillsList';
import './Skills.css';

export default function Skills() {

  const { updatePage, isEnglish } = useContext(PortifolioContext);

  useEffect(() => {
    updatePage();
  }, [])

  // useEffect(() => {
  //   const root = document.querySelector(':root');
  //   root.setAttribute('color-scheme', theme);
  // }, [theme])

  return (
    <main className='skills'>
      <div className='skills_div'>
        <div className='skills_title'><h2 className='skills_title_1'>Hard skills</h2></div>
        <section className='skills_container'>
        {hardSkills.map(({ skill, title }) => (
          <div className='skills_container_div'>
            <div className='skills_container_icons'>
              { skill }
            </div>
            <p className='skills_text'>{ title }</p>
          </div>
          ))}
        </section>

        <div className='skills_title'><h2 className='skills_title_1'>Soft skills</h2></div>
        <section className='skills_container'>
        {softSkills.map(({ skill, title, titleEn }) => (
          <div className='skills_container_div'>
            <div className='skills_container_icons'>
              { skill }
            </div>
            {isEnglish ? (
              <p className='skills_text'>{ titleEn }</p>
            ) : (
              <p className='skills_text'>{ title }</p>
            )}
          </div>
          ))}
        </section>

        <div className='skills_title'>
          {isEnglish ? (
              <h2 className='skills_title_1'>Agile methodology</h2>
            ) : (
              <h2 className='skills_title_1'>Metodologias Ágeis</h2>
            )}
        </div>
        <section className='skills_container'>
        {agileList.map(({ skill, title }) => (
          <div className='skills_container_div'>
            <div className='skills_container_icons'>
              { skill }
            </div>
            <p className='skills_text'>{ title }</p>
          </div>
          ))}
        </section>
      </div>
    </main>
  )
}

