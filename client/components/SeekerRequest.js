
import * as React from 'react';
import { TextInput } from 'react-native-paper';
import axios from 'axios';

import { View, StyleSheet, Button, ScrollView, Alert, Picker, Image, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './Authentification/CredentialsContext.js';
import Swal from 'sweetalert2'

import {useNavigation} from "@react-navigation/native"


const SeekerRequest = (props) => {
  const {storedCredentials,setStoredCredentials}=React.useContext(CredentialsContext)
const  userData = storedCredentials.userData;
  const navigation = useNavigation()
  const receiverId = props.route.params
  const [text, setText] = React.useState('');
  const senderId = userData._id
  const post=()=>{
    axios.post(`http://192.168.11.73:3000/SeekerRequest/SeekerRequest/`, { text,receiverId,senderId })
      .then(res => console.log(res)).catch(err => console.log(id))
    console.log(text)
  }
  const onSubmit = () => { 
    post()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your request has been sended',
      showConfirmButton: false,
      timer: 1500
    })
    navigation.navigate('serviceProvidersList')

  }

  return (
    <View>
    <TextInput
      label="Write your request here..."
      
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button
 onPress={onSubmit}
  title="Send your request"
  color="#841584"
/>
      </View>
    
  );
};

export default SeekerRequest;




















// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function SeekerRequest() {
//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//         setImage(result.uri);
//         console.log(result.uri)
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// }