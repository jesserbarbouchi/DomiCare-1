import { axios } from 'axios';
import React, {useState,useEffect } from 'react'
import { View, Text,StyleSheet,ScrollView,Image,FlatList,Button } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import items from "./Equipements.js"

 class fetchD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items:items,
        result:[],
        city:"",
        delivery:"",
        price:0,
        picture:"",
        description:"",
        name:"",
        data:[]
    }
    this.cityFilter=this.cityFilter.bind(this)
    this.onChangeCity=this.onChangeCity.bind(this)
    this.filterData=this.filterData.bind(this)
    // this.changestate=this.changestate.bind(this)
  }
  // componentDidMount(){
  //   this.fetchData()
  // }
  onChangeCity(e){
    console.log("city",e,e.target.value);
    this.setState({
      city:e.target.value
    })
  }
  apihandler(){
    const url = "http://192.168.1.15:3000/Equipements"
    fetch(url).then((res)=>res.json())
    .then((resJson)=>{
      console.log(resJson);
      this.setState({data:resJson})
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
      cityFilter(city){
       const x=this.state.items.filter(ele=>{
          if(city!==""){
            if(ele.city===city){
              return ele
            }
            else{return ele}
          }
         
   this.setState({
     items:x
   })
        })
      }
   
      filterData(city) {
        // var FiltredData =[]
        const FiltredData = this.state.items.filter((item) => {
          if(city!==""){
            if(item.city===city){return item}
        } else{return item}
        })
            this.setState({
            items:  FiltredData
            });
          }
          fetchData(){
              fetch("http://192.168.1.15:3000/Equipements")
              .then(response=>{
                console.log("response",response);
                this.setState({
                  items:response.data
                })
              })
              .catch(error=>{
                console.log("error",error);
              })
          } 
          // fetchData(){
          //   axios.get('http://localhost:19006/Equipements')
          //   .then(({data})=>{
          //     console.log("data",data);
          //     this.setState({
          //       items:data,
          //     });
          //     console.log(this.state.items);
          //   })
          //   .catch(error=>{
          //     console.log("error",error);
          //   })
          // }
          
          // fetchData(){
          //   axios
          //   .get('http://localhost:19006/Equipements')
          //   .then(function (response) {
          //     // handle success
          //     alert(JSON.stringify(response.data));
          //   })
          //   .catch(function (error) {
          //     // handle error
          //     alert(error.message);
          //   })
          //   .finally(function () {
          //     // always executed
          //     alert('Finally called');
          //   });
          // }
          // changestate(data){
          //   this.setState({
          //     city:data.city ,
          //   })
          // }
  render() {
    const {data} = this.state
    return (
      <View style={styles.container} >
       <View>
       <h1>{ this.state.city}</h1>
                    <select  onClick={(e)=>this.filterData(e.target.value) } size="1">
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
      { data.map((item,index)=>(
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
      <Button onPress={this.apihandler}>click me!</Button>
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
export default fetchD






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