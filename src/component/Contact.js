import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Contact.scss';

function Contact() {
  return (
    <div className='contact_container'>
      <div className='contact_title'>
        <b>Let's Make It Together</b>
      </div>
      <div className='contact_txt'>
        <span>Thank You</span>
      </div>

      <div className='address'>
        <div>
          <span>git hub</span>
          <Link target={'_blank'} to="https://github.com/InfinitePatience">https://github.com/InfinitePatience</Link>
        </div>

        <div>
          <span>email</span>
          <Link to={'mailto:roysjk34@gmail.com'}>roysjk34@gmail.com</Link>
        </div>

        <div>
          <span>phone</span>
          <p>010 - 7241 - 7593</p>
        </div>
      </div>
    </div>
  )
}

export default Contact