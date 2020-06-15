import React from 'react';

import './Home.css';

import { SocialIcon } from 'react-social-icons';

import {Link} from 'react-router-dom';


 

class Home extends React.Component {

 

  

    render(){

        return(

            <div className="header">

                <h1>Pavithra Gunasekaran</h1>

                <p> Quality Assurance and Automation Engineer</p>

                <br/>

                <div className="header-props">

               

                <p className="my-linkedin-icon"><SocialIcon url="https://www.linkedin.com/in/pavithra-gunasekaran-8b7892131" bgColor="#ffffff" fgColor="#000000"/></p>

                <Link to='/about'><button className="about-button">About Me</button></Link>

                <button className="projects-button">Projects</button>

               

                </div>

               </div>

        )

    }

}

export default Home