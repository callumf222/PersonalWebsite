import React from 'react'

export default function Nav() {
  return (
   <>

    <div id="menu">
      <div id="menu-items">
        <a href ="#AboutMePage" className="menu-item">// About me</a>
        <a href ="#ProjectPage" className="menu-item">// Projects</a>
        <a href ="#ContactPage" className="menu-item">// Contact</a>
        <a href ="https://github.com/callumf222" className="menu-item">// Github</a>
      </div>

      <div className="Main-Text"> 
          <h1 className='Name'>Callum Fry</h1>
          <h2 className='Subtext'>callumfry57@gmail.com</h2>
      </div>

      <div className='menu-background-image'> </div>
    </div>

    

    </>
  )
}