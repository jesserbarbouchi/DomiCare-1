import React ,{useState,useEffect} from 'react'
import {Picker} from "@react-native-picker/picker"
import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './Authentification/CredentialsContext.js';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Button
} from 'react-native';

const userEquipements = ({navigation}) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [selectedtype, setSelectedtype] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [clicked,setClicked]=useState(false);
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
var profile = () => {
  navigation.navigate("EquipementsProviderProfile")
};
  return (
    <View>
      {clicked===false?
      <View>
      <Button onPress={()=>setClicked(true)}>Add Equipement</Button>
      <View style={styles.sProvider}>
    
          {myData.map((item, key) => {
            return ( <View key={key} style={styles.itemVue}>
              <Image style={styles.cardImage} source={{uri:item.picture}} />
              <Text>Equipement name : {item.name}</Text>
              <Text>Price : {item.price}</Text>
              <Text>Description : {item.description}</Text>
              <Text>City : {item.city}</Text>
              <Text>Delivery : {item.delivery}</Text>
              <Text>Transaction Type : {item.transactionType}</Text>
              {item.availability==="Available"?<Text>Available</Text>:<Text>Not Available</Text>}
                {/* <Button title="Ask for service" onPress={apihandler} /> */}
            </View>
          )})}
          </View>
          </View>
      :
      <View>
      <View>
       <Picker selectedtype={selectedtype}
        style={{ height: 50, width: 150 }}
        onValueChange={(TypeValue, TypeIndex) => {
          console.log(TypeValue);
          setData({...formData,transactionType:TypeValue})
          setData({...formData,ownerId:userData.userData._id})
          // ascendingSort(priceValue)
        }} >
     <Picker.Item label="select Transaction Type" value="" />
      <Picker.Item label="For Rent" value="For Rent" />
      <Picker.Item label="For Sale" value="For Sale" />
      </Picker>
      </View>
      <View>
      <Picker selectedDelivery={selectedDelivery}
        style={{ height: 50, width: 150 }}
        onValueChange={(DeliveryValue, DeliveryIndex) => {
          console.log(DeliveryValue);
          setData({...formData,delivery:DeliveryValue})
          // ascendingSort(priceValue)
        }} >
     <Picker.Item label="select Delivery" value="" />
      <Picker.Item label="with delivery" value="with delivery" />
      <Picker.Item label="without delivery" value="without delivery" />
      </Picker>
      </View>
      <View>
      <Picker selectedAvailability={selectedAvailability}
        style={{ height: 50, width: 150 }}
        onValueChange={(AvailabilityValue, AvailabilityIndex) => {
          console.log(AvailabilityValue);
          setData({...formData,availability:AvailabilityValue})
          // ascendingSort(priceValue)
        }} >
     <Picker.Item label="select availability" value="" />
      <Picker.Item label="Available" value="Available" />
      <Picker.Item label="Not Available" value="Not Available" />
      </Picker>
      </View>
      <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(cityValue, cityIndex) => {
          setData({...formData,city:cityValue})
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
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setData({...formData,name:value})}
        placeholder="name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setData({...formData,price:value})}
        placeholder="price"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setData({...formData,description:value})}
        placeholder="description"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setData({...formData,reference:value})}
        placeholder="reference"
      />
      <TextInput style={styles.input} placeholder="add image" onChangeText={(value)=>setData({...formData,picture:value})} />
      <Button onPress={saveEquipement} >Submit</Button>
      </View>
    }
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 7,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex:1,
    backgroundColor:'#fff',
    paddingTop:40,
    paddingHorizontal:20
  },
  cardImage:{
    width:'50%',
    height:100,
    resizeMode:'cover'
  
},
itemVue:{
  marginTop:24,
  padding: 30,
  backgroundColor: 'pink',
  fontSize:24
}
});


export default userEquipements
