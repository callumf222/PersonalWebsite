import React from 'react'
import { FaGithub,FaEnvelope,FaLinkedin,FaInstagram,FaFacebook} from 'react-icons/fa'
import { IconContext } from "react-icons";
import { Link } from '@mui/icons-material';


export default function Contact() {
  return (
    <>

        <a id='ContactPage'></a>
        <section className='Contact'>     
          <div className='backgroundContact'>
 
            <h1 className='hContact'>Contact Me!</h1>

            <div className='iconHolder'>

              <IconContext.Provider value={{className:"icons", size:"4rem"}}>
                <a className='githubIcon' href='https://github.com/callumf222'>
                  <FaGithub/>
                </a>
                <a className='emailIcon' href= "mailto:callumfry57@gmail.com ">
                  <FaEnvelope/>
                </a>
                <a className='linkedinIcon' href='https://www.linkedin.com/in/callum-fry-64bab91a2/'>
                  <FaLinkedin/>
                </a>
                <a className='instagramIcon' href='https://www.instagram.com/_callum__fry/'>
                  <FaInstagram/>
                </a>
                <a className='facebookIcon' href='https://www.facebook.com/callum.fry.549'>
                  <FaFacebook/>
                </a>
              </IconContext.Provider>

            </div>

          </div>

        </section>
      

    </>
  )
}
