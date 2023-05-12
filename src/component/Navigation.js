import React from 'react'
import '../styles/Navigation.scss';

function Navigation() {
  return (
    <div className='nav'>
    <div className='top1'>INTRO
      <ul>
        <li>Cover</li>
        <li>Introduction</li>
      </ul>
    </div>
    <div className='top2'>PROJECT
      <ul>
        <li>Davich</li>
        <li>Samsung</li>
        <li>KakaoTalk</li>
        <li>Netflix</li>
        <li>Cjone</li>
      </ul>
    </div>
    <div className='top3'>OTHER
      <ul>
        <li>Pure CSS</li>
      </ul>
    </div>
  </div>
  )
}

export default Navigation