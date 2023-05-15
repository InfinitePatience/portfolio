import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Pure.scss';

function Pure() {
  return (
    <>
    <div className='project_container'>
    <div className='logo'>
        <Link to="/"><img src={require("../images/portfolio_logo.png")} alt="" /></Link>
    </div>
      <div className='project_animation pure'></div>
      <div className='project_moveproject'></div>
      <div className='project_title'>
        <span>
          <p>#css / #animation</p>
          <p>PURE CSS</p>
          <p>CHRACTER, EMOJI</p>
        </span>
      </div>
    </div>
    </>
  )
}

export default Pure