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
        <dd>- React로 인터페이스를 구축하여 SPA(Single Page Application) 제작 . </dd>
        <dd>- React Swiper를 사용해 배너 슬라이드 생성</dd>
        <dd>- Firebase를 활용하여 이메일 및 로그인 기능 구현.</dd>
      </dl>
      <dl>
        <dt>작업기간</dt>
        <dd>2023.03 ~ 2023.04</dd>
        <dt>기여도</dt>
        <dd>100%</dd>
        <dt>사용기술</dt>
        <dd>
        <img src={require('../images/HTML5.png')} alt="HTML_image" />
          <img src={require('../images/Github.png')} alt="Github_image" />
          <img src={require('../images/Vector.png')} alt="JS_image" />
          <img src={require('../images/React.png')} alt="React_image" />
          <img src={require('../images/Firebase.png')} alt="firbase_image" />
        </dd>
      </dl>
    </div>
      <div className='border_netflix'>
        <div className='border_netflix1'></div>
        <div className='border_netflix2'></div>
      </div>
    </>
  )
}

export default Netflix