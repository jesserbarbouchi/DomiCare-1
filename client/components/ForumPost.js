import React, { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button ,Image } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './Authentification/CredentialsContext.js';

const ForumPost = (props) => {
  console.log("params",props.route.params)
  useEffect( async() => {
    const _id=props.route.params._id
     const post =await axios.get(`http://192.168.11.151:3000/savepost/findpost/${_id}`)
       
          setpost(post.data);
        },[])
     
  const navigation = useNavigation();
  const [singlepost,setpost] = useState({});
  const {storedCredentials,setStoredCredentials}=React.useContext(CredentialsContext)
  const  userData = storedCredentials.userData;
 
  const [Likes, setLike] = useState(0);
  
 
  console.log('init',singlepost)

  const Like=()=>{
    
    console.log('likers',singlepost)
    const userid=userData._id
    const postid=singlepost._id
    let action=''
    
    var index=singlepost.participants.indexOf(userid)
    if(index==-1){
      
      
      action='déc'
      }
    
    else{
      
      action='inc'
    }
    console.log('hello')
    
    axios.put('http://192.168.11.151:3000/savepost/savepost',{userid,postid,action}).then((err,res)=>{
        if(err){
          console.log('err',err)
        }
        else{  
          console.log('response',res.data)
          setpost(res.data)
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
      <Text> {singlepost.content}</Text>
      <Text>{singlepost.likesCount}  Likes</Text>
      <Button title="Like" onPress={() => Like()} />

      
      <Button title="comment" onPress={() => navigation.navigate("Forum")} />
      {/* {singlepost.comments.map((comment,key)=>{
          return <View key={key}>
      <Text> {comment.By} </Text>
      <Text> {comment.Body} </Text>
      <Text> {comment.createdAt} </Text>
      <Text> {comment.likes} </Text>
      <Button title="Like" onPress={() => Like()} />
      <Button title="comment" onPress={() => navigation.navigate("Forum")} />
    
      </View>
      }
      )} */}
    </View>
  );
};
export default ForumPost;
