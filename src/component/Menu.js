import React, { useRef, useState } from 'react'
import '../styles/Menu.scss';
import Navigation from './Navigation';



function Menu() {

  const [modal, setModal] = useState(false);
  const menuRef = useRef();

  const modaltoggle = () => {
    setModal((prev) => !prev)
    menuRef.current.classList.toggle('on');
  };

  return (
    <div className='nav_container'>
      <div className='nav_inner'>

        <div className='nav_btn' onClick={modaltoggle} ref={menuRef} >
          <div className='menu_txt'>
            <span className='menu' >menu</span>
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
            <Navigation />
          )}
        </div>
      </div>
    </div>
  )
}

export default Menu