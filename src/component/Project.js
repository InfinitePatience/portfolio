import React, { useState } from 'react'
import '../styles/Project.scss';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import davich from '../video/davich.mp4';
import davich_tablet from '../video/davich_tablet.mp4';
import davich_mobile from '../video/davich_mobile.mp4';
import Validation from './Validation';

function Project() {
  
  const [openvalid, setOpenValid] = useState(false);

  const validclick = () => {
    setOpenValid((prev) => !prev);
  }

  const davich_validation = "davich_validation"


  return (
    <>
    <div className='project_container'>
    <div className='logo'>
        <Link to="/"><img src={require("../images/portfolio_logo.png")} alt="" /></Link>
    <Menu />
    </div>
      <div className='detail_davich'>
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
      <div className='project_animation davich'></div>
      <div className='project_moveproject'></div> {/* 아직 안함 */}
      <div className='project_title'>
        <span>
          <p>#web / #responsive</p>
          <p>DAVICH GLASSES</p>
          <p>RESPONSIVE WEB</p>
        </span>
      </div>
    </div>
    <div className='davich_video'>
      <div className='davich_content'>
        <div className='davich_shortcuts_circle' onClick={validclick}>
          <p>VALIDATION</p>
          <p>CLICK !</p>
        </div>
        <Link target={'_blank'} to={'https://infinitepatience.github.io/davich_project/'} className='davich_github'>
          <p><img src={require("../images/github_img.png")} alt="github_image" />&nbsp;GitHub</p>
          <p>CLICK !</p>
        </Link>
      </div> {/* // davich_content */}
      <div className='davich_content2'>
        {openvalid && ( 
        <Validation setOpenValid={setOpenValid} className={davich_validation}/>
        )}
        <div className='davich_mockup'>
          <div className='davich_pc'>
            <img src={require('../images/pc.png')} alt="pc_image"/>
            <div className='davich_pc_screen'>
              <video autoPlay loop muted preload>
                <source src={davich} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className='davich_tablet'>
            <img src={require('../images/ipad.png')} alt="tablet_image"/>
            <div className='davich_tablet_screen'>
              <video autoPlay loop muted preload>
                <source src={davich_tablet} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className='davich_mobile'>
            <img src={require('../images/iphone14.png')} alt="mobile_image"/>
            <div className='davich_mobile_screen'>
              <video autoPlay loop muted preload>
                <source src={davich_mobile} type="video/mp4" />
              </video>
            </div>
          </div>
        </div> {/* // davich_mockup */}
      </div> {/* // davich_content */}
    </div> {/* // davich_video */}
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
    </div>
      <div className='border_davich'>
        <div className='border_davich1'></div>
        <div className='border_davich2'></div>
      </div>
    </>
  )
}

export default Project