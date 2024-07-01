import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext.js'

const ThemeButton = (props) => {
 const {theme,toggleTheme}= useContext(ThemeContext)
  return (
    <button className='button' onClick={toggleTheme
    } >{theme} </button>
  )
}

export default ThemeButton
