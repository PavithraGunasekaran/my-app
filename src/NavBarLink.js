import React from 'react'

import { Switch, Route,Redirect } from 'react-router-dom'

import About from './About'

import Home from './Home'

import MyWorks from './MyWorks'

 

const NavBarLink = () => (

    <main>

      <Switch>

      <Route

                exact

                path="/"

                render={() => {

                    return (

                     

                      <Redirect to="/home" />

                     

                    )

                }}

              />

      <Route path='/home' component={Home}/>

        <Route path='/about' component={About}/>

        <Route path='/myworks' component={MyWorks}/>

      </Switch>

    </main>

  )

 

  export default NavBarLink 