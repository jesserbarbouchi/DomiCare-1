import React, {useState} from 'react'
import { View, Text,TextInput,Button } from 'react-native'
import {Picker} from "@react-native-picker/picker"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './Authentification/CredentialsContext.js';
import axios from 'axios'

const EditProfile = () => {
  const {storedCredentials,setStoredCredentials}=React.useContext(CredentialsContext)
  const  userData = storedCredentials;
  const {firstName,lastName,phoneNumber,email,adress,city,gender,dateOfBirth}=userData.userData
  const [selectedValue, setSelectedValue] = useState("");
  const [firstname,setfirstname]=useState(firstName)
  const [lastname,setlastname]=useState(lastName)
  const [Email,setemail]=useState(email)
  const [address,setaddress]=useState("")
  const [Gender,setgender]=useState("")
  const [DateOfBirth,setdateOfBirth]=useState("")
  const [PhoneNumber,setphoneNumber]=useState(0)
  console.log("userData:",userData);
  console.log({firstName,lastName,phoneNumber,email,adress,city});
  const submit = () =>{
    axios.put(`http://localhost:3000/editprofile/${userData.userData._id}`,{firstName,lastName,phoneNumber,email,adress,city,gender,dateOfBirth})
    .then(res=>{
      console.log("res",res);
    })
    .catch(error=>{console.log(error);})
  }
  var change=(e)=>{
    console.log("e.target.value",e.target.value);
    setfirstname(e.target.value)
  }
  return (
    <View>
      <Text>Edit Profile</Text>
      <View>
      <TextInput style={{height: 20,width:150,justifyContent: 'center',flexDirection: 'row',display: 'flex',alignItems: 'center'}}
        placeholder="Change your first name"
        onChangeText={(e)=>setfirstname(e.target.value),console.log("firstname",firstname)}
        defaultValue={firstName} />
          <TextInput style={{height: 20,width:150,justifyContent: 'center',flexDirection: 'row',display: 'flex',alignItems: 'center'}}
        placeholder="Change your last name"
        onChangeText={change}
        defaultValue={lastName} />
          <TextInput style={{height: 20,width:150,justifyContent: 'center',flexDirection: 'row',display: 'flex',alignItems: 'center'}}
        placeholder="Change your email"
        // onChangeText={}
        defaultValue={email} />
          <TextInput style={{height: 20,width:150,justifyContent: 'center',flexDirection: 'row',display: 'flex',alignItems: 'center'}}
        placeholder="Change your address"
        // onChangeText={}
        defaultValue={adress} />
          <TextInput style={{height: 20,width:150,justifyContent: 'center',flexDirection: 'row',display: 'flex',alignItems: 'center'}}
        placeholder="Change your phone number"
        // onChangeText={}
        defaultValue={phoneNumber} />
         <TextInput style={{height: 20,width:150,justifyContent: 'center',flexDirection: 'row',display: 'flex',alignItems: 'center'}}
        placeholder="Change your phone number"
        // onChangeText={}
        defaultValue={gender} />
         <TextInput style={{height: 20,width:150,justifyContent: 'center',flexDirection: 'row',display: 'flex',alignItems: 'center'}}
        placeholder="Change your phone number"
        // onChangeText={}
        defaultValue={dateOfBirth} />
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(cityValue, cityIndex) => {
          setSelectedValue(cityValue)
        }}
      >
        <Picker.Item label="select city" value=""/>
      <Picker.Item label="Ariana" value="Ariana"/>
      <Picker.Item label="Ben Arous" value="Ben Arous"/>
      <Picker.Item label="Tunis" value="Tunis"/>
      <Picker.Item label="Sousse" value="Sousse"/>
      <Picker.Item label="Monastir" value="Monastir"/>
      <Picker.Item label="Sfax" value="Sfax"/>
      <Picker.Item label="Beja" value="Beja"/>
      <Picker.Item label="Benzart" value="Benzart"/>
      <Picker.Item label="Mahdia" value="Mahdia"/>
      <Picker.Item label="kairouan" value="kairouan"/>
      <Picker.Item label="Sidi Bouzid" value="Sidi Bouzid"/>
      <Picker.Item label="Zaghouane" value="Zaghouane"/>
      <Picker.Item label="Mednine" value="Mednine"/>
      <Picker.Item label="Gabes" value="Gabes"/>
      <Picker.Item label="Kebili" value="Kebili"/>
      <Picker.Item label="Gasserine" value="Gasserine"/>
      <Picker.Item label="Jendouba" value="Jendouba"/>
      <Picker.Item label="Kef" value="Kef"/>
      <Picker.Item label="Siliana" value="Siliana"/>
      <Picker.Item label="Tozeur" value="Tozeur"/>
      <Picker.Item label="Tataouine" value="Tataouine"/>
      <Picker.Item label="Manouba" value="Manouba"/>
      <Picker.Item label="Gafsa" value="Gafsa"/>
      <Picker.Item label="Nabeul" value="Nabeul"/>
    </Picker>
      </View>
      <Button onPress={submit} >Submit</Button>
    </View>
  )
}

export default EditProfile
