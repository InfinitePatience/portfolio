import React from 'react'
import '../styles/Main.scss';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <div className='main_logo'>
        <Link to="/"><img src={require("../images/portfolio_logo_white.png")} alt="" /></Link>
      </div>
      <div className='main_container'>
        
        <div className='main_top'>
        <div className='main_title'>
          <div>
            <h1>Look at you now.<br />You're now<br />Head over heels<br />In Love with your Portfolio.</h1>
            {/* <h1>지금 너를 봐. 당신은 지금 포트폴리오와 사랑에 빠져버렸어. </h1> */}
          </div>
        </div>
          <div className='index'>
            <Link to="/Project" className='project1'>
              <ul>
                <li>01</li>
                <li>Davich Glasses</li>
                <li>#web</li>
                <li>#accessibility</li>
                <div className='border1-1'></div>
                <div className='border1-2'></div>
              </ul>
            </Link>
          </div>

          <div className='index'>
            <a href="#" className='project2'>
              <ul>
                <li>02</li>
                <li>DAVICH GLASSES</li>
                <li>#web</li>
                <li>#accessibility</li>
                <div className='border2-1'></div>
                <div className='border2-2'></div>
              </ul>
            </a>
          </div>
      </div> {/* //top */}

        <div className='main_bottom'>
          <div className='index'>
            <a href="#" className='project3'>
              <ul>
                <li>03</li>
                <li>DAVICH GLASSES</li>
                <li>#web</li>
                <li>#accessibility</li>
                <div className='border3-1'></div>
                <div className='border3-2'></div>
              </ul>
            </a>
          </div>

          <div className='index'>
            <a href="#" className='project4'>
              <ul>
                <li>04</li>
                <li>DAVICH GLASSES</li>
                <li>#web</li>
                <li>#accessibility</li>
                <div className='border4-1'></div>
                <div className='border4-2'></div>
              </ul>
            </a>
          </div>

          <div className='index'>
            <a href="#" className='project5'>
              <ul>
                <li>05</li>
                <li>DAVICH GLASSES</li>
                <li>#web</li>
                <li>#accessibility</li>
                <div className='border5-1'></div>
                <div className='border5-2'></div>
              </ul>
            </a>
          </div>
        </div> {/* //bottom */}
      </div>  {/* //container */}
    </div>
  )
}

export default Main