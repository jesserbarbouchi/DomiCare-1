import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button ,Image } from "react-native";

const ForumPost = (props) => {
  const navigation = useNavigation();
  const singlepost = props.route.params;
  console.log("singlepost", singlepost);

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
