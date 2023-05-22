import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Pure.scss';
import video from '../video/purecss.mp4';
import video2 from '../video/emoji.mp4';
import Menu from './Menu';

function Pure() {


  return (
    <>
    <div className='project_container'>
    <div className='logo'>
        <Link to="/"><img src={require("../images/portfolio_logo.png")} alt="" /></Link>
        <Menu color="#c783FF"/>
    </div>
      <div className='project_animation pure'></div>
      <div className='project_pure'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        </div>
      <div className='project_pure2'>
        <video autoPlay muted loop>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
      <div className='project_title'>
        <span>
          <p>#css / #animation</p>
          <p>PURE CSS</p>
          <p>CHRACTER, EMOJI</p>
        </span>
      </div>
    </div>
    <div className='border_pure'>
        <div className='border_pure1'></div>
        <div className='border_pure2'></div>
      </div>
    </>
  )
}

export default Pure