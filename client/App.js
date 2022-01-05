

import React from 'react'
import Router from "./router.js"
import {StyleSheet}from 'react-native'
import { NavigationContainer } from '@react-navigation/native';




 


export default function App() {
  return (

    <NavigationContainer>
      <Router  />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
