import React, { useState,useEffect } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modals";
import axios from 'axios'
import { CredentialsContext } from './Authentification/CredentialsContext.js';

function DeleteConfirmation({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);


  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [selectedtype, setSelectedtype] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [clicked,setClicked]=useState(false);
  const [clicked2,setClicked2]=useState(false);
  const [formData, setData] = React.useState({});
  const [myData, setmyData] = React.useState([]);
  const {storedCredentials,setStoredCredentials}=React.useContext(CredentialsContext)
  const  userData = storedCredentials;
  // console.log("userData:",userData);
  // console.log(userData.userData._id);

useEffect(()=>{
  axios.get(`http://localhost:3000/Equipements/${userData.userData._id}`)
  .then(res => {
    // console.log("equipement id",res);
    setmyData(res.data) 
    console.log("res.data",res.data);
  })
  .catch(err => {
      console.log(err);
  })
}, []);

const saveEquipement = ()=>{
  console.log("ownerId",formData.ownerId);
  console.log("formData",formData);
  axios.post(`http://localhost:3000/Equipements/saveEquip`,{formData})
  .then(response=>{
    console.log("saveEquipement",response);
    console.log("response.data",response.data);
  })
  .then(()=>alert("Equipement added successfully!"))
  .then(()=>profile())
  .catch(error=>console.log(error))
}
const myDelete =()=>{
  console.log("ownerId",formData.ownerId);
  axios.delete(`http://localhost:3000/Equipements/${myData.ownerId}`)
  .then(()=>{alert("Item deleted successfully!")})
  .then(()=>navigation.navigate("EquipementsProviderProfile"))
  .catch(error=>{console.log(error)})
}
var profile = () => {
  navigation.navigate("EquipementsProviderProfile")
};
  return (
    <View>
      <Text>Are you sure?</Text>
      <Button onPress={myDelete} >Delete</Button><Button onPress={profile} >Cancel</Button>
    </View>
  );
}
export default DeleteConfirmation;