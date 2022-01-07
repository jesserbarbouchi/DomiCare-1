import React, { useState } from "react";
import { View, StyleSheet, Button,ScrollView, Alert,Picker, Image, Text, TouchableOpacity } from "react-native";
import sProvider from "./dummy.js"
// import { Picker } from '@react-native-picker/picker';
import axios from 'axios'
// import { Avatar } from 'react-native-paper';
import { Card, Icon } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';




const serviceProvidersList = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedgender, setSelectedGender] = useState("");
    const [ServiceProviders,setSProviders]=useState(sProvider);
    
    
    const getServiceProviders=()=> {
        axios.get("/serviceProvidersList")
            .then((response) => {
                console.log(response)
               
                     this.setState({
                         sProvider:response.data
                        })
                        
                    .catch(error=>console.log(error))
                
            
        })
        
  }
  const ratingCompleted=(rating)=> {
    console.log("Rating is: " + rating)
  }
  

  const filterData = (city, gender) => {

       
       
    const FiltredData = sProvider.filter((item) => {
      if (city!==""&& gender !== "") {

        return item.city === city &&item.gender === gender
      }
      
       else if (gender === "" && city !== "") {
          return item.city === city
        
      }
      else if (city === "" && gender !== "") {
        return item.gender === gender
      
      }
      else{return item.city && item.gender}

      
    })
      

    setSProviders(FiltredData)
  }
  

  
  

    // componentDidMount() {
    //     this.getServiceProviders()
    //     // this.filterData()
    // }
    



  return (
    <View style={styles.container}>
      <View style = {styles.cities}>
          
      <Picker
          selectedValue={selectedValue}
          
          style={{ height: 50, width: 150 }}
          onValueChange={(cityValue, cityIndex) => {
            setSelectedValue(cityValue)
            filterData(cityValue,selectedgender)
          }}
        >
          <Picker.Item label="select city" value="" />
        <Picker.Item label="Ariana" value="Ariana" />
        <Picker.Item label="Ben Arous" value="Ben Arous" />
        <Picker.Item label="Tunis" value="Tunis" />
        <Picker.Item label="Sousse" value="Sousse" />
        <Picker.Item label="Monastir" value="Monastir" />
        <Picker.Item label="Sfax" value="Sfax" />
        <Picker.Item label="Beja" value="Beja" />
        <Picker.Item label="Benzart" value="Benzart" />
        <Picker.Item label="Mahdia" value="Mahdia" />
        <Picker.Item label="kairouan" value="kairouan" />
        <Picker.Item label="Sidi Bouzid" value="Sidi Bouzid" />
        <Picker.Item label="Zaghouane" value="Zaghouane" />
        <Picker.Item label="Mednine" value="Mednine" />
        <Picker.Item label="Gabes" value="Gabes" />
        <Picker.Item label="Kebili" value="Kebili" />
        <Picker.Item label="Gasserine" value="Gasserine" />
        <Picker.Item label="Jendouba" value="Jendouba" />
        <Picker.Item label="Kef" value="Kef" />
        <Picker.Item label="Siliana" value="Siliana" />
        <Picker.Item label="Tozeur" value="Tozeur" />
        <Picker.Item label="Tataouine" value="Tataouine" />
        <Picker.Item label="Manouba" value="Manouba" />
        <Picker.Item label="Gafsa" value="Gafsa" />
        <Picker.Item label="Nabeul" value="Nabeul" />
      </Picker>
      </View>

      <View style = {styles.gender}>
          
          <Picker
              selectedgender={selectedgender}
              
              style={{ height: 50, width: 150 }}
              onValueChange={(genderValue, genderIndex) => {
                setSelectedGender(genderValue)
                console.log(genderValue)
                filterData(selectedValue,genderValue)
              }}
            >
              <Picker.Item label="select gender" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />

            </Picker>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.card}>
         
            <Card.Title>Service Providers</Card.Title>
            <Card.Divider />
            {ServiceProviders.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.picture }}
                  />
                  <Text style = {styles.name}> Username : { u.userName}</Text>
                  <Text style = {styles.name}> Position : {u.speciality}</Text>
                  <Text style = {styles.name}> City : {u.city}</Text>
                  <Text style = {styles.name}> Gender : {u.gender}</Text>
                  <Text style = {styles.name}> Services : {u.services}</Text>
               
                  <AirbnbRating style={styles.airbnbRating} />
                  


                                  <Button title="Ask for service" onPress={() => Alert.alert('Simple Button pressed')} />

                </View>
              );
            })}
              
          </Card>
        </View>
        </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    
  },
  
    imageProfile:{
        width:'10%',
            height: '50%',
        borderRadius:10
            
           
  },
  sProvider: {
    flex: 1,
    paddingTop: 20,
    
  },
  user: {
    flexDirection: 'column',
    marginBottom: 50,
  },

  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  airbnbRating: {
    marginRight: 20
    
  },
  name: {
    fontSize: 20,
    marginTop: 5,
    // fontWeight: "bold",
    fontFamily: "Cochin",
    fontStyle: 'italic'
  },
  
});



export default serviceProvidersList;