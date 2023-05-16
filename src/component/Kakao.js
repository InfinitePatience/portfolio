import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Kakao.scss';
import Menu from './Menu';

function Kakao() {
  return (
    <>
    <div className='project_container'>
    <div className='logo'>
        <Link to="/"><img src={require("../images/portfolio_logo.png")} alt="" /></Link>
        <Menu />
    </div>
    <div className='detail_kakao'>
     <dl>
        <dt><span>P</span>ERIOD</dt>
        <dd>2023.03 ~ 2023.04</dd>
        <dt><span>L</span>EVEL OF <br /><span>C</span>ONTRIBUTION</dt>
        <dd>100%</dd>
        <dt><span>S</span>KILLS</dt>
        <dd>
          <img src={require('../images/HTML5.png')} alt="HTML_image" />
          <img src={require('../images/Github.png')} alt="Github_image" />
          <img src={require('../images/Vector.png')} alt="JS_image" />
          <img src={require('../images/React.png')} alt="React_image" />
          <img src={require('../images/Firebase.png')} alt="firbase_image" />
        </dd>
      </dl>
    </div>
      <div className='project_animation kakao'></div>
      <div className='project_moveproject'></div>
      <div className='project_title'>
        <span>
          <p>#react / #accessibility</p>
          <p>KAKAO TALK</p>
          <p>ACCESSIBILITY WEB</p>
        </span>
      </div>
    </div>
    <div className='project_explanation'>
      <dl>
        <dt>프로젝트 개요<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>React와 Firebase를 사용해 간단한 CRUD가 가능한 채팅 앱 SPA 입니다.</dd>
        <dt>주요업무<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>- Firebase의 인증서비스를 사용해 이메일 및 소셜 로그인 기능 구현 .</dd>
        <dd>- Firebase의 DB/Storge를 사용해 프로필 변경/사진/메시지 보내기 기능 구현 .</dd>
        <dd>- Axios를 사용하여 Api를 호출하여 데이터 전달.</dd>
        <dd>- 숙련도를 높이기 위해 HTML과 CSS로 작성한 코드를 SCSS와 React로 변경. </dd>
      </dl>
    </div>
      <div className='border_kakao'>
        <div className='border_kakao1'></div>
        <div className='border_kakao2'></div>
      </div>
    </>
  )
}

export default Kakao