import React, { useState } from 'react'
import { View, Text,StyleSheet,ScrollView,Image,FlatList } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import items from "./Equipements.js"
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
 class EquipementsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items:items,
        result:[],
        city:"",

    }
    this.cityFilter=this.cityFilter.bind(this)
    this.onChangeCity=this.onChangeCity.bind(this)
    this.onChangeHandler=this.onChangeHandler.bind(this)
  }
  onChangeCity(e){
    console.log("city",e,e.target.value);
    this.setState({
      city:e.target.value
    })
  }
  myFilter(small,big){
        console.log("hi");
        var x = []
        var y = this.state.items
        x=y.filter(ele=>{
          if((small.price!=="") && (big.price!=="")){
            if(ele.price>=small.price && ele.price<=big.price){
              return ele
            }
            else {return ele}
          }
        })
        
        this.state.result=x
        this.setState({items:x
        })
      }
      cityFilter(test){
        var x=[]
        var y=this.state.items;
        x=y.filter(ele=>{
          if(test.city!==""){
            if(test.city===ele.city){
              return ele
            }
          }
          else{return ele}
          this.state.result=x
   this.setState({
     items:x
   })
        })
      }
      onChangeHandler(myCity){
        return items
      }
  render() {
    return (
      <View style={styles.container} >
        <SelectDropdown
	data={this.state.items}
/>
      <ScrollView>
      { this.state.items.map((item,index)=>(
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
      </View>
    )
  }
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






// const EquipementsFeed = () => {
//   const [data,setData] = useState([
//     { id:1, name: 'Oxygéne machine', price: '1000dt',picture:"https://img.joomcdn.net/1c77be34506edd60a9d0d6f1a0813b8d9dba0d54_1024_1024.jpeg"},
//     { id:2, name: 'Oxygéne machine2', price: '500dt',picture:"https://medeor.de/dateien/Non-Profit-Pharmaceuticals/Medical-supplies-and-devices/Medizintechnik/Oxygen-concentrators/action-medeor-oxygen-concentrator-JAY-5BW-Web.jpg"},
//     { id:3, name: 'Oxygéne machine3', price: '150dt',picture:"https://cdn.manomano.com/images/images_products/13848936/P/23574848_1.jpg"},
//     { id:4, name: 'Oxygéne machine3', price: '190dt',picture:"https://m.media-amazon.com/images/I/6127GLu7xaS._AC_SX425_.jpg"}
//   ])
//   var [result,setResult]= useState([])
//   var myFilter=(small,big)=>{
//     console.log("hi");
//     var x = []
//     var y = data
//     data.filter(ele=>{
//       if((small.price!=="") && (big.price!=="")){
//         if(ele.price>=small.price && ele.price<=big.price){
//           return ele
//         }
//         else {return ele}
//       }
//     })
    
//     result=x
//     y=x
//   }
//   return (
//       <View style={styles.container} >
//       <ScrollView>
//       { data.map((item,index)=>{
//         return(
//           <View key={index} style={styles.item} >
//             <Image style={styles.cardImage} source={{uri:item.picture}} />
//             <Text>Equipement name : {item.name}</Text>
//             <Text>Price : {item.price}</Text>
//           </View>
//         )
//       }) }
//       </ScrollView>
//       </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor:'#fff',
//     paddingTop:40,
//     paddingHorizontal:20
//   },item:{
//     marginTop:24,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontSize:24
//   },cardImage:{
//     width:'50%',
//     height:100,
//     resizeMode:'cover'
//   }
// })
// export default EquipementsFeed





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