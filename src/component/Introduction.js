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
          프론트엔드 개발자 이승주입니다.<br />
          무한한 인내로 끈임없이 공부하고, 발전하는 모습을 볼 수 있습니다.
          이해하고, 공감하며 친밀감을 높여 보다 더 밝은 분위기를 만들고,
          기대에 부응하는 개발자로 노력하겠습니다.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Introduction