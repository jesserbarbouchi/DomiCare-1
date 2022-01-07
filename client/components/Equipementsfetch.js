import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { View, StyleSheet, Button,ScrollView, Alert, Image, Text, TouchableOpacity } from 'react-native'
import items from "./Equipements.js"

const Equipementsfetch = () => {
  const [Equipements,setEquipements] = useState([])
  const [myCity,setCity]=useState("")
  const [fetch,setFetch]=useState("")
  // useEffect(()=>{
  //   axios.get('http://localhost:3000/Equipements')
  //   .then(res=>{
  //     console.log("res",res);
  //     console.log("res.data",res.data);
  //     setEquipements(res.data)
  //     setFetch(res.data)
  //   })
  //   .catch(error=>{console.log(error);})
  // },[])
 var filterData=(city)=> {
  
    const FiltredData = items.filter((item) => {
      if(city!==""){
      return item.city === city 
    }
    else{console.log("im in")
    return item.city}
    })
    setEquipements(FiltredData)
    
      }
  var cityOnChange=(e)=>{
        console.log("e",e.target.value);
        setCity(e.target.value)
      }
  var search=()=>{
        filterData()
       
      }
    //  var cityFilter=(city)=>{
    //     var x=[]
    //     var y=Equipements
    //     x=y.filter(ele=>{
    //       if(city!==""){
    //         if(ele.city===city){
    //           return ele
    //         }
    //         else{return ele}
    //       }
          
  //  setEquipements(x)
  //       })
  //     }
  return (
    <SafeAreaView style={styles.container} >
      <Button onPress={search} >Button</Button>
       <View>
                    <select  onChange={(e)=>filterData(e.target.value)}>
                    <option value="" defaultValue>City</option>
                        <option>Ariana</option>
                        <option>Tunis</option>
                        <option>Ben arous</option>
                        <option>Sousse</option>
                        <option> Monastir</option>
                        <option>Sfax</option>
                        <option>Sidi bouzid</option>
                        <option>Mannouba</option>
                        <option> Jendouba</option>
                        <option>Kairouan </option>
                        <option> Tozeur</option>
                        <option>Tataouine</option>
                        <option>Zaghouan</option>
                        <option>Kef</option>
                        <option>Beja</option>
                        <option>Mahdia</option>
                        <option>Gafsa</option>
                        <option> Gasserine</option>
                        <option>Nabeul</option>
                        <option>Siliana</option>
                        <option>Kebili</option>
                        <option>Medenin</option>
                        <option> Gabes</option>
                        <option>Benzart</option>
                    </select>
      </View>
       <ScrollView>
      { Equipements.map((item,index)=>(
          <View key={index} style={styles.item} >
            <Image style={styles.cardImage} source={{uri:item.picture}} />
            <Text>Equipement name : {item.name}</Text>
            <Text>Price : {item.price}</Text>
            <Text>Description : {item.description}</Text>
            <Text>City : {item.city}</Text>
            <Text>Delivery : {item.delivery}</Text>
          </View>
        )) }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    paddingTop:40,
    paddingHorizontal:20
  },item:{
    marginTop:24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize:24
  },cardImage:{
    width:'50%',
    height:100,
    resizeMode:'cover'
  }
})

export default Equipementsfetch
