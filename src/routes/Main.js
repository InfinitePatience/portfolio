import React, { useEffect, useRef, useState } from 'react'
import '../styles/Main.scss';
import { Link } from 'react-router-dom';
import Contact from '../component/Contact';
import Introduction from '../component/Introduction';
import Menu from '../component/Menu';

function Main() {


// 메인 화면 글씨 3d
const cardRef = useRef(null);
const numberRef = useRef(null);
const titleRef = useRef(null);
const subtitleRef = useRef(null);
const subtitleRef1_1 = useRef(null);
const imagesRef = useRef(null);

const cardRef2 = useRef(null);
const numberRef2 = useRef(null);
const titleRef2 = useRef(null);
const subtitleRef2 = useRef(null);
const subtitleRef2_1 = useRef(null);
const imagesRef2 = useRef(null);

const cardRef3 = useRef(null);
const numberRef3 = useRef(null);
const titleRef3 = useRef(null);
const subtitleRef3 = useRef(null);
const subtitleRef3_1 = useRef(null);
const imagesRef3 = useRef(null);

const cardRef4 = useRef(null);
const numberRef4 = useRef(null);
const titleRef4 = useRef(null);
const subtitleRef4 = useRef(null);
const subtitleRef4_1 = useRef(null);
const imagesRef4 = useRef(null);

const cardRef5 = useRef(null);
const numberRef5 = useRef(null);
const titleRef5 = useRef(null);
const subtitleRef5 = useRef(null);
const subtitleRef5_1 = useRef(null);
const imagesRef5 = useRef(null);

const cardRef6 = useRef(null);
const numberRef6 = useRef(null);
const titleRef6 = useRef(null);
const subtitleRef6 = useRef(null);
const subtitleRef6_1 = useRef(null);
const imagesRef6 = useRef(null);

// project1
const handleMouseMove = (e) => {
  //Moving Event
  const card = cardRef.current;
  const number = numberRef.current;
  const title = titleRef.current;
  const subtitle = subtitleRef.current;
  const subtitle1_1 = subtitleRef1_1.current;
  const images = imagesRef.current; 

  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

  card.style.transform = `rotateY(${-xAxis/1.5}deg) rotateX(${yAxis/1.5}deg) `;
  number.style.transform = `translateY(20%) translateX(20%) translate3d(${-xAxis / 40}rem, ${-yAxis / 40}rem, 1.5rem)`;
  title.style.transform = `translateY(0%) translateX(0%) translate3d(${-xAxis / 40}rem, ${-yAxis / 50}rem, 0.7rem)`;
  subtitle.style.transform = `translateY(0%) translateX(0%) translate3d(${-xAxis / 30}rem, ${-yAxis / 40}rem, 0.2rem)`;
  subtitle1_1.style.transform = `translateY(0%) translateX(5%) translate3d(${-xAxis / 30}rem, ${-yAxis / 40}rem, 1rem)`;
  images.style.transform = `translateY(-50%) translateX(-50%) translate3d(${-xAxis / 20}rem, ${-yAxis / 20}rem, 0.1rem)`;
};
const handleMouseLeave = () => {
  // Animate Out
  const card = cardRef.current;
  const number = numberRef.current;
  const title = titleRef.current; 
  const subtitle = subtitleRef.current; 
  const subtitle1_1 = subtitleRef1_1.current; 
  // const images = imagesRef.current; 

  card.style.transition = "";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  number.style.transform =`translate3d(0,0,0)`
  title.style.transform = `translate3d(0,0,0)`
  subtitle.style.transform = `translate3d(0,0,0)`
  subtitle1_1.style.transform = `translate3d(0,0,0)`
};
// project2
const handleMouseMove2 = (e) => {
  const card2 = cardRef2.current;
  const number2 = numberRef2.current;
  const title2 = titleRef2.current;
  const subtitle2 = subtitleRef2.current;
  const subtitle2_1 = subtitleRef2_1.current;
  const images2 = imagesRef2.current; 

  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

  card2.style.transform = `rotateY(${-xAxis / 4}deg) rotateX(${yAxis}deg) `;
  number2.style.transform = `translateY(15%) translateX(-50%) translate3d(${-xAxis / 40}rem, ${-yAxis / 40}rem, 1.5rem)`;
  title2.style.transform = `translateY(0%) translateX(-5%) translate3d(${-xAxis / 40}rem, ${-yAxis / 50}rem, 0.7rem)`;
  subtitle2.style.transform = `translateY(0%) translateX(-40%) translate3d(${-xAxis / 30}rem, ${-yAxis / 40}rem, 0.2rem)`;
  subtitle2_1.style.transform = `translateY(-15%) translateX(-12%) translate3d(${-xAxis / 30}rem, ${-yAxis / 40}rem, 1rem)`;
  images2.style.transform = `translateY(-50%) translateX(-65%) translate3d(${-xAxis / 20}rem, ${-yAxis / 20}rem, 0.1rem)`;
};
const handleMouseLeave2 = () => {
  const card2 = cardRef2.current;
  const number2 = numberRef2.current;
  const title2 = titleRef2.current; 
  const subtitle2 = subtitleRef2.current; 
  const subtitle2_1 = subtitleRef2_1.current; 
  
  card2.style.transition = "";
  card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
  number2.style.transform =`translate3d(0,0,0)`
  title2.style.transform = `translate3d(0,0,0)`
  subtitle2.style.transform = `translate3d(0,0,0)`
  subtitle2_1.style.transform = `translate3d(0,0,0)`
};
// project3
const handleMouseMove3 = (e) => {
  const card3 = cardRef3.current;
  const number3 = numberRef3.current;
  const title3 = titleRef3.current;
  const subtitle3 = subtitleRef3.current;
  const subtitle3_1 = subtitleRef3_1.current;
  const images3 = imagesRef3.current; 

  let xAxis = (window.innerWidth / 20 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  // rotateY(${xAxis}deg) rotateX(${yAxis}deg)
  card3.style.transform = `rotateY(${xAxis / 6}deg) rotateX(${yAxis / 4}deg) `;
  number3.style.transform = `translateY(-40%) translateX(50%) translate3d(${-xAxis / 50}rem, ${-yAxis / 40}rem, 1.5rem)`;
  title3.style.transform = `translateY(-10%) translateX(0%) translate3d(${-xAxis / 40}rem, ${-yAxis / 50}rem, 0.7rem)`;
  subtitle3.style.transform = `translateY(-60%) translateX(0%) translate3d(${-xAxis / 30}rem, ${-yAxis / 40}rem, 0.2rem)`;
  subtitle3_1.style.transform = `translateY(-70%) translateX(3%) translate3d(${-xAxis / 30}rem, ${-yAxis / 40}rem, 1rem)`;
  images3.style.transform = `translateY(-70%) translateX(-60%) translate3d(${-xAxis / 20}rem, ${-yAxis / 20}rem, 0.1rem)`;
};
const handleMouseLeave3 = () => {
  const card3 = cardRef3.current;
  const number3 = numberRef3.current;
  const title3 = titleRef3.current;
  const subtitle3 = subtitleRef3.current; 
  const subtitle3_1 = subtitleRef3_1.current; 
  
  card3.style.transition = "";
  card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
  number3.style.transform =`translate3d(0,0,0)`
  title3.style.transform = `translate3d(0,0,0)`
  subtitle3.style.transform = `translate3d(0,0,0)`
  subtitle3_1.style.transform = `translate3d(0,0,0)`
};
// project4
const handleMouseMove4 = (e) => {
  const card4 = cardRef4.current;
  const number4 = numberRef4.current;
  const title4 = titleRef4.current;
  const subtitle4 = subtitleRef4.current;
  const subtitle4_1 = subtitleRef4_1.current;
  const images4 = imagesRef4.current; 

  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  // rotateY(${xAxis}deg) rotateX(${yAxis}deg)
  card4.style.transform = `rotateY(${-xAxis / 4}deg) rotateX(${-yAxis / 3}deg) `;
  number4.style.transform = `translateY(-40%) translateX(50%) translate3d(${-xAxis / 50}rem, ${-yAxis / 40}rem, 1.5rem)`;
  title4.style.transform = `translateY(-10%) translateX(5%) translate3d(${-xAxis / 40}rem, ${-yAxis / 50}rem, 0.7rem)`;
  subtitle4.style.transform = `translateY(-100%) translateX(0%) translate3d(${-xAxis / 30}rem, ${-yAxis / 40}rem, 0.2rem)`;
  subtitle4_1.style.transform = `translateY(-120%) translateX(3%) translate3d(${-xAxis / 30}rem, ${-yAxis / 40}rem, 1.5rem)`;
  images4.style.transform = `translateY(-75%) translateX(-45%) translate3d(${-xAxis / 20}rem, ${-yAxis / 20}rem, 1rem)`;
};
const handleMouseLeave4 = () => {
  const card4 = cardRef4.current;
  const number4 = numberRef4.current;
  const title4 = titleRef4.current;
  const subtitle4 = subtitleRef4.current; 
  const subtitle4_1 = subtitleRef4_1.current; 
  
  card4.style.transition = "";
  card4.style.transform = `rotateY(0deg) rotateX(0deg)`;
  number4.style.transform =`translate3d(0,0,0)`
  title4.style.transform = `translate3d(0,0,0)`
  subtitle4.style.transform = `translate3d(0,0,0)`
  subtitle4_1.style.transform = `translate3d(0,0,0)`
};
// project5
const handleMouseMove5 = (e) => {
  const card5 = cardRef5.current;
  const number5 = numberRef5.current;
  const title5 = titleRef5.current;
  const subtitle5 = subtitleRef5.current;
  const subtitle5_1 = subtitleRef5_1.current;
  const images5 = imagesRef5.current; 

  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  // rotateY(${xAxis}deg) rotateX(${yAxis}deg)
  card5.style.transform = `rotateY(${-xAxis / 4}deg) rotateX(${yAxis / 3}deg) `;
  number5.style.transform = `translateY(-40%) translateX(50%) translate3d(${-xAxis / 50}rem, ${-yAxis / 40}rem, 1.5rem)`;
  title5.style.transform = `translateY(-7%) translateX(-2%) translate3d(${-xAxis / 40}rem, ${-yAxis / 50}rem, 0.7rem)`;
  subtitle5.style.transform = `translateY(-100%) translateX(-5%) translate3d(${-xAxis / 30}rem, ${-yAxis / 40}rem, 1.5rem)`;
  subtitle5_1.style.transform = `translateY(-10%) translateX(5%) translate3d(${-xAxis / 40}rem, ${-yAxis / 50}rem, 0.5rem)`;
  images5.style.transform = `translateY(-70%) translateX(-60%) translate3d(${-xAxis / 20}rem, ${-yAxis / 20}rem, 3rem)`;
};
const handleMouseLeave5 = () => {
  const card5 = cardRef5.current;
  const number5 = numberRef5.current;
  const title5 = titleRef5.current;
  const subtitle5 = subtitleRef5.current; 
  const subtitle5_1 = subtitleRef5_1.current; 
  
  card5.style.transition = "";
  card5.style.transform = `rotateY(0deg) rotateX(0deg)`;
  number5.style.transform =`translate3d(0,0,0)`
  title5.style.transform = `translate3d(0,0,0)`
  subtitle5.style.transform = `translate3d(0,0,0)`
  subtitle5_1.style.transform = `translate3d(0,0,0)`
};
// project6
const handleMouseMove6 = (e) => {
  const card6 = cardRef6.current;
  const number6 = numberRef6.current;
  const title6 = titleRef6.current;
  const subtitle6 = subtitleRef6.current;
  const subtitle6_1 = subtitleRef6_1.current;
  const images6 = imagesRef6.current; 

  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  // rotateY(${xAxis}deg) rotateX(${yAxis}deg)
  card6.style.transform = `rotateY(${-xAxis / 6}deg) rotateX(${yAxis / 2}deg) `;
  number6.style.transform = `translateY(-40%) translateX(50%) translate3d(${-xAxis / 50}rem, ${-yAxis / 40}rem, 1.5rem)`;
  title6.style.transform = `translateY(-20%) translateX(5%) translate3d(${-xAxis / 40}rem, ${-yAxis / 50}rem, 0.7rem)`;
  subtitle6.style.transform = `translateY(-100%) translateX(-10%) translate3d(${-xAxis / 30}rem, ${-yAxis / 40}rem, 1.5rem)`;
  subtitle6_1.style.transform = `translateY(-10%) translateX(5%) translate3d(${-xAxis / 40}rem, ${-yAxis / 50}rem, 0.5rem)`;
  images6.style.transform = `translateY(-60%) translateX(-70%) translate3d(${-xAxis / 20}rem, ${-yAxis / 20}rem, 3rem)`;
};
const handleMouseLeave6 = () => {
  const card6 = cardRef6.current;
  const number6 = numberRef6.current;
  const title6 = titleRef6.current;
  const subtitle6 = subtitleRef6.current; 
  const subtitle6_1 = subtitleRef6_1.current; 
  
  card6.style.transition = "";
  card6.style.transform = `rotateY(0deg) rotateX(0deg)`;
  number6.style.transform =`translate3d(0,0,0)`
  title6.style.transform = `translate3d(0,0,0)`
  subtitle6.style.transform = `translate3d(0,0,0)`
  subtitle6_1.style.transform = `translate3d(0,0,0)`
};

const introref = useRef();
const contactref = useRef();

const introScroll = () => {
  const introElement = introref.current;
  const introOffsetTop = introElement.offsetTop;
  
  window.scroll({
    top: introOffsetTop,
    behavior:'smooth'
  });
};
const contactScroll = () => {
  const contactElement = contactref.current;
  const contactOffsetTop = contactElement.offsetTop;
  
  window.scroll({
    top: contactOffsetTop,
    behavior:'smooth'
  });
};


  return (
    <>
    <div>
      <div className='main_logo'>
        <Link to="/"><img src={require("../images/portfolio_logo_white.png")} alt="" /></Link>
        <Menu introScroll={introScroll}/>
      </div>
      <div className='main_container'>
        <div className='main_top'>
        <div className='main_title'>
          <div>
            <h1>BY SEUNG JU LEE.<br />WELCOME TO<br />MY SITE.</h1>
          </div>
        </div>
          <div className='main_contact_shortcuts' >
            
            <button onClick={contactScroll}><span><img src={require("../images/contact_button-01.png")} alt="contact_image"/></span></button>
            <span onClick={contactScroll}>SHORT<br />CUTS</span>
          </div>

          <div className='index_per' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className='index' ref={cardRef}>
              <Link to="/Project" className='project1'>
                <ul >
                  <li ref={numberRef}>01</li>
                  <li ref={titleRef}>Responsive Web Davich Glasses</li>
                  <li ref={subtitleRef}>#web</li>
                  <li ref={subtitleRef1_1}>#responsive</li>
                  <div className='border1-1'>
                    <div className='davich_img'>
                      <img src={require('../images/davich.PNG')} alt="davich_image" ref={imagesRef}/>
                    </div>
                  </div>
                  <div className='border1-2'></div>
                </ul>
              </Link>
              </div>
            </div>

            <div className='index_per' onMouseMove={handleMouseMove2} onMouseLeave={handleMouseLeave2}>
              <div className='index' ref={cardRef2}>
                <Link to="/Samsung" className='project2'>
                  <ul>
                    <li ref={numberRef2}>02</li>
                    <li ref={titleRef2}>Samsung<br />Electro Mechanics</li>
                    <li ref={subtitleRef2}>#web</li>
                    <li ref={subtitleRef2_1}>#accessibility</li>
                    <div className='border2-1'>
                      <div className='samsung_img'>
                        <img src={require('../images/samsung.jpg')} alt="samsung_image" ref={imagesRef2}/>
                      </div>
                    </div>
                    <div className='border2-2'></div>
                  </ul>
                </Link>
              </div>
            </div>

      </div> {/* //top */}

        <div className='main_bottom'>
          <div className='index_per' onMouseMove={handleMouseMove3} onMouseLeave={handleMouseLeave3}>
            <div className='index' ref={cardRef3}>
              <Link to="/Kakao" className='project3'>
                <ul>
                  <li ref={numberRef3}>03</li>
                  <li ref={titleRef3}>React App <br />Kakao Talk</li>
                  <li ref={subtitleRef3}>#react</li>
                  <li ref={subtitleRef3_1}>#accessibility</li>
                  <div className='border3-1'>
                    <div className='kakao_img'>
                      <img src={require('../images/kakao.png')} alt="kakao_image" ref={imagesRef3}/>
                    </div>
                  </div>
                  <div className='border3-2'></div>
                </ul>
              </Link>
            </div>
          </div>

          <div className='index_per' onMouseMove={handleMouseMove4} onMouseLeave={handleMouseLeave4}>
            <div className='index' ref={cardRef4}>
              <Link to="/Netflix" className='project4'>
                <ul>
                  <li ref={numberRef4}>04</li>
                  <li ref={titleRef4}>React App <br />Netflix</li>
                  <li ref={subtitleRef4}>#react</li>
                  <li ref={subtitleRef4_1}>#accessibility</li>
                  <div className='border4-1'>
                    <div className='netflix_img'>
                      <img src={require('../images/netflix.jpg')} alt="netflix_image" ref={imagesRef4}/>
                    </div>
                  </div>
                  <div className='border4-2'></div>
                </ul>
              </Link>
            </div>
          </div>

          <div className='index_per' onMouseMove={handleMouseMove5} onMouseLeave={handleMouseLeave5}>
            <div className='index' ref={cardRef5}>
              <Link to="/Cjone" className='project5'>
                <ul>
                  <li ref={numberRef5}>05</li>
                  <li ref={titleRef5}>Responsive Web <br />CJ one</li>
                  <li ref={subtitleRef5}>#media query</li>
                  <li ref={subtitleRef5_1}>#accessibility</li>
                  <div className='border5-1'>
                    <div className='cjone_img'>
                      <img src={require('../images/cjone.jpg')} alt="cjone_image" ref={imagesRef5}/>
                    </div>
                  </div>
                  <div className='border5-2'></div>
                </ul>
              </Link>
            </div>
          </div>

          <div className='index_per' onMouseMove={handleMouseMove6} onMouseLeave={handleMouseLeave6}>
            <div className='index' ref={cardRef6}>
              <Link to="/Pure" className='project6'>
                <ul>
                  <li ref={numberRef6}>06</li>
                  <li ref={titleRef6}>Pure CSS <br />Animation</li>
                  <li ref={subtitleRef6}>#css</li>
                  <li ref={subtitleRef6_1}>#animation</li>
                  <div className='border6-1'>
                    <div className='pure_img'>
                      <img src={require('../images/pure.PNG')} alt="pure_image" ref={imagesRef6}/>
                    </div>
                  </div>
                  <div className='border6-2'></div>
                </ul>
              </Link>
            </div>
          </div>

        </div> {/* //bottom */}
      </div>  {/* //container */}
        <div className='introduction' ref={introref}>
          <Introduction />
        </div>
      <div className='contact' ref={contactref}>
      <Contact />
      </div>
    </div>
    </>
  )
}

export default Main