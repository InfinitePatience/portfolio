import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Netflix.scss';

function Netflix() {
  return (
    <>
    <div className='project_container'>
    <div className='logo'>
        <Link to="/"><img src={require("../images/portfolio_logo.png")} alt="" /></Link>
    </div>
      <div className='project_animation netflix'></div>
      <div className='project_moveproject'></div>
      <div className='project_title'>
        <span>
          <p>#react / #accessibility</p>
          <p>NETFLIX</p>
          <p>USED React.js SPA</p>
        </span>
      </div>
    </div>
    <div className='project_explanation'>
      <dl>
        <dt>프로젝트 개요<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>OTT 서비스 넷플릭스를 React 를 사용하여 반응형 웹으로 구현</dd>
        <dt>주요업무<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>- axios 비동기 통신 라이브러리 사용.</dd>
        <dd>- 인터페이스를 구축하는 React로 SPA(Single Page Application) 제작 . </dd>
        <dd>- React Swiper를 사용해 배너 슬라이드 생성</dd>
        <dd>- Firebase를 활용하여 이메일 및 로그인 기능 구현.</dd>
      </dl>
    </div>
      <div className='border_samsung'>
        <div className='border_samsung1'></div>
        <div className='border_samsung2'></div>
      </div>
    </>
  )
}

export default Netflix