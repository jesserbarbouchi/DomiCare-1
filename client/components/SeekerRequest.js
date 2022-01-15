
import React, { useState,useEffect } from "react";
import axios from 'axios';
import { View, Button,StyleSheet,Image,Alert} from "react-native";
import { CredentialsContext } from './Authentification/CredentialsContext.js';
import { useNavigation } from "@react-navigation/native"
import { storage } from "../.firebase_config.js";
import * as ImagePicker from "expo-image-picker";
import { FormControl,Icon,NativeBaseProvider,Center,Spinner,Input  } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from 'react-native-element-textinput';






const SeekerRequest = (props) => {
  const navigation = useNavigation()

  const {storedCredentials,setStoredCredentials}=React.useContext(CredentialsContext)
const  userData = storedCredentials.userData;
  
  const receiverId = props.route.params
  const [text, setText] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [Prescription, setPrescription] = React.useState("");
  
  const [errors, setErrors] = React.useState({});
  const [uploading, setUploading] = React.useState(false);
  const senderId = userData._id
  const post = () => {
   

    axios.post(`http://192.168.1.15:3000/SeekerRequest/SeekerRequest/`, {text,address,Prescription,receiverId,senderId })
      .then(res => console.log(res)).catch(err => console.log(id))
    console.log('hello',text,address,Prescription)
  }
  const onSubmit = () => { 
    post()
    simpleAlertHandler()
    navigation.navigate('serviceProvidersList')
    

  }
  
  const simpleAlertHandler = () => {
    alert('Your request has been sended');
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
    });

    const picked =  "file:///" + result.uri.split("file:/").join("");
console.log(picked)
    if (!result.cancelled) {
      setPrescription(picked);
      console.log(Prescription)
        uploadFile();
    }
};

const uploadFile = async () => {
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
          
        };
        xhr.onerror = function () {
            reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", Prescription, true);
        xhr.send(null);
    });
    const ref = storage.ref().child(new Date().toISOString());
    const snapshot = ref.put(blob);
    snapshot.on(
        storage.TaskEvent,
        () => {
            setUploading(true);
        },
        (error) => {
            setUploading(false);
            console.log(error);
            return;
        },
        () => {
            snapshot.snapshot.ref.getDownloadURL().then((url) => {
              setUploading(false);
             
              setPrescription({ Prescription:url })
            });
        }
  );
};

  return (
      < NativeBaseProvider>
        <Center flex={1} px="3">
    <View>
    
      <View style={styles.container}>
        <TextInput
          value={text}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          // label=" your request ..."
          placeholder=" your request ..."
          placeholderTextColor="gray"
          focusColor="blue"
          onChangeText={text => {
            setText(text);
          }}
        />
          <TextInput
          value={address}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          // label="your address..."
          placeholder="your address..."
          placeholderTextColor="gray"
          focusColor="blue"
          onChangeText={address => {
            setAddress(address);
          }}
        />
      </View>
      <View>
  
          
        
  
  <FormControl isRequired isInvalid={"Prescription" in errors}>
                    <FormControl.Label>Prescription</FormControl.Label>
                    {!uploading ? (
                        <Button title = "Upload"
                            onPress={pickImage}
                            colorScheme="teal"
                            leftIcon={
                                <Icon
                                    as={Ionicons}
                                    name="cloud-upload-outline"
                                    size="sm"
                                />
                            }
                        >
                            
                        </Button>
                    ) : (
                        <Spinner />
                    )}

                    {"Prescription" in errors ? (
                        <FormControl.ErrorMessage>
                            {errors.Prescription}
                        </FormControl.ErrorMessage>
                    ) : (
                        ""
                    )}
          </FormControl>
          <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{
                      uri: Prescription,
                    }}
                  />
        
        
        </View>
  <Button
onPress={onSubmit}
title="Send your request"
// color="#841584"
    />
  



        </View>
        </Center>
      </NativeBaseProvider>
      
    
  );
};

export default SeekerRequest;
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 55,
    width:300,
    paddingHorizontal: 12,
    borderRadius: 3,
    borderWidth: 5,
    borderColor: '#DDDDDD',
  },
  inputStyle: { fontSize: 16 },
  labelStyle: {
    fontSize: 14,
    position: 'absolute',
    top: -10,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 16 },
});





















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