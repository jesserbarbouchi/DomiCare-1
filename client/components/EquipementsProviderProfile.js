import React from 'react'
// import { View, Text , Image , Button , StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './Authentification/CredentialsContext.js';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

const EquipementsProviderProfile = ({navigation}) => {
  const {storedCredentials,setStoredCredentials}=React.useContext(CredentialsContext)
  const  userData = storedCredentials;
  console.log("userData:",userData);
  console.log(userData.userData._id);
  var editprofile = () => {
    navigation.navigate("EditProfile");
};
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{userData.userData.firstName} {userData.userData.lastName}</Text>
              <Text style={styles.info}>{userData.userData.city}/{userData.userData.adress}</Text>
              <Text style={styles.description}>My Email: {userData.userData.email}</Text>
              <Text style={styles.description}>My Contact: {userData.userData.phoneNumber}</Text>
              <Text style={styles.description}>{userData.userData.gender}</Text>
              <Text style={styles.description}>{userData.userData.dateOfBirth}</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text onPress={editprofile}>Update</Text>  
                <Button onPress={editprofile} >Update</Button>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:70,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:22,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:70,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
// const EquipementsProviderProfile = () => {

//   const {storedCredentials,setStoredCredentials}=React.useContext(CredentialsContext)
//   const  userData = storedCredentials;
//   console.log("userData:",userData);
  
//   return (
//     <View>
//     <View style={styles.container}>
//       <Image style={styles.cardImage}>{userData.userData.picture}</Image>
//       <Text style={styles.itemVue}>first name: {userData.userData.firstName}</Text>
//       <Text style={styles.itemVue}>last name: {userData.userData.lastName}</Text>
//       <Text style={styles.itemVue}>email: {userData.userData.email}</Text>
//       <Text style={styles.itemVue}>phone number: {userData.userData.phoneNumber}</Text>
//       <Text style={styles.itemVue}>address: {userData.userData.adress}</Text>
//       <Text style={styles.itemVue}>city: {userData.userData.city}</Text>
//       <Text style={styles.itemVue}>gender: {userData.userData.gender}</Text>
//       <Text style={styles.itemVue}>dateOfBirth: {userData.userData.dateOfBirth}</Text>
//     </View>
//     <Button>Update my profile</Button>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor:'#fff',
//     paddingTop:40,
//     paddingHorizontal:20
//   },
//   cardImage:{
//     width:'50%',
//     height:100,
//     resizeMode:'cover'
  
// },
// itemVue:{
//   marginTop:24,
//   padding: 30,
//   backgroundColor: 'pink',
//   fontSize:24
// }
// });


export default EquipementsProviderProfile
