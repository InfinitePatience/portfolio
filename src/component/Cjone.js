import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Cjone.scss';

function Cjone() {
  return (
    <>
    <div className='project_container'>
    <div className='logo'>
        <Link to="/"><img src={require("../images/portfolio_logo.png")} alt="" /></Link>
    </div>
      <div className='project_animation cjone'></div>
      <div className='project_moveproject'></div>
      <div className='project_title'>
        <span>
          <p>#media query / #accessibility</p>
          <p>CJ ONE</p>
          <p>RESPONSIVE WEB</p>
        </span>
      </div>
    </div>
    <div className='project_explanation'>
      <dl>
        <dt>프로젝트 개요<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>반응형 웹으로 구현한 CJ ONE 웹 사이트 입니다.</dd>
        <dt>주요업무<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>- 미디어쿼리를 이용하여 PC, 태블릿 모바일에서 자동으로 해상도 레이아웃 변경. </dd>
        <dd>- JavaScript 기능으로 영상 재생, 검색창 토글, Top 버튼 등 기능 구현.</dd>
        <dd>- 웹 콘텐츠의 접근성 지침과 웹 표준 준수. HTML / CSS / W3C 유효성 검사 통과.</dd>
      </dl>
    </div>
      <div className='border_cjone'>
        <div className='border_cjone1'></div>
        <div className='border_cjone2'></div>
      </div>
    </>
  )
}

export default Cjone