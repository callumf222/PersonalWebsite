import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/fontawesome-svg-core'

export default function Contact() {
  return (
    <>

        <a id='ContactPage'></a>
        <section className='Contact'>     

          <h1 className='hContact'>Contact Me!</h1>

          <FontAwesomeIcon icon={"fa-brands fa-youtube"} />
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>

          <div className='backgroundContact'></div>

        </section>
      

    </>
  )
}
