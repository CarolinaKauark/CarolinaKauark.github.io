import React, { useContext, useEffect } from 'react';
import SassIcon from '../../icons/SassIcon';
import HTMLIcon from '../../icons/HTMLIcon';
import CSSIcon from '../../icons/CSSIcon';
import JSIcon from '../../icons/JSIcon';
import ReactIcon from '../../icons/ReactIcon';
import ReduxIcon from '../../icons/ReduxIcon';
import BootStrapIcon from '../../icons/BootStrapIcon';
import JestIcon from '../../icons/JestIcon';
import RTLIcon from '../../icons/RTLIcon';
import Scrum from '../../icons/Scrum';
import './Skills.scss';
import Creativity from '../../icons/Creativity';
import Comunication from '../../icons/Comunication';
import Collaboration from '../../icons/Collaboration';
import Organization from '../../icons/Organization';
import Kanban from '../../icons/Kanban';
import PortifolioContext from '../../context/PortifolioContext';

export default function Skills() {

  const { updatePage } = useContext(PortifolioContext);

  useEffect(() => {
    updatePage();
  }, [])

  return (
    <main className='skills'>
      <div className='skills_title'><h2 className='skills_title_1'>Hard skills</h2></div>
      <section className='skills_container'>
        <div className='skills_container_icons'>
          <HTMLIcon />
          <p>HTML</p>
        </div>
        <div className='skills_container_icons'>
          <CSSIcon />
          <p>CSS</p>
        </div>
        <div className='skills_container_icons'>
          <JSIcon />
          <p>JavaScript</p>
        </div>
        <div className='skills_container_icons'>
          <ReactIcon />
          <p>React</p>
        </div>
        <div className='skills_container_icons'>
          <ReduxIcon />
          <p>Redux</p>
        </div>
        <div className='skills_container_icons'>
          <JestIcon />
          <p>Jest</p>
        </div>
        <div className='skills_container_icons'>
          <RTLIcon />
          <p>RTL</p>
        </div>
        <div className='skills_container_icons'>
          <SassIcon />
          <p>Sass</p>
        </div>
        <div className='skills_container_icons'>
          <BootStrapIcon />
          <p>BootStrap</p>
        </div>
      </section>

      <div className='skills_title'><h2 className='skills_title_1'>Soft skills</h2></div>
      <section className='skills_container'>
        <div className='skills_container_icons'>
          <Collaboration />
          <p>Collaboration</p>
        </div>
        <div className='skills_container_icons'>
          <Comunication />
          <p>Comunication</p>
        </div>
        <div className='skills_container_icons'>
          <Creativity />
          <p>Creativity</p>
        </div>
        <div className='skills_container_icons'>
          <Organization />
          <p>Organization</p>
        </div>
      </section>
      <div className='skills_title'><h2 className='skills_title_1'>Agile methodology</h2></div>
      <section className='skills_container'>
        <div className='skills_container_icons'>
          <Scrum />
          <p>Scrum</p>
        </div>
        <div className='skills_container_icons'>
          <Kanban />
          <p>Kanban</p>
        </div>
      </section>
    </main>
  )
}

