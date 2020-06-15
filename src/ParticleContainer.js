import React from 'react'

import Particles from "react-particles-js"

 

 

 

const ParticlesContainer = () => (

  <Particles

    style={{

      position: "relative",

      left: 0,

      right: 0,

      bottom: 0,

      top: 0

    }}

    params={{

      particles: {

        number: {

          value: 20

         

        },

        size: {

          value : 5,

          direction :"top"

        },

        color: {

          value: "#ffffff"

        },

        move: {

          speed: 10

        },

        line_linked: {

          enable: false,

          color: "#ffffff"

        },

       

      },

      interactivity: {

       

        events: {

            onhover: {

                enable: false,

                mode: "bubble"

            }

        }

      }

    }}

  />

);

 

 

export default ParticlesContainer