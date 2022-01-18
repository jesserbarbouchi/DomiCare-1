import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./Authentification/CredentialsContext.js";
import {localhost} from "@env";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {
    RefreshControl,
    SafeAreaView,
    View,
    StyleSheet,
    ScrollView,
    Button,
} from "react-native";
import {
    IconButton,
    Icon,
    Avatar,
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack,
    NativeBaseProvider,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
export const Forum2 = (props) => {
    const navigation = useNavigation();

  const [subjects, setData] = useState([]);
  useEffect(async () => {
    const result = await axios(`http://${localhost}:3000/savepost/savepost`);
    setData(result.data);
  }, []);
  console.log("sub", subjects);
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {subjects.map((item, key) => {
            return (
              <Box
                key={key}
                maxW="2000"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _ios={{
                    _icon: {
                        size: "2xl",
                    },
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Forum2 />
            </Center>
        </NativeBaseProvider>
    );
};
