import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ServiceProviderList from './components/ServiceProviderList.js'



 


export default function App() {
  return (
  <>
      
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
