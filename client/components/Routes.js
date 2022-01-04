import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './Login.js'
import SignUp from './SignUp.js'

const Routes = () => (
   <Router>
         <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login"  />
         <Scene key = "signUp" component = {SignUp} title = "SignUp" />
      </Scene>
   </Router>
)
export default Routes