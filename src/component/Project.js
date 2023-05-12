import React from 'react'
import '../styles/Project.scss';
import { Link } from 'react-router-dom';

function Project() {

  return (
    <>
    <div className='project_container'>
    <div className='logo'>
        <Link to="/"><img src={require("../images/portfolio_logo.png")} alt="" /></Link>
    </div>
      <div className='project_animation'></div>
      <div className='project_moveproject'></div>
      <div className='project_title'>
        <span>
          <p>#web / #responsive</p>
          <p>DAVICH GLASSES</p>
          <p>RESPONSIVE WEB</p>
        </span>
      </div>
    </div>
    <div className='project_explanation'>
      <dl>
        <dt>프로젝트 개요<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>PC, 태블릿, 모바일 등 디바이스 해상도의 맞는 반응형 웹으로 구성된 다비치 안경 웹사이트 입니다. </dd>
        <dt>주요업무<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>- 웹 콘텐츠의 접근성 지침과 웹 표준 준수. HTML / CSS / W3C 유효성 검사 통과.</dd>
        <dd>- PC, 태블릿, 모바일 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로<br />변하도록 만든 웹페이지 접근 기법 적용.</dd>
        <dd>- JavaScript 를 사용하여 부여한 시간이 지남에 따라 다음 영상이 재생되도록 구현.</dd>
        <dd>- CSS animation 기능과 Hover 기능을 사용하여 자연스러운 UI/UX 디자인 구현.</dd>
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
      <div className='border_davich'>
        <div className='border_davich1'></div>
        <div className='border_davich2'></div>
      </div>
    </>
  )
}

export default Project