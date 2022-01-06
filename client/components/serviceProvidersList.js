import React, { useState } from "react";
import { View, Picker, StyleSheet, Button,ScrollView, Alert, Image, Text, TouchableOpacity } from "react-native";
import sProvider from "./dummy.js"

const serviceProvidersList = () => {
    const [selectedValue, setSelectedValue] = useState("Aryana");
    const [selectedGender, setSelectedGender] = useState("Male");
    const [ServiceProviders,setSProviders]=useState(sProvider);
    
    
    // getServiceProviders() {
    //     fetch("/serviceProviders")
    //         .then((response) => {
    //             console.log(response)
               
    //                  this.setState({
    //                      sProvider:response.data
    //                     })
                        
    //                 .catch(error=>console.log(error))
                
            
    //     })
        
    // }
  

  const filterData = (city, gender) => {
    console.log(gender)

       
       
    const FiltredData = sProvider.filter((item) => {
      if (city === item.city) {

        return item.city === city
      }
      else  if (gender === item.gender) {
          return item.gender === gender
        
      }
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
            filterData(cityValue)
          }}
        >
          
        <Picker.Item label="Ariana" value="Ariana" />
        <Picker.Item label="Ben Arous" value="Ben Arous" />
        <Picker.Item label="Tunis" value="Tunis" />
        <Picker.Item label="Sousse" value="Sousse" />
        <Picker.Item label="monastir" value="monastir" />
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
              selectedGender={selectedGender}
              
              style={{ height: 50, width: 150 }}
              onValueChange={(genderValue, genderIndex) => {
                setSelectedGender(genderValue)
              
                filterData(genderValue)
              }}
            >
              
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />

            </Picker>
      </View>















          
      <View style={styles.sProvider}>
      <ScrollView>
          {ServiceProviders.map((servicep, key) => {
            
            
            return ( <View key={key} style={styles.sprovider}>
                  
      
              <Text> {servicep.userName}</Text>
              <Image style={styles.imageProfile} source={{ uri: servicep.picture }} />

                <Text> {servicep.speciality}</Text>
                <Text> {servicep.city}</Text>
                <Text> {servicep.gender}</Text>
                <Text> {servicep.description}</Text>
                {/* <Text> {servicep.rating}</Text> */}
                <Button title="Ask for service" onPress={() => Alert.alert('Simple Button pressed')} />
    
            </View>
          )})}

</ScrollView>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
    },
    imageProfile:{
        width:'10%',
            height: '50%',
        borderRadius:10
            
           
  },
  sProvider: {
    flex: 1,
    paddingTop: 20,
    
  }
});

export default serviceProvidersList;