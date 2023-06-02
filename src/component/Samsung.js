import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Samsung.scss'
import Menu from './Menu'
import Validation from './Validation';
import samsung_main from '../video/samsung_main.mp4';
import samsung_sub1 from '../video/samsung_sub1.mp4';
import samsung_sub2 from '../video/samsung_sub2.mp4';

function Samsung() {
  const [openvalid, setOpenValid] = useState(false);

  const validclick = () => {
    setOpenValid((prev) => !prev);
  }
  const samsung_validation = "samsung_validation"

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

  return (
    <>
    <div className='project_container'>
    <div className='logo'>
        <Link to="/Main"><img src={require("../images/portfolio_logo.png")} alt="" /></Link>
        <Menu color="#ffb183"/>
    </div>
    <div className='detail_samsung'> 
      <dl>
        <dt><span>P</span>ERIOD</dt>
        <dd>▶ 2023.03 ~ 2023.04</dd>
        <dt><span>L</span>EVEL OF <br /><span>C</span>ONTRIBUTION</dt>
        <dd>▶ 100%</dd>
        <dt><span>L</span>ANGUAGE</dt>
        <dd>
          <img src={require('../images/HTML5.png')} alt="HTML_image" />
          <img src={require('../images/CSS3.png')} alt="CSS3_image" />
          <img src={require('../images/Javascript.png')} alt="JS_image" />
        </dd>
      </dl>
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
    <div className='samsung_video'>
      <div className='samsung_content'>
        <div className='samsung_shortcuts_circle' onClick={validclick}>
          <p>VALIDATION</p>
          <p>CLICK !</p>
        </div>
        <Link target={'_blank'} to={'https://infinitepatience.github.io/samsung_renewal/'} className='samsung_github'>
          <p><img src={require("../images/github_img.png")} alt="github_image" />&nbsp;GitHub</p>
          <p>CLICK !</p>
        </Link>
      </div> {/* // samsung_content */}
      <div className='samsung_content2'>
        {openvalid && ( 
        <Validation setOpenValid={setOpenValid} className={samsung_validation}/>
        )}
        <div className='samsung_mockup'>
          <div className='samsung_pc'>
            <img src={require('../images/pc_front.png')} alt="pc_image"/>
            <div className='samsung_pc_screen'>
              <video autoPlay loop muted preload>
                <source src={samsung_main} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className='samsung_left'>
            <img src={require('../images/pc_left.png')} alt="tablet_image"/>
            <div className='samsung_left_screen'>
              <video autoPlay loop muted preload>
                <source src={samsung_sub1} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className='samsung_right'>
            <img src={require('../images/pc_right.png')} alt="mobile_image"/>
            <div className='samsung_right_screen'>
              <video autoPlay loop muted preload>
                <source src={samsung_sub2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div> {/* // samsung_mockup */}
      </div> {/* // samsung_content */}
    </div> {/* // samsung_video */}
    <div className='project_explanation'>
      <dl>
        <dt>프로젝트 개요<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>웹 콘텐츠 접근성 지침과 웹 표준을 준수하여 삼성전기 리뉴얼 웹 페이지 제작 </dd>
        <dt>주요업무<img src={require("../images/quote.png")} alt="" /></dt>
        <dd>- 웹 콘텐츠의 접근성 지침과 웹 표준 준수. HTML / CSS / W3C 유효성 검사 통과.</dd>
        <dd>- CSS와 JavaScript 기능을 이용하여 스크롤 내릴시 animation 움직임 적용. </dd>
        <dd>- HTML / CSS W3C 유효성 검사 결과 통과.</dd>
      </dl>
    </div>
      <div className='border_samsung'>
        <div className='border_samsung1' style={styles.davich_border1}></div>
        <div className='border_samsung2' style={styles.davich_border2}></div>
      </div>
    </>
  )
}

export default Samsung