import React, { useState, useEffect } from "react";
import { PrivateValueStore, useNavigation } from "@react-navigation/native";
import { View, Text, Button, Image } from "react-native";
import { Input, Center, NativeBaseProvider ,IconButton, Icon} from "native-base"
import { Entypo } from "@expo/vector-icons"
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./Authentification/CredentialsContext.js";
import { IPAdress } from "@env";

const ForumPost = (props) => {
  const [value, setValue] = React.useState("")

  const handleChange = (event) => { console.log(value) 
    return(setValue(event.target.value))}
  const navigation = useNavigation();
  const [singlepost, setpost] = useState({});
  const [participants, setparticipants] = useState([]);
  const[comments,setcomments] = useState([])
  const { storedCredentials, setStoredCredentials } =
    React.useContext(CredentialsContext);
  const userData = storedCredentials.userData;
  console.log('user',userData)
  console.log("params", props.route.params);
  useEffect( () => {
    
    const fetch=async()=>{
      
      const _id = props.route.params._id;
      const post = await axios.get(
        `http://${IPAdress}:3000/savepost/findpost/${_id}`
      );
      const com = await axios.get(
        `http://${IPAdress}:3000/savepost/findcomments/${_id}`
      );
      
      setpost(post.data);
      setparticipants(post.data.participants);
      setcomments(com.data)
     
    }
    fetch()
   
  }, []);
  const Comment=async()=>{
    const _id = props.route.params._id;
    console.log('hello')
    const comment = await axios.post(`http://${IPAdress}:3000/savepost/savepost`, {
      owner:{_id:userData._id,name:userData.firstName},
      postId:singlepost._id,
      content:value,
      type:'comment'
    });

  }

  console.log(singlepost.participants);

  const Like = async () => {
    const userid = userData._id;
    const postid = singlepost._id;
    let action = "";
    var index = singlepost.participants.indexOf(userid);
    if (index == -1) {
      action = "inc";
    } else {
      action = "déc";
    }

    const post = await axios.put(`http://${IPAdress}:3000/savepost/savepost`, {
      userid,
      postid,
      action,
    });
    console.log('post',post.data.comments)
    setpost(post.data);
    setparticipants(post.data.participants);
  };

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
      <Text> {participants.length}Likes</Text>
      <Button title="Like" onPress={() => Like()} />

      <Button title="comment" onPress={() => navigation.navigate("Forum")} />
      {comments.map((comment,key)=>{
          return <View key={key}>
      <Text> {comment.name} </Text>
      <Text> {comment.content} </Text>
      <Text> {comment.createdAt} </Text>
      <Text> {comment.likesCount} </Text>
      <Button title="Like" onPress={() => Like()} />
      <Button title="comment" onPress={() => navigation.navigate("Forum")} />
    
      </View>
      }
      )}
      <NativeBaseProvider>
      <Center flex={1} px="3">
 
    <Input value={value} variant="rounded" placeholder="Round"  onChange={handleChange} w={{
        base: "75%",
        md: "25%",
      }}
      InputRightElement={
        <Button size="xs" rounded="none" w="1/6" h="full" title="Submit"onPress={()=>Comment()}>
         
        </Button>
      }/>
    </Center>
    
    </NativeBaseProvider>
    </View>
  );
};
export default ForumPost;
