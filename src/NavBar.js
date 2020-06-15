/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

//import ReactDOM from 'react-dom'

 

import './NavBar.css'

import {Link} from 'react-router-dom';

 

 

 

 

 

class NavBar extends React.Component{

 

 

onAbout(e) {

        e.preventDefault();

        window.location = 'my-app/src/About.js';

    }

 

  

    render(){

        return(

            <div className="navbar" id="mainNavBar">

                <ul id="horizontal-tabs">

 

                <li><Link to='/'>Home</Link></li>

                   

                    <li><Link to='/about'>About</Link></li>

                   

                    <li><Link to='myworks'>My Works</Link></li>

                  

                    </ul>

                   

                   <a href="void(0)" className="home">

                 

                      

                  

                    </a>

 

                  

                   

                

                   

               

            </div>

 

 

        )

    }

}

 

export default NavBar