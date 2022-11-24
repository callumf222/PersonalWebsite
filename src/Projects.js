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
              <div className='projectIMG'> <a href='/' className='projectImage1' alt='personal website'> </a> <h2 className='projectName'>Personal Website</h2></div>
              <div className='projectIMG'> <a href='/' className='projectImage2' alt='scheduling book'> </a> <h2 className='projectName'>Scheduling App<br></br>coming soon</h2> </div>
              <div className='projectIMG'> <a href='/' className='projectImage3' alt='two people playing a game'> </a> <h2 className='projectName'>Gaming Site<br></br>coming soon</h2></div>
              <div className='projectIMG'> <a href='/' className='projectImage4' alt='Netflix on laptop'> </a> <h2 className='projectName'>Netflix Clone<br></br>coming soon</h2></div>
              <div className='projectIMG'> <a href='/' className='projectImage5'> </a> <h2 className='projectName'>New Ideas<br></br>coming soon</h2></div>
          </div>

    
        </div>
      </div>

    </>
  )
}
