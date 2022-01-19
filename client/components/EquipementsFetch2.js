import React, {useRef,useState,useEffect} from 'react';
import axios from 'axios'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import  ImageHeaderScrollView  from "react-native-image-header-scroll-view"

import * as Animatable from 'react-native-animatable';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const EquipementsFetch2 = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("")
  const [selectedAvailability, setSelectedAvailability] = useState(null)
  const [Equipements,setEquipements] = useState([])
  const [myData,setmyData]=useState([])
  const navTitleView = useRef(null);
  useEffect(()=>{
    axios.get('http://localhost:3000/Equipements')
    .then(res=>{
      // console.log("res",res);
      // console.log("res.data",res.data);
      setEquipements(res.data)
      setmyData(res.data)
    })
    .catch(error=>{console.log(error);})
  },[])

const availability = (eve)=>{
  var ava
  if(eve==="Available"){
    ava = Equipements.filter((item)=>item.availability==="Available") 
      setEquipements(ava)
  }
  else if (eve==="Not Available"){
    ava = Equipements.filter((item)=>item.availability==="Not Available") 
      setEquipements(ava)
  }
  else{setEquipements(myData)}
}

const ascendingSort = (eve) => {
  var asc
  if(eve==="Between 0 and 500"){
   asc = Equipements.filter((item)=>{
    if(item.price<500 && item.price>0){
      return item.price 
    }
  })
  setEquipements(asc)
}
else if(eve==="more then 500"){
  asc = Equipements.filter((item)=>{
    if(item.price>=500 && item.price<=1000){
      return item.price
    }
  })
  setEquipements(asc)

}
else if(eve==="more then 1000"){
  asc = Equipements.filter((item)=>{
    if(item.price>1000){
      return item.price
    }
  })
  setEquipements(asc)
}
else if (eve===""){
    setEquipements(myData)
}

};
var filterData=(city)=> {
  var FiltredData 
 if(city!==''){
  FiltredData= Equipements.filter((item)=>
   item.city===city)
   setEquipements(FiltredData)

 }
 else{
   setEquipements(myData)
 } 
    }
      var apihandler=()=>{
        const url = "http://localhost:3000/Equipements"
        fetch(url).then((res)=>res.json())
        .then((resJson)=>{
          console.log("resJson",resJson);
          setEquipements({data:resJson})
        })
      }
      var filterData2=(city)=> {
  
        const FiltredData = Equipements.filter((item) => {
          if(city!==""){
          return item.city === city 
        }
        else{console.log("im in")
       apihandler}
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
  

  return (
    <View>
       {Equipements.map((item, key) => {
         return(
    <View style={styles.container}>
     
        <View >
      <StatusBar barStyle="light-content" />
      < ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={item.picture} style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{item.picture}</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{item.name}</Text>
          </Animatable.View>
        )}>
        <View style={[styles.section, styles.sectionLarge]}>
          <Text style={styles.sectionContent}>{item.description}</Text>
        </View>
      </ ImageHeaderScrollView>
      </View>
      
    </View>
    )})}
    </View>
  );
};

export default EquipementsFetch2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
});
