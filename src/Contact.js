import React from 'react'
import { FaGithub,FaEnvelope,FaLinkedin} from 'react-icons/fa'
import { IconContext } from "react-icons";
import { Link } from '@mui/icons-material';


export default function Contact() {
  return (
    <>

        <a id='ContactPage'></a>
        <section className='Contact'>     
          <div className='backgroundContact'>

            <h1 className='hContact'>Contact Me!</h1>

            <IconContext.Provider value={{className:"icons", color:"blue", size:"3em"}}>
              <a href='https://github.com/callumf222'>
                <FaGithub/>
              </a>
              <a href= "mailto:callumfry57@gmail.com ">
                <FaEnvelope/>
              </a>
              <a href='https://www.linkedin.com/in/callum-fry-64bab91a2/'>
                <FaLinkedin/>
              </a>
            </IconContext.Provider>

          </div>

        </section>
      

    </>
  )
}
