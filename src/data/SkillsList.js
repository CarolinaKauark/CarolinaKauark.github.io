import SassIcon from '../icons/SassIcon';
import HTMLIcon from '../icons/HTMLIcon';
import CSSIcon from '../icons/CSSIcon';
import JSIcon from '../icons/JSIcon';
import ReactIcon from '../icons/ReactIcon';
import ReduxIcon from '../icons/ReduxIcon';
import BootStrapIcon from '../icons/BootStrapIcon';
import JestIcon from '../icons/JestIcon';
import RTLIcon from '../icons/RTLIcon';
import Creativity from '../icons/Creativity';
import Comunication from '../icons/Comunication';
import Collaboration from '../icons/Collaboration';
import Organization from '../icons/Organization';
import React from 'react';
import Scrum from '../icons/Scrum';
import Kanban from '../icons/Kanban';

const hardSkills = [
  {
    skill: <HTMLIcon />,
    title: 'HTML',
  },
  {
    skill: <CSSIcon />,
    title: 'CSS',
  },
  {
    skill: <JSIcon />,
    title: 'JavaScript',
  },
  {
    skill: <ReactIcon />,
    title: 'React',
  },
  {
    skill: <ReduxIcon />,
    title: 'Redux',
  },
  {
    skill: <JestIcon />,
    title: 'Jest',
  },
  {
    skill: <RTLIcon />,
    title: 'RTL',
  },
  {
    skill: <SassIcon />,
    title: 'Sass',
  },
  {
    skill: <BootStrapIcon />,
    title: 'BootStrap',
  },
]

const softSkills = [
  {
    skill: <Collaboration />,
    titleEn: 'Collaboration',
    title: 'Colaboração',
  },
  {
    skill: <Comunication />,
    titleEn: 'Comunication',
    title: 'Comunicação',
  },
  {
    skill: <Creativity />,
    titleEn: 'Creativity',
    title: 'Criatividade',
  },
  {
    skill: <Organization />,
    titleEn: 'Organization',
    title: 'Organização',
  }
]

const agileList = [
  {
    skill: <Scrum />,
    title: 'Scrum',
  },
  {
    skill: <Kanban />,
    title: 'Kanban',
  }
]

export { hardSkills, softSkills, agileList };