import React, { useContext, useEffect } from 'react';
import PortifolioContext from '../../context/PortifolioContext';
import { hardSkills, softSkills, agileList } from '../../data/SkillsList';
import './Skills.scss';

export default function Skills() {

  const { updatePage } = useContext(PortifolioContext);

  useEffect(() => {
    updatePage();
  }, [])

  return (
    <main className='skills'>
      <div className='skills_title'><h2 className='skills_title_1'>Hard skills</h2></div>
      <section className='skills_container'>
      {hardSkills.map(({ skill, title }) => (
        <div className='skills_container_div'>
          <div className='skills_container_icons'>
            { skill }
          </div>
          <p>{ title }</p>
        </div>
        ))}
      </section>

      <div className='skills_title'><h2 className='skills_title_1'>Soft skills</h2></div>
      <section className='skills_container'>
      {softSkills.map(({ skill, title }) => (
        <div className='skills_container_div'>
          <div className='skills_container_icons'>
            { skill }
          </div>
          <p>{ title }</p>
        </div>
        ))}
      </section>

      <div className='skills_title'><h2 className='skills_title_1'>Agile methodology</h2></div>
      <section className='skills_container'>
      {agileList.map(({ skill, title }) => (
        <div className='skills_container_div'>
          <div className='skills_container_icons'>
            { skill }
          </div>
          <p>{ title }</p>
        </div>
        ))}
      </section>
    </main>
  )
}

