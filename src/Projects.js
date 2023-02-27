import React from 'react'

export default function Project() {

  return (
    <>
      <a id='ProjectPage'></a>
      <div className='backgroundProjects'>
        <div className='spacer layer1'>
          
          <section className='Projects'>     
              <h1 className='hProjects'>My Projects</h1>
          </section>

         

          <div className='projectImages'>
              <div className='projectIMG'> <a href='https://github.com/callumf222/PersonalWebsite' className='projectImage1' alt='personal website'> </a> <h2 className='projectName'>Personal Website</h2></div>
              <div className='projectIMG'> <a href='https://github.com/callumf222/QuoteGenerator' className='projectImage2' > </a> <h2 className='projectName'>Quote Generator</h2> </div>
              <div className='projectIMG'> <a href='https://github.com/callumf222/Gaming-site-landing-page' className='projectImage3' alt='Game Home Screen'> </a> <h2 className='projectName'>Gaming Site</h2></div>
              <div className='projectIMG'> <a href='https://github.com/callumf222/FlutterApp' className='projectImage4' > </a> <h2 className='projectName'>Decision Map Game</h2></div>
              <div className='projectIMG'> <a href='https://immoralkoala.itch.io/jhacknjam' className='projectImage5' alt='Pixel Game'> </a> <h2 className='projectName'>Pixel Tower Defence</h2></div>
          </div>

    
        </div>
      </div>

    </>
  )
}
