import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { TextArea, Center, NativeBaseProvider } from "native-base"


const AddBlog = (props) => {



  return (
    <View>
        <TextArea
      h={500}
      placeholder="Text Area Placeholder"
      w={400}
    />
      <Button title="Post" onPress={() => navigation.navigate("Forum")} />  
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
