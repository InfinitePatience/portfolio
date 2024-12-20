import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Netflix.scss';
import Menu from './Menu';
import netflix_pc from '../video/netflix_pc.mp4';
import netflix_tablet from '../video/netflix_tablet.mp4';
import netflix_mobile from '../video/netflix_mobile.mp4';

function Netflix() {

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
      top : `${300 + scroll * 0.98}px`,
      behavior : 'smooth',
    },
  };
  return (
    <>
    <div className='project_container'>
    <div className='logo'>
        <Link to="/Main"><img src={require("../images/portfolio_logo.png")} alt="" /></Link>
        <Menu color="#83ffb3"/>
    </div>
    <div className='detail_netflix'>
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
      <div className='project_animation netflix'></div>
      <div className='project_moveproject'></div>
      <div className='project_title'>
        <span>
          <p>#react / #responsive</p>
          <p>NETFLIX</p>
          <p>USED React.js SPA</p>
        </span>
      </div>
    </div>
    <div className='netflix_video'>
      <div className='netflix_content'>
        <Link target={'_blank'} to={'https://infinitepatience.github.io/netflix_app_2023/'} className='netflix_github'>
          <p><img src={require("../images/github_img.png")} alt="github_image" />&nbsp;GitHub</p>
          <p>CLICK !</p>
        </Link>
      </div> {/* // netflix_content */}
      <div className='netflix_content2'>
        <div className='netflix_mockup'>
          <div className='netflix_pc'>
            <img src={require('../images/pc.png')} alt="pc_image"/>
            <div className='netflix_pc_screen'>
              <video autoPlay loop muted preload>
                <source src={netflix_pc} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className='netflix_tablet'>
            <img src={require('../images/ipad.png')} alt="tablet_image"/>
            <div className='netflix_tablet_screen'>
              <video autoPlay loop muted preload>
                <source src={netflix_tablet} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className='netflix_mobile'>
            <img src={require('../images/iphone14.png')} alt="mobile_image"/>
            <div className='netflix_mobile_screen'>
              <video autoPlay loop muted preload>
                <source src={netflix_mobile} type="video/mp4" />
              </video>
            </div>
          </div>
        </div> {/* // netflix_mockup */}
      </div> {/* // netflix_content */}
    </div> {/* // netflix_video */}
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
    </div>
      <div className='border_netflix'>
        <div className='border_netflix1' style={styles.davich_border1}></div>
        <div className='border_netflix2' style={styles.davich_border2}></div>
      </div>
    </>
  )
}

export default Netflix