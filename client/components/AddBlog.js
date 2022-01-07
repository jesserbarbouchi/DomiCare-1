import React , { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { TextArea, Center, NativeBaseProvider } from "native-base"
import axios from "axios";


const AddBlog = (props) => {
  const [post,setpost]= useState('')

     const SavePost=(post)=>{
        axios.post('http://192.168.11.15:3000/savepost/savepost',{post}).then((err,res)=>{
          if(err){
            console.log(err)
          }
          else{
            console.log(res)
            navigation.navigate("Forum")}
          })
        }

  return (
    <View>
        <TextArea
      h={500}
      placeholder="Text Area Placeholder"
      w={400}
      onChange={(e)=>setpost(e.target.value)}
    />
      <Button title="Post" onPress={() => SavePost({content:post,owner:'Firas',title:'dummy subject',likesCount:0,comments:[],type:"Quest"})} />  
    </View>
  );
};
export default () => {
    return (
      <NativeBaseProvider>
        <Center flex={3} px="3">
          <AddBlog />
        </Center>
      </NativeBaseProvider>
    )
  }
