
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import EquipementsFeed from './components/EquipementsFeed.js'
import Home from './components/Home.js'
import Login  from './components/Login.js'
import SignUp from './components/SignUp/SignUp.js'
import SignUpType from './components/SignUp/SignUpType.js'
const Stack = createNativeStackNavigator()
const Router = () => {
  return (
    //create your routes here
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EquipementsFeed" component={EquipementsFeed} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUpType" component={SignUpType} />

    </Stack.Navigator>
  )
}

export default Router
