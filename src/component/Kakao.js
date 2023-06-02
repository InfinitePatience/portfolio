import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Kakao.scss';
import Menu from './Menu';
import kakao_login from '../video/kakao_login.mp4';
import kakao_chatting from '../video/kakao_chatting.mp4';
import kakao_profile from '../video/kakao_profile.mp4';

function Kakao() {
  // 스크롤시 div 움직임
  const [scroll, setScroll] = useState(0);

 useEffect(() => {
  const handleScroll = () => {
    const scrollValue = document.querySelector('html').scrollTop;
    setScroll(scrollValue);
  };
  window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트되거나 업데이트되기 전에 이벤트 리스너를 제거해야 합니다.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    davich_border1: {
      top : `${400 + scroll * 1}px`,
      behavior : 'smooth',
    },
    davich_border2: {
      top : `${300 + scroll * 1}px`,
      behavior : 'smooth',
    },
  };


  // const styles2 = {
  // davich_left : {
  //   transform : `translateX(${scroll * 0.8}px), translateY(${scroll * 0.8}px)` }}

  return (
    <>
    <div className='project_container'>
    <div className='logo'>
        <Link to="/Main"><img src={require("../images/portfolio_logo.png")} alt="" /></Link>
        <Menu color="#fff383"/>
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
          <p>#react / #Single Page Application </p>
          <p>KAKAO TALK</p>
          <p>USED React.js SPA</p>
        </span>
      </div>
    </div>
    <div className='kakao_video'>
      <div className='kakao_content'>
        <Link target={'_blank'} to={'https://infinitepatience.github.io/kakao_react_2023/'} className='kakao_github'>
        <p><img src={require("../images/github_img.png")} alt="github_image" />&nbsp;GitHub</p>
        <p>CLICK !</p>
        </Link>
      </div> {/* // kakao_content */}
      <div className='kakao_content2'>
        <div className='kakao_mockup'>

          <img src={require("../images/phone_group1.png")} alt="phone_image" className='kakao_mockup_main'/>

          <div className='kakao_login'>
            <img src={require("../images/iphone14.png")} alt="phone_image" />
            <div className='kakao_login_screen'>
              <video autoPlay loop muted preload>
                <source src={kakao_login} type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='kakao_chatting'>
            <img src={require("../images/iphone14.png")} alt="phone_image" />
            <div className='kakao_chatting_screen'>
              <video autoPlay loop muted preload>
                <source src={kakao_chatting} type='video/mp4' />
              </video>
            </div>
          </div>

          <div className='kakao_profile'>
            <img src={require("../images/iphone14.png")} alt="phone_image" />
            <div className='kakao_profile_screen'>
              <video autoPlay loop muted preload>
                <source src={kakao_profile} type='video/mp4' />
              </video>
            </div>
          </div>

        </div>
      </div>{/* // kakao_content2 */}
    </div> {/* // kakao_video */}
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
        <div className='border_kakao1' style={styles.davich_border1}></div>
        <div className='border_kakao2' style={styles.davich_border2}></div>
      </div>
    </>
  )
}

export default Kakao