import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Contact.scss';

function Contact() {
  return (
    <div className='contact_container'>
      <div className='contact_title'>
        <p>Let's Make It Together</p>
      </div>
      <div className='contact_txt'>
        <span>Thank You</span>
      </div>

      <div className='address'>
        <div>
          <span>GIT HUB</span>
          <Link target={'_blank'} to="https://github.com/InfinitePatience">https://github.com/InfinitePatience</Link>
        </div>

        <div>
          <span>EMAIL</span>
          <Link to={'mailto:roysjk34@gmail.com'}>roysjk34@gmail.com</Link>
        </div>

        <div>
          <span>PHONE</span>
          <p>010 - 7241 - 7593</p>
        </div>
      </div>
    </div>
  )
}

export default Contact