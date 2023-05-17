import React from 'react'
import '../styles/Validation.scss';

function Validation(props) {



  return (
    <>
    {props.className === 'davich_validation' && (
    <div className='davich_validation validation'>
      <img src={require('../images/다비치 CSS 검사결과.png')} alt="" />
      <img src={require('../images/다비치 HTML 검사결과.png')} alt="" />
      <img src={require('../images/다비치 Lighthouse 검사결과.PNG')} alt="" />
    </div>
    )}
    {props.className === 'samsung_validation' && (
    <div className='samsung_validation validation'>
      <img src={require('../images/삼성전기 W3C CSS 검사 결과.png')} alt="" />
      <img src={require('../images/삼성전기 HTML 검사 결과.png')} alt="" />
      <img src={require('../images/삼성전기 Lighthouse 검사결과.PNG')} alt="" />
    </div>
    )}
    {props.className === 'cjone_validation' && (
    <div className='cjone_validation validation'>
      <img src={require('../images/다비치 CSS 검사결과.png')} alt="" />
      <img src={require('../images/다비치 HTML 검사결과.png')} alt="" />
      <img src={require('../images/다비치 Lighthouse 검사결과.PNG')} alt="" />
    </div>
    )}
  </>
  )
}

export default Validation