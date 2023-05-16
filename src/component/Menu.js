import React, { useRef, useState } from 'react'
import '../styles/Menu.scss';
// import Navigation from './Navigation';


function Menu() {

  const [modal, setModal] = useState(false);
  const menuRef = useRef();
  const modalwindow = useRef();

  const modaltoggle = () => {
    setModal((prev) => !prev)
    menuRef.current.classList.toggle('on');
    // document.body.style.overflow = 'hidden'
  };
  
  const modaloutclick = () => {
    menuRef.current.classList.remove('on');
    document.body.style.overflow = 'auto'
    setModal(false);
  };

  const oncloseclick = () => {
    document.body.style.overflow = 'auto'
  };

  return (
    <div className='nav_container'>
      <div className='nav_inner'>

        <div className='nav_btn' onClick={modaltoggle} ref={menuRef}>
          <div className='menu_txt'>
            <span className='menu'>menu</span>
            <span className='close' onClick={modaloutclick}>close</span>
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
                <span>INTRO</span>
                <ul>
                  <li>Cover</li>
                  <li>Introduction</li>
                </ul>
              </div>
              <div className='modal_top2'>
                <span>PROJECT</span> 
                <ul>
                  <li>Davich</li>
                  <li>Samsung</li>
                  <li>KakaoTalk</li>
                  <li>Netflix</li>
                  <li>Cjone</li>
                </ul>
              </div>
              <div className='modal_top3'>
                <span>OTHER</span>
                <ul>
                  <li>Pure CSS</li>
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