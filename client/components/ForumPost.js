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
  console.log("params", props.route.params);
  useEffect( () => {
    
    const fetch=async()=>{
      
      const _id = props.route.params._id;
      const post = await axios.get(
        `http://${IPAdress}:3000/savepost/findpost/${_id}`
      );
      
      setpost(post.data);
      setparticipants(post.data.participants);
      setcomments(post.data.comments)
     
    }
    fetch()
   
  }, []);

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
      <Text> {comment.By} </Text>
      <Text> {comment.Body} </Text>
      <Text> {comment.createdAt} </Text>
      <Text> {comment.likes} </Text>
      <Button title="Like" onPress={() => Like()} />
      <Button title="comment" onPress={() => navigation.navigate("Forum")} />
    
      </View>
      }
      )}
      <NativeBaseProvider>
      <Center flex={1} px="3">
     {/* <Input
      value={value}
      w={{
        base: "75%",
        md: "25%",
      }}
      onChange={handleChange}
      placeholder="Value Controlled Input"
    /> */}
    <Input value={value} variant="rounded" placeholder="Round"  onChange={handleChange} w={{
        base: "75%",
        md: "25%",
      }}/>
    </Center>
    <IconButton
      icon={<Icon as={Entypo} name="emoji-happy" />}
      borderRadius="full"
      _icon={{
        color: "orange.500",
        size: "md",
      }}
      _hover={{
        bg: "orange.600:alpha.20",
      }}
      _pressed={{
        bg: "orange.600:alpha.20",
        _icon: {
          name: "emoji-flirt",
        },
        _ios: {
          _icon: {
            size: "2xl",
          },
        },
      }}
      _ios={{
        _icon: {
          size: "2xl",
        },
      }}
    />
    </NativeBaseProvider>
    </View>
  );
};
export default ForumPost;
