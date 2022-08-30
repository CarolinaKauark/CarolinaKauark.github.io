import React, { useState } from 'react'
import PortifolioContext from './PortifolioContext';
import PropTypes from 'prop-types';

export default function Provider({ children }) {
  const [classMenu, setClassMenu] = useState("menu_ul");

  const [isEnglish, setIsEnglish] = useState(false);
  
  const [theme, setTheme] = useState("light");


  const handleClick = () => {
    if(classMenu === "menu_ul") {
      setClassMenu("menu_ul active");
    } 
    if(classMenu === "menu_ul active") {
      setClassMenu("menu_ul");
    }
  }

  const updatePage = () => {
    setClassMenu("menu_ul");
  }

  const changeLanguage = () => {
    setIsEnglish(!isEnglish);
  }

  const toggleTheme = () => {
    console.log(theme);
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log(theme);
  }

  const contextValue = {
    classMenu,
    setClassMenu,
    handleClick,
    updatePage,
    isEnglish,
    changeLanguage,
    theme, 
    toggleTheme,
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

