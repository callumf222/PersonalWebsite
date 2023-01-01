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
              <div className='projectIMG'> <a href='/' className='projectImage3' alt='two people playing a game'> </a> <h2 className='projectName'>Gaming Site<br></br>coming soon</h2></div>
              <div className='projectIMG'> <a href='https://github.com/callumf222/FlutterApp' className='projectImage4' > </a> <h2 className='projectName'>Decision Map Game</h2></div>
              <div className='projectIMG'> <a href='/' className='projectImage5' alt='scheduling book'> </a> <h2 className='projectName'>Scheduling App<br></br>coming soon</h2></div>
          </div>

    
        </div>
      </div>

    </>
  )
}
