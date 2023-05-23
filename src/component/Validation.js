import React from 'react'
import '../styles/Validation.scss';

function Validation(props) {



  return (
    <>
    {props.className === 'davich_validation' && (
    <div className='davich_validation validation'>
      <div>
        <div>
          <p><strong>W3C 웹 표준 검사</strong><br /> W3C HTML 유효성 검사와 CSS 유효성 검사를 통과하고<br />웹 표준을 준수 하여 프로젝트가 개발 되었음을 확인 할 수 있습니다.</p>
        </div>
        <div>
          <p><strong>WEB ACCESSBILITY</strong><br /> 웹앱 품질 개선도구인 LITHG HOUSE 접근성 부분을 기준으로 하여 <br />이 검사를 통과하였습니다. </p>
        </div>
      </div>
      <img src={require('../images/다비치 CSS 검사결과.png')} alt="" />
      <img src={require('../images/다비치 HTML 검사결과.png')} alt="" />
      <img src={require('../images/다비치 Lighthouse 검사결과.PNG')} alt="" />
    </div>
    )}
    {props.className === 'samsung_validation' && (
    <div className='samsung_validation validation'>
      <div>
        <div>
          <p><strong>W3C 웹 표준 검사</strong><br /> W3C HTML 유효성 검사와 CSS 유효성 검사를 통과하고<br />웹 표준을 준수 하여 프로젝트가 개발 되었음을 확인 할 수 있습니다.</p>
        </div>
        <div>
          <p><strong>WEB ACCESSBILITY</strong><br /> 웹앱 품질 개선도구인 LITHG HOUSE 접근성 부분을 기준으로 하여 <br />이 검사를 통과하였습니다. </p>
        </div>
      </div>
      <img src={require('../images/삼성전기 W3C CSS 검사 결과.png')} alt="" />
      <img src={require('../images/삼성전기 HTML 검사 결과.png')} alt="" />
      <img src={require('../images/삼성전기 Lighthouse 검사결과.PNG')} alt="" />
    </div>
    )}
    {props.className === 'cjone_validation' && (
    <div className='cjone_validation validation'>
      <div>
        <div>
          <p><strong>W3C 웹 표준 검사</strong><br /> W3C HTML 유효성 검사와 CSS 유효성 검사를 통과하고<br />웹 표준을 준수 하여 프로젝트가 개발 되었음을 확인 할 수 있습니다.</p>
        </div>
        <div>
          <p><strong>WEB ACCESSBILITY</strong><br /> 웹앱 품질 개선도구인 LITHG HOUSE 접근성 부분을 기준으로 하여 <br />이 검사를 통과하였습니다. </p>
        </div>
      </div>
      <img src={require('../images/CJONE W3C CSS 검사 결과.png')} alt="" />
      <img src={require('../images/CJONE HTML 검사 결과.png')} alt="" />
      <img src={require('../images/CJONE Lighthouse 검사결과.PNG')} alt="" />
    </div>
    )}
  </>
  )
}

export default Validation