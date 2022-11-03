import React from 'react'
import { useState } from 'react'

export default function Nav() {

  const [opaticy, setOpaticy] = useState(false);
  const changeOpaticy = () => {
    if(window.scrollY >= 300){
      setOpaticy(true);
    }
    else{
      setOpaticy(false)
    }
  }


  window.addEventListener('scroll', changeOpaticy)


  return (
   <>

    <div id="menu">
      <div id="menu-items">
        <a href ="/" className="menu-item">// About me</a>
        <a href ="/" className="menu-item">// Projects</a>
        <a href ="/" className="menu-item">// Contact</a>
        <a href ="/" className="menu-item">// Github</a>
      </div>
      <div className={opaticy ? 'menu-background-image menu-background-image-bg': 'menu-background-image'}> </div>
    </div>

    <div id="Main-Text"> 
          <h1 className='Name'>Callum Fry</h1>
          <h2 className='Subtext'>callumfry57@gmail.com</h2>
    </div>

    </>
  )
}