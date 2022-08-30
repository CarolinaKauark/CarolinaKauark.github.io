import React, { useContext, useEffect } from 'react'
import PortifolioContext from '../../context/PortifolioContext';
import projectsList from '../../data/ProjectsList';
import { BsGithub } from 'react-icons/bs';
import './Projects.css';

export default function Projects() {
  const { updatePage, isEnglish } = useContext(PortifolioContext);

  useEffect(() => {
    updatePage();
  }, [])

  return (
    <main className='projects'>
      <div className='projects_div'>
        {isEnglish ? ( 
          <h2 className='projects_title'>Projects</h2> )
          : (
            <h2 className='projects_title'>Projetos</h2>
          ) }
        {/* <div className='projects_div_line'></div> */}
      </div>
      <section className='projects_length'>
        <section className='projects_section'>
          {projectsList.map(({title, thumbnail, description, descriptionEn, link, skills, gitHub}) => (
            <a href={link}  key={title}     target="_blank" rel="noreferrer" className='project_container'>
              <div className='project_container_div'>
                <img src={ thumbnail } alt='projectImg' className='project_container_div_img'/>
              </div>
              <div className='project_container_info'>
                <div className='project_container_info_flex'>
                  <h3 className='project_container_title'>{title}</h3>
                  <a className='project_container_icon'
                    href={ gitHub }
                    target="_blank"
                    rel="noreferrer"
                  ><BsGithub /></a>
                </div>
                {isEnglish ? (
                    <p className='project_container_info_description'>{descriptionEn}</p> )
                  : (
                    <p className='project_container_info_description'>{description}</p> 
                  )}
                <div className='project_container_skills'>
                  {skills.map((skill) => (
                    <div key={skill} className='project_container_skills_type'>{ skill }</div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </section>
      </section>
    </main>
  )
}
