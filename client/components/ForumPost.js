import React, { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button ,Image } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './Authentification/CredentialsContext.js';

const ForumPost = (props) => {
  const navigation = useNavigation();
  const singlepost = props.route.params;
  const {storedCredentials,setStoredCredentials}=React.useContext(CredentialsContext)
  const  userData = storedCredentials.userData;
  console.log(userData)
  const [Likes, setLike] = useState([singlepost.likesCount]);
  

  const Like=()=>{
    console.log('likers',singlepost.participants)
    const _id=userData._id
    let action=''
    if(singlepost.participants.includes(_id)){
      setLike(singlepost.likesCount--)
      action='déc'
      }
    
    else{
      setLike(singlepost.likesCount++)
      action='inc'
    }
    
    axios.put('http://192.168.11.112:3000/savepost/savepost',{_id,action}).then((err,res)=>{
        if(err){
          console.log(err)
        }
        else{
          singlepost=res.data
          }
        })
  }

  return (
    <View>
     
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                    }}
                    alt="image"
                  />
                
      <Text> {singlepost.title}</Text>
      <Text> By:{singlepost.owner}</Text>
      <Text>Posted At : {singlepost.createdAt}</Text>
      <Text>Posted At : {singlepost.content}</Text>
      <Text> {singlepost.likesCount} Likes</Text>
      <Button title="Like" onPress={() => Like()} />
      <Button title="comment" onPress={() => navigation.navigate("Forum")} />
      {singlepost.comments.map((comment,key)=>{
          return <View key={key}>
      <Text> {comment.By} </Text>
      <Text> {comment.Body} </Text>
      <Text> {comment.createdAt} </Text>
      <Text> {comment.likes} </Text>
      <Button title="Like" onPress={() => Like()} />
      <Button title="comment" onPress={() => navigation.navigate("Forum")} />
    
      </View>
      }
      )}
    </View>
  );
};
export default ForumPost;
