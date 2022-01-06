import React from 'react';
import { StyleSheet, Text, View, textInput,Button,Alert,Image,ScrollView,FlatList } from 'react-native';
import sProvider from "./dummy.js"

class ServiceProviderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
            sProvider: sProvider,
            selectedCity:''
        }
        this.filterData=this.filterData.bind(this)
    }

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
    // onChange(e) {
    //     this.setState({selectedCity:e.target.value})
    // }

    filterData(city) {
       
       
        const FiltredData = this.state.sProvider.filter((item) => {
                
                return item.city === city
              
        })
            this.setState({
            sProvider:  FiltredData
            });
          }
  

    // componentDidMount() {
    //     this.getServiceProviders()
    //     // this.filterData()
    // }



    render() {
     
    
        return (
            
            <View style={styles.container}>
            
           
           
                <View style={styles.services}>
                    
                    <h1>{ this.state.selectedCity}</h1>
                    <select  onChange={(e)=>this.filterData(e.target.value) }>
                        <option> Ariana</option>
                        <option>Tunis </option>
                        <option> Ben arous</option>
                        <option> Sousse</option>
                        <option> Monastir </option>
                        <option> Sfax </option>
                        <option> Sidi bouzid</option>
                        <option> Mannouba</option>
                        <option> Jendouba </option>
                        <option>Kairouan </option>
                        <option> Tozeur</option>
                        <option>Tataouine </option>
                        <option> Zaghouan</option>
                        <option>Kef </option>
                        <option>Beja </option>
                        <option>Mahdia </option>
                        <option>Gafsa </option>
                        <option> Gasserine</option>
                        <option>Nabeul </option>
                        <option>Siliana </option>
                        <option>Kebili </option>
                        <option>Medenin </option>
                        <option> Gabes</option>
                        <option>Benzart </option>
                    </select>
                   
                   
                   
                    

            
                </View>
                
                 {this.state.sProvider.map((servicep, key) => {
            
            
            return  <View key={key} style={styles.sprovider}>
                  
      
                <Text> {servicep.userName}</Text>
                <Text> {servicep.speciality}</Text>
                <Text> {servicep.city}</Text>
                <Image image = {servicep.picture}   style={{width: 300, height: 200}}/>
                <Text> {servicep.description}</Text>
                <Text> {servicep.rating}</Text>
                <Button title="Ask for service" onPress={() => Alert.alert('Simple Button pressed')} />
    
            </View>
        })}

                
            
            </View>
        )
        
    }
  
}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: 'white',
    //     alignItems: 'center',
    //     justifyContent: 'center',
        
    // },
    // sprovider:{

    // },
    // services: {
    //     flex: 1,
    //     backgroundColor: 'white',
    //     alignItems: 'center',
    //     justifyContent: 'center',
        
    // },

  });

export default ServiceProviderList;