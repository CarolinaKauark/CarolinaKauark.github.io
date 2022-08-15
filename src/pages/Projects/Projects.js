import React, { useContext, useEffect } from 'react'
import PortifolioContext from '../../context/PortifolioContext';
import projectsList from '../../data/ProjectsList';
import { BsGithub } from 'react-icons/bs';
import './Projects.scss';

export default function Projects() {
  const { updatePage, isEnglish } = useContext(PortifolioContext);

  useEffect(() => {
    updatePage();
  }, [])

  return (
    <main className='projects'>
        <>
          <div className='projects_div'>
          {isEnglish ? ( 
            <h2 className='projects_div_title'>Projects</h2> )
            : (
              <h2 className='projects_div_title'>Projetos</h2>
            ) }
          {/* <div className='projects_div_line'></div> */}
        </div>

        <section className='projects_section'>
          {projectsList.map(({title, thumbnail, description, descriptionEn, link, skills, gitHub}) => (
            <a href={link}  key={title}     target="_blank" rel="noreferrer" className='projects_section_container'>
              <div className='projects_section_container_div'>
                <img src={ thumbnail } alt='projectImg' className='projects_section_container_div_img'/>
              </div>
              <div className='projects_section_container_info'>
                <div className='projects_section_container_info_flex'>
                  <h3 className='projects_section_container_info_title'>{title}</h3>
                  <a className='projects_section_container_info_flex_icon'
                    href={ gitHub }
                    target="_blank"
                    rel="noreferrer"
                  ><BsGithub /></a>
                </div>
                {isEnglish ? (
                    <p className='projects_section_container_info_description'>{descriptionEn}</p> )
                  : (
                    <p className='projects_section_container_info_description'>{description}</p> 
                  )}
                <div className='projects_section_container_info_skills'>
                  {skills.map((skill) => (
                    <div key={skill} className='projects_section_container_info_skills_type'>{ skill }</div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </section>
        </>
    </main>
  )
}
