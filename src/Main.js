import React from 'react'

import NavBar from './NavBar'

import NavBarLink from './NavBarLink'

 

import ParticlesContainer from './ParticleContainer'

import './Main.css'

 

 

const Main=()=> (

 

 

    <div className="main-container">

     <NavBar/>

     

      

      <NavBarLink/>

     

      

      <div className="particle-js">

      <ParticlesContainer  />

      </div>

     

    </div>

    

  )

export default Main