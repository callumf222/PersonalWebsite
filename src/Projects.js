import React from 'react'

export default function Project() {

  return (
    <>

      <div className='backgroundProjects'>
        <div className='spacer layer1'>
          
          <section className='Projects'>     
              <h1 className='hProjects'>My Projects</h1>
          </section>

          <div className='projectDesc'>
            <p>This is my project desribition</p>
          </div>

          <div className='projectImages'>
            <a href='/' className='projectImage1'> <h2 className='projectName'>Project Name</h2> </a>
            <a href='/' className='projectImage2'> <h2 className='projectName'>Project Name</h2> </a>
            <a href='/' className='projectImage3'> <h2 className='projectName'>Project Name</h2> </a>
            <a href='/' className='projectImage1'> <h2 className='projectName'>Project Name</h2> </a>
            <a href='/' className='projectImage2'> <h2 className='projectName'>Project Name</h2> </a>
          </div>

    
        </div>
      </div>

    </>
  )
}
