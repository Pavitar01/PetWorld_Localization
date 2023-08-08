import React from 'react'
import NavBar from './NavBar'
import "../css/nav.css"
const Top = ({setLang}) => {
  return (
    <div>
      <NavBar setLang={setLang}/>
    </div>
  )
}

export default Top
