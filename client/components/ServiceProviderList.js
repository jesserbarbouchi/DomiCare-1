import React from 'react';
import { StyleSheet, Text, View, textInput,Button,Alert,Image } from 'react-native';
import sProvider from "./dummy.js"
// import { Dropdown } from 'react-native-material-dropdown';
import SelectDropdown from 'react-native-select-dropdown'

const cities = [
    'Tunis',
    'Ariana',
    'Ben arous',
    'Manouba',
    'Sousse',
    'Sfax',
    'Gabes',
    'Médenine',
    'Mahdia',
    'Béja',
    'Bizerte',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kef',
    'Monastir',
    'Nabeul',
    'Sidi Bouzid',
    'Siliana',
    'Tataouine',
    'Tozeur',
    'Zaghouan',
    'Kébili',
  ]

class ServiceProviderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
            sProvider: sProvider
        }
    }
    // componentDidMount() {
    //     return fetch("/serviceProviders")
    //         .then((response) => {
    //             console.log(response)
               
    //                  this.setState({
    //                      sProvider:response.data
    //                     })
                        
    //                 .catch(error=>console.log(error))
                
            
    //     })
    // }



    render() {
     
        let services = this.state.sProvider.map((servicep, key) => {
            
            
            return <View key={key} style={styles.sprovider}>
                  
      
                <Text> {servicep.userName}</Text>
                <Text> {servicep.speciality}</Text>
                <Text> {servicep.city}</Text>
                <Image image = {servicep.picture}   style={{width: 300, height: 200}}/>
                <Text> {servicep.description}</Text>
                <Text> {servicep.rating}</Text>
                <Button
        title="Ask for service"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    
            </View>
        })
        return (
            
           
           
            <View style={styles.services}>
                 <SelectDropdown
	data={cities}
	onSelect={(selectedCity, index) => {
		console.log(selectedCity, index)
	}}
	buttonTextAfterSelection={(selectedCity, index) => {
		
		return selectedCity
	}}
	rowTextForSelection={(City, index) => {

		return City
	}}
                />
                {services}
            
            
            </View>
            
            
        )
        
    }
  
}
const styles = StyleSheet.create({
    sprovider:{

    },
    services: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        
    }

  });

export default ServiceProviderList;