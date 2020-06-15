import React from 'react'

import './About.css'

 

 

class About extends React.Component{

    render() {

        return(

     

             

   /* <div class="container h-100">

        <div class="row justify-content-center">

            <div class="col-lg-8 text-center">

                <h2 class="text-white font-weight-lighter mt-0">About Me</h2>

                <hr class="divider light my-2"/>

 

                <p class="text-white-50 pt-3 mb-0">Education</p>

                <span class="text-white font-weight-light"><p>Bachelor of Engineering (Computer Science)</p>

                </span>

 

                <p class="text-white-50 pt-3 mb-0">Skills</p>

                <span class="text-white font-weight-light">

                <p>Splunk, New Relic, Elasticsearch,

                    <br/>

                Ansible, Git, DevOps CI/CD, <br/>

                Google Cloud Platform, Docker, Kubernetes,<br/>

                Python, JavaScript, CSS, SQL<br/>

                </p>

                </span>

 

                <p class="text-white-50 pt-3 mb-0">Domains</p>

                <span class="text-white font-weight-light"><p>Telecom, Banking, Retail</p>

                </span>

 

 

               

 

            </div>

        </div>

    </div>

         */

       

               <div className="about">

               

               <br/>

                <div className="about-edu">

                    <h1> Education</h1>

                    <p>Bachelors in Computer Science Engineering</p>

                </div>

                <br/>

 

                <div className="about-skills">

                    <h1>Skills</h1>

                    <p>Manual Testing, Selenium Automation,

                    <br/>

                     Docker, Git, ReactJS, Java, CSS, SQL</p>

                </div>

                <br/>

 

                <div className="about-experience">

                    <h1> Work Experience </h1>

                    <p> Applied Materials (2018 - Current) : Quality Assurance Engineer with 2+ years of experience </p>

                    <p> Domain : Manufacturing, Semiconductor Factory Automation </p>

                    <p> Client : YMTC, China</p>

                </div>

 

 

              

               

                </div>

               

                

             

        )

    }

}

 

 

  export default About