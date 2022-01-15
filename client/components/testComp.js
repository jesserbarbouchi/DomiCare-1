import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,SafeAreaView,FlatList,ActivityIndicator } from 'react-native'
const myUrl='http://192.168.161.210:19006/equipements/'

const testComp = () => {
const [isLoading,setLoading] =useState(true)
const [data,setData]=useState([])
useEffect(()=>{
  fetch(myUrl).then((response)=>{
    console.log(response);
    
  })
  .then((json)=>setData(data))
  .catch(error=>console.log("error",error))
  .finally(setLoading(false))
})
  return (
    <SafeAreaView style={styles.container} >
      {isLoading ? <ActivityIndicator/> : <FlatList
      data={data}
      keyExtractor={({id},index)=>id}
      renderItem={({item})=>(
        <View>
        <Image style={styles.cardImage} source={{uri:item.picture}} />
        <Text>Equipement name : {item.name}</Text>
            <Text>Price : {item.price}</Text>
            <Text>Description : {item.description}</Text>
            <Text>City : {item.city}</Text>
            <Text>Delivery : {item.delivery}</Text>
            </View>
            )}
      />}
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

export default testComp
