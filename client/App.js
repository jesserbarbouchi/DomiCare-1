import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ServiceProviderList from './components/ServiceProviderList.js'
import Login from './components/login.js'



 


export default function App() {
  return (
  <>
      <Login />
      <ServiceProviderList/>
  </>
     
  
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
