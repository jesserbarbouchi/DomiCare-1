
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import EquipementsFeed from './components/EquipementsFeed.js'
import Home from './components/Home.js'

const Stack = createNativeStackNavigator()
const Router = () => {
  return (
    //create your routes here
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EquipementsFeed" component={EquipementsFeed} />
    </Stack.Navigator>
  )
}

export default Router
