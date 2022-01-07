import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

const ForumPost = (props) => {
  const navigation = useNavigation();
  const singlepost = props.route.params;
  console.log("singlepost", singlepost);

  return (
    <View>
      {/* <Button title="Back" onPress={() => navigation.navigate("ForumPost")} /> */}
      <Text> {singlepost.title}</Text>
      <Text> By:{singlepost.ownerName}</Text>
      <Text>Posted At : {singlepost.createdAt}</Text>
      <Text>Posted At : {singlepost.text}</Text>
      <Text> {singlepost.likesCount} Likes</Text>
      <Button title="Like" onPress={() => navigation.navigate("Forum")} />
      <Button title="comment" onPress={() => navigation.navigate("Forum")} />
      {singlepost.comments.map((comment,key)=>{
          return <View key={key}>
      <Text> {comment.By} </Text>
      <Text> {comment.Body} </Text>
      <Text> {comment.createdAt} </Text>
      <Text> {comment.likes} </Text>
      <Button title="Like" onPress={() => navigation.navigate("Forum")} />
      <Button title="comment" onPress={() => navigation.navigate("Forum")} />
    
      </View>
      }
      )}
    </View>
  );
};
export default ForumPost;
