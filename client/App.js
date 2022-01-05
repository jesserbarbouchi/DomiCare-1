import React from 'react'
import Router from "./router.js"
import {StyleSheet}from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD

export default function App() {
  return (
    <NavigationContainer>
      <Router  />
    </NavigationContainer>
=======


export default function App() {
  return (

    <NavigationContainer>
      <Router  />
    </NavigationContainer>

>>>>>>> 23087425c515f4f41e797e620188250a3e57aca1
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
