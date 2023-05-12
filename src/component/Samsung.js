import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Samsung.scss'

function Samsung() {
  return (
    <>
    <div className='project_container'>
    <div className='logo'>
        <Link to="/"><img src={require("../images/portfolio_logo.png")} alt="" /></Link>
    </div>
      <div className='project_animation samsung'></div>
      <div className='project_moveproject'></div>
      <div className='project_title'>
        <span>
          <p>#web / #accessibility</p>
          <p>SAMSUNG RENEWAL</p>
          <p>ACCESSIBILITY WEB</p>
        </span>
      </div>
    </div>
    <div className='project_explanation'>
      <dl>
        <dt>프로젝트 개요<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>웹 콘텐츠 접근성 지침과 웹 표준을 준수하여 삼성전기 리뉴얼 웹 페이지 제작 </dd>
        <dt>주요업무<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>- 웹 콘텐츠의 접근성 지침과 웹 표준 준수. HTML / CSS / W3C 유효성 검사 통과.</dd>
        <dd>- CSS와 JavaScript 기능을 이용하여 스크롤 내릴시 animation 움직임 적용. </dd>
        <dd>- HTML / CSS W3C 유효성 검사 결과 통과.</dd>
      </dl>
      <dl>
        <dt>작업기간</dt>
        <dd>2023.03 ~ 2023.04</dd>
        <dt>기여도</dt>
        <dd>100%</dd>
        <dt>사용언어</dt>
        <dd>
          <img src={require('../images/HTML5.png')} alt="HTML_image" />
          <img src={require('../images/CSS3.png')} alt="CSS3_image" />
          <img src={require('../images/Javascript.png')} alt="JS_image" />
        </dd>
      </dl>
    </div>
      <div className='border_samsung'>
        <div className='border_samsung1'></div>
        <div className='border_samsung2'></div>
      </div>
    </>
  )
}

export default Samsung