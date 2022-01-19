import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {localhost} from "@env";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import {
  Input,
  NativeBaseProvider,
  Image,
  Box,
  Stack,
  VStack,
} from "native-base";

import axios from "axios";

import { CredentialsContext } from "./Authentification/CredentialsContext.js";
import moment from "moment";

const ForumPost = (props) => {
  const [value, setValue] = React.useState("");
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldshow, setshouldshow] = useState(false);

  const handleChange = (event) => {
    console.log(value);
    return setValue(event.target.value);
  };
  const navigation = useNavigation();
  const [singlepost, setpost] = useState({});
  const [participants, setparticipants] = useState([]);
  const [comments, setcomments] = useState([]);
  const [subcomment, setsubcomment] = useState({});
  const { storedCredentials, setStoredCredentials } =
    React.useContext(CredentialsContext);
  const userData = storedCredentials.userData;

  useEffect(() => {
    const fetch = async () => {
      const _id = props.route.params._id;
      const post = await axios.get(
        `http://192.168.161.210:3000/savepost/findpost/${_id}`
      );
      const com = await axios.get(
        `http://192.168.161.210:3000/savepost/findcomments/${_id}`
      );
      setpost(post.data);
      setparticipants(post.data.participants);
      setcomments(com.data);
    };
    fetch();
  }, []);
  const Comment = async () => {
    const _id = props.route.params._id;

    const comment = await axios.post(
      `http://192.168.161.210:3000/savepost/savepost`,
      {
        owner: { _id: userData._id, name: userData.firstName },
        postId: singlepost._id,
        content: value,
        type: "comment",
      }
    );
    const recom = await axios.get(
      `http://192.168.161.210:3000/savepost/findcomments/${_id}`
    );

    setcomments(recom.data);
  };
  const replyto = async () => {
    const id = subcomment;
    const date = moment().startOf("hour").fromNow();
    const reply = await axios.post(`http://192.168.161.210:3000/savepost/reply`, {
      rep: {
        owner: { _id: userData._id, name: userData.firstName },
        commentid: id,
        content: value,
        createdAt: date,
      },
    });
    const _id = props.route.params._id;
    const recomm = await axios.get(
      `http://192.168.161.210:3000/savepost/findcomments/${_id}`
    );
    setcomments(recomm.data);
  };

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
    const post = await axios.put(
      `http://192.168.161.210:3000/savepost/savepost`,
      {
        userid,
        postid,
        action,
      }
    );

    setpost(post.data);
    setparticipants(post.data.participants);
  };

  return (
    <NativeBaseProvider>
      <Text> {singlepost.title}</Text>
      <Box>
        <VStack space="2.5" mt="4">
          <Stack direction="row" mb="2.5" mt="1.5" space={0.5}>
            <Image
              size={30}
              alt="fallback text"
              borderRadius={100}
              source={{
                uri: "https://-page-icon.png",
              }}
              fallbackSource={{
                uri: "https://www.w3schools.com/css/img_lights.jpg",
              }}
            />
            <Text> By:{singlepost.owner}</Text>
          </Stack>
        </VStack>
      </Box>

      <Text>Posted At : {singlepost.createdAt}</Text>
      <Text> {singlepost.content}</Text>
      <Text> {participants.length}Likes</Text>
      <Box>
        <VStack space="2.5" mt="4">
          <Stack direction="row" mb="2.5" mt="1.5" space={0.5}>
            <Pressable style={styless.button}>
              <Text style={styless.text}></Text>
            </Pressable>
            <Pressable style={styless.button} onPress={() => Like()}>
              <Text style={styless.text}>Like</Text>
            </Pressable>
            <Pressable
              style={styless.button}
              onPress={() => setShouldShow(!shouldShow)}
            >
              <Text style={styless.text}>Comment</Text>
            </Pressable>
          </Stack>
        </VStack>
      </Box>
      {shouldShow ? (
        <Input
          value={value}
          variant="rounded"
          placeholder="Round"
          onChange={handleChange}
          w={{
            width: 500,
            md: "25%",
          }}
          InputRightElement={
            <Button
              size="xs"
              rounded="none"
              w="1/6"
              h="full"
              title="Submit"
              onPress={() => Comment()}
            ></Button>
          }
        />
      ) : null}

      <View>
        <View style={{ height: 600, width: 500 }}>
          <SafeAreaView>
            <ScrollView>
              <View>
                {comments.map((comment, key) => {
                  return (
                    <View key={key}>
                      <Text> {comment.name} </Text>
                      <Text> {comment.content} </Text>
                      <Text> {comment.createdAt} </Text>
                      {/* <Text> {comment.likesCount} </Text> */}
                      <Box>
                        <VStack space="2.5" mt="4">
                          <Stack direction="row" mb="2.5" mt="1.5" space={0.5}>
                            <Pressable style={styless.button}>
                              <Text style={styless.text}></Text>
                            </Pressable>

                            <Pressable
                              style={styless.button}
                              onPress={() => {
                                setshouldshow(!shouldshow);
                                setsubcomment(comment._id);
                              }}
                            >
                              <Text style={styless.text}>Reply</Text>
                            </Pressable>
                          </Stack>
                        </VStack>
                      </Box>
                      {comment.comments.map((reply) => {
                        return (
                          <View >
                            <Text> {reply.owner.name} </Text>
                            <Text> {reply.content} </Text>
                            <Text> {reply.createdAt} </Text>
                          </View>
                        );
                      })}
                      {shouldshow ? (
                        <Input
                          value={value}
                          variant="rounded"
                          placeholder="..."
                          onChange={handleChange}
                          w={{
                            width: 500,
                            md: "25%",
                          }}
                          InputRightElement={
                            <Button
                              size="xs"
                              rounded="none"
                              w="1/6"
                              h="full"
                              title="Submit"
                              onPress={() => replyto()}
                            ></Button>
                          }
                        />
                      ) : null}
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styless = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "blue",
  },
});

export default ForumPost;
