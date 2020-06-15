import React from 'react'  

import ReactDOM from 'react-dom'

import Main from './Main'

import './index.css'

import { BrowserRouter } from 'react-router-dom';

 

 

 

 

/*const style1 ={


  display :"flex",

  height : '100%',

  justifyContent: "left",

  textAlign: "left",

  alignItems: "center",

}

/*var h1style = {

  display : 'block'

}

*/

 

/*class NavBar extends React.Component{

 

  state = {

    available : false

   

  }

   

  toggleBtnAvailability=() =>

  {

    this.setState({

      available:!this.state.available

    })

  }

 

render(){

 

    return(

        <div className="navbar">

          

            

           <button className="navbar-home-button"onClick={this.toggleBtnAvailability}>Home</button>

   

    <h1> {

      this.state.available ?

     <center><Name/></center>:''}</h1>

     </div>

    )

}

}

*/

 

 

 

 

 

 

 

 

ReactDOM.render(

  <BrowserRouter>

 

  <Main />

 

  </BrowserRouter>,

  document.getElementById('page')

);

 