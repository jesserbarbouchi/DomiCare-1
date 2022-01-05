import React, { useState } from 'react'
import { View, Text,StyleSheet,ScrollView,Image,FlatList } from 'react-native'

const EquipementsFeed = () => {
  const [data,setData] = useState([
    { id:1, name: 'Oxygéne machine', price: '1000dt',picture:"https://img.joomcdn.net/1c77be34506edd60a9d0d6f1a0813b8d9dba0d54_1024_1024.jpeg"},
    { id:2, name: 'Oxygéne machine2', price: '500dt',picture:"https://medeor.de/dateien/Non-Profit-Pharmaceuticals/Medical-supplies-and-devices/Medizintechnik/Oxygen-concentrators/action-medeor-oxygen-concentrator-JAY-5BW-Web.jpg"},
    { id:3, name: 'Oxygéne machine3', price: '150dt',picture:"https://cdn.manomano.com/images/images_products/13848936/P/23574848_1.jpg"},
    { id:4, name: 'Oxygéne machine3', price: '190dt',picture:"https://m.media-amazon.com/images/I/6127GLu7xaS._AC_SX425_.jpg"}
  ])
  return (
      <View style={styles.container} >
      <ScrollView>
      { data.map((item,index)=>{
        return(
          <View key={index} style={styles.item} >
            <Image style={styles.cardImage} source={{uri:item.picture}} />
            <Text>Equipement name : {item.name}</Text>
            <Text>Price : {item.price}</Text>
          </View>
        )
      }) }
      </ScrollView>
      </View>
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
export default EquipementsFeed
{/* <View style={styles.container} >
<ScrollView>
{ data.map((item,index)=>{
  return(
    <View key={index} style={styles.item} >
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Image source={{url:item.picture}} />
    </View>
  )
}) }
</ScrollView>
</View> */}

{/* <View style={styles.container} >
<FlatList 
keyExtractor={(item)=>item.id}
data={data}
renderItem={({item})=>(
  <Text>{item.name}</Text>


)}
/>
</View> */}