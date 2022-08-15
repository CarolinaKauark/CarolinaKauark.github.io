import React, { useState } from 'react'
import PortifolioContext from './PortifolioContext';
import PropTypes from 'prop-types';

export default function Provider({ children }) {
  const [classMenu, setClassMenu] = useState("header__bar__menu__ul");

  const [isEnglish, setIsEnglish] = useState(false);

  const handleClick = () => {
    if(classMenu === "header__bar__menu__ul") {
      setClassMenu("header__bar__menu__ul active");
    } 
    if(classMenu === "header__bar__menu__ul active") {
      setClassMenu("header__bar__menu__ul");
    }
  }

  const updatePage = () => {
    setClassMenu("header__bar__menu__ul");
  }

  const changeLanguage = () => {
    setIsEnglish(!isEnglish);
  }

  const contextValue = {
    classMenu,
    setClassMenu,
    handleClick,
    updatePage,
    isEnglish,
    changeLanguage,
  }

  return (
    <PortifolioContext.Provider value={ contextValue }>
      { children }
    </PortifolioContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

