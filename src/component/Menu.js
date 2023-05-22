import React, { useRef, useState } from 'react'
import '../styles/Menu.scss';
import { Link, useLocation } from 'react-router-dom';
// import Navigation from './Navigation';


function Menu({color, introScroll}) {
  
 console.log('wwseaghwrsejhn',introScroll)
  const [modal, setModal] = useState(false);
  const menuRef = useRef();
  const modalwindow = useRef();

  const modaltoggle = () => {
    setModal((prev) => !prev)
    menuRef.current.classList.toggle('on');
    modal ? (
      document.body.style.overflow = 'unset'
    ) : (
      document.body.style.overflow = 'hidden'
    )
  };
  
  const modaloutclick = () => {
    menuRef.current.classList.remove('on');
    document.body.style.overflow ='auto'
    setModal(false);
  };

  const handleClick = () => {
    introScroll();
    setModal(false);
    menuRef.current.classList.remove('on');
    document.body.style.overflow = 'auto'
  };

  const location = useLocation();
  console.log("sadasdasd",location)

  return (
    <div className='nav_container'>
      <div className='nav_inner'>

        <div className='nav_btn' onClick={modaltoggle} ref={menuRef}>
          <div className='menu_txt'>
            <span className='menu'>menu</span>
            <span className='close'>close</span>
          </div>
          <div className='ham_btn'>
            <div className='ham_btn1'></div>
            <div className='ham_btn2'></div>
            <div className='ham_btn3'></div>
          </div>
        </div>
        <div>
          {modal && (
            <div className='modal_container' >
              <div className='modal_outside' onClick={modaloutclick}></div>
            <div className='modal_inner'> 
              <div className='modal_content'>
              <div className='modal_top1'>
                <span style={{color}}>INTRO</span>
                <ul>
                  <li onClick={modaloutclick}><Link to={'/portfolio'}>Cover</Link></li>
                  {location.pathname === "/" ? (
                    <li onClick={handleClick}>Introduction</li>
                  ) : (<li onClick={modaltoggle}><Link to={"/"}>Introduction</Link></li>)}
                </ul>
              </div>
              <div className='modal_top2'>
                <span style={{color}}>PROJECT</span> 
                <ul>
                  <li onClick={modaloutclick}><Link to={'/Project'}>Davich</Link></li>
                  <li onClick={modaloutclick}><Link to={'/Samsung'}>Samsung</Link></li>
                  <li onClick={modaloutclick}><Link to={'/Kakao'}>KakaoTalk</Link></li>
                  <li onClick={modaloutclick}><Link to={'/Netflix'}>Netflix</Link></li>
                  <li onClick={modaloutclick}><Link to={'/Cjone'}>Cjone</Link></li>
                </ul>
              </div>
              <div className='modal_top3'>
                <span style={{color}}>OTHER</span>
                <ul>
                  <li onClick={modaloutclick}><Link to={'/Pure'}>Pure CSS</Link></li>
                </ul>
              </div>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Menu