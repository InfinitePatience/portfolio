import React, { useRef, useState } from 'react'
import '../styles/Main.scss';
import { Link } from 'react-router-dom';
import Contact from '../component/Contact';
import Introduction from '../component/Introduction';
import Menu from '../component/Menu';

function Main() {


  return (
    <>
    
    <div>
      <div className='main_logo'>
        <Link to="/"><img src={require("../images/portfolio_logo_white.png")} alt="" /></Link>
        <Menu />
      </div>
      <div className='main_container'>
        
        <div className='main_top'>
        <div className='main_title'>
          <div>
            <h1>BY SEUNG JU LEE.<br />WELCOME TO<br />MY SITE.</h1>
          </div>
        </div>
          <div className='main_contact_shortcuts'>
            <button><span><img src={require("../images/contact_button-01.png")} alt="contact_image"/></span></button>
            <span>SHORT <br />CUTS</span>
          </div>
          <div className='index'>
            <Link to="/Project" className='project1'>
              <ul>
                <li>01</li>
                <li>Responsive Web Davich Glasses</li>
                <li>#web</li>
                <li>#responsive</li>
                <div className='border1-1'>
                  <div className='davich_img'>
                    <img src={require('../images/davich.PNG')} alt="davich_image"/>
                  </div>
                </div>
                <div className='border1-2'></div>
              </ul>
            </Link>
          </div>

          <div className='index card2'>
            <Link to="/Samsung" className='project2'>
              <ul>
                <li>02</li>
                <li>Samsung<br />Electro Mechanics</li>
                <li>#web</li>
                <li>#accessibility</li>
                <div className='border2-1'>
                  <div className='samsung_img'>
                    <img src={require('../images/samsung_img.PNG')} alt="samsung_image"/>
                  </div>
                </div>
                <div className='border2-2'></div>
              </ul>
            </Link>
          </div>
      </div> {/* //top */}

        <div className='main_bottom'>
          <div className='index'>
            <Link to="/Kakao" className='project3'>
              <ul>
                <li>05</li>
                <li>React App <br />Kakao Talk</li>
                <li>#react</li>
                <li>#accessibility</li>
                <div className='border3-1'></div>
                <div className='border3-2'></div>
              </ul>
            </Link>
          </div>

          <div className='index'>
            <Link to="/Netflix" className='project4'>
              <ul>
                <li>04</li>
                <li>React App <br />Netflix</li>
                <li>#react</li>
                <li>#accessibility</li>
                <div className='border4-1'></div>
                <div className='border4-2'></div>
              </ul>
            </Link>
          </div>

          <div className='index'>
            <Link to="/Cjone" className='project5'>
              <ul>
                <li>03</li>
                <li>Responsive Web <br />CJ one</li>
                <li>#media query</li>
                <li>#accessibility</li>
                <div className='border5-1'></div>
                <div className='border5-2'></div>
              </ul>
            </Link>
          </div>

          <div className='index'>
            <Link to="/Pure" className='project6'>
              <ul>
                <li>06</li>
                <li>Pure CSS <br />Animation</li>
                <li>#css</li>
                <li>#animation</li>
                <div className='border6-1'></div>
                <div className='border6-2'></div>
              </ul>
            </Link>
          </div>
        </div> {/* //bottom */}
      </div>  {/* //container */}
      <Introduction />
      <Contact />
    </div>
    </>
  )
}

export default Main