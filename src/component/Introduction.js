import React from 'react'
import '../styles/Intro.scss';

function Introduction() {
  return (
    <div className='intro_container'>
      <div className='intro_title'>
        <p>Introduction</p>   
      </div>
      <div className='intro_content'>
      <div className='intro_picture'>
        <img src={require('../images/picture.jpg')} alt="" />
      </div>
      <div className='intro_skill'>
        <img src={require('../images/React.png')} alt="React_image" />
        <img src={require('../images/HTML5.png')} alt="HTML5_image" />
        <img src={require('../images/CSS3.png')} alt="CSS3_image" />
        <img src={require('../images/Javascript.png')} alt="Javascript_image" />
        <img src={require('../images/Vector.png')} alt="sass_image" />
        <img src={require('../images/Illustrator.png')} alt="Illustrator_image" />
        <img src={require('../images/Photoshop.png')} alt="Photoshop_image" />
        <img src={require('../images/Figma.png')} alt="Figma_image" />
        <img src={require('../images/Github.png')} alt="Github_image" />
        <img src={require('../images/Firebase.png')} alt="Firebase_image" />
      </div>
      <div className='intro_text'>
        <p>안녕하세요. <br />
           미래 프론트엔드 개발자 이승주입니다.<br /> 
           능력 향상을 위해 <br /> 
           키보드를 두들기고, <br />
           모니터를 바라보며, <br />
           늘 반복하는, <br />
           밤낮을 가리지 않는 개발자가 되겠습니다.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Introduction