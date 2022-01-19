import React from "react";
import Axios from "axios";
import {
  Avatar,
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  HStack,
  Stack,
  Modal,
  Button,
  Input,
  FormControl,
  Center,
  NativeBaseProvider,
  Alert,
  Collapse,
  VStack,
  IconButton,
  CloseIcon,
} from "native-base";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './Authentification/CredentialsContext.js';

export default () => {
  
  const {storedCredentials,setStoredCredentials}=React.useContext(CredentialsContext)
    const  userData = storedCredentials.userData;
  const [formData, setData] = React.useState({});
  const [modalVisible, setModalVisible] = React.useState(false);
  const [showS, setShowS] = React.useState(false);
  const [showF, setShowF] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const post = () => {
    var reqS=formData
    reqS.type='HCSP'
    

    setData({ ...formData, type: "HCSP" });
    Axios.post(`http://192.168.161.210:3000/ServiceProvider/shareservice/`, {
      formData,_id:userData._id
    })

      .then(() => {
        setShowS(true);
      })
      .catch((err) => {
        setShowF(true);
      });
  };
    
  
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <>
          <Modal
            maxW="100%"
            isOpen={modalVisible}
            onClose={() => setModalVisible(false)}
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
          >
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>describe your service</Modal.Header>
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>title </FormControl.Label>
                  <Input
                    onChangeText={(value) =>
                      setData({ ...formData, title: value })
                    }
                  />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>description</FormControl.Label>
                  <Input
                    onChangeText={(value) =>
                      setData({ ...formData, content: value })
                    }
                  />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>city</FormControl.Label>
                  <Input
                    onChangeText={(value) =>
                      setData({ ...formData, city: value })
                    }
                  />
                </FormControl>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="ghost"
                    colorScheme="blueGray"
                    onPress={() => {
                      
                      setModalVisible(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button variant="outline"
                    onPress={() => {
                      console.log(formData);
                      
                      setModalVisible(false);
                      post()
                    }}
                  >
                    share
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>

          <Box
            maxW="80%"
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
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Box>
              
              <AspectRatio w="100%" ratio={16 / 9}>
                
                <Image
                  source={{
                    uri: "https://www.prnfunding.com/wp-content/uploads/2018/03/nursing.jpg",
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="blue.500"
                _dark={{
                  bg: "violet.400",
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "xs",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5"
              >
                You will shine with Domi Care
              </Center>
            </Box>
            <Collapse isOpen={showF}>
              <Alert w="100%" status="error">
                <VStack space={1} flexShrink={1} w="100%">
                  <HStack
                    flexShrink={1}
                    space={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <HStack flexShrink={1} space={2} alignItems="center">
                      <Alert.Icon />
                      <Text
                        fontSize="md"
                        fontWeight="medium"
                        _dark={{
                          color: "coolGray.800",
                        }}
                      >
                        Please try again !
                      </Text>
                    </HStack>
                    <IconButton
                      variant="unstyled"
                      icon={<CloseIcon size="3" color="coolGray.600" />}
                      onPress={() => setShowF(false)}
                    />
                  </HStack>
                  <Box
                    pl="6"
                    _dark={{
                      _text: {
                        color: "coolGray.600",
                      },
                    }}
                  >
                    your service is not shared you need to try again
                  </Box>
                </VStack>
              </Alert>
            </Collapse>
            <Collapse isOpen={showS}>
              <Alert w="100%" status="success">
                <VStack space={1} flexShrink={1} w="100%">
                  <HStack
                    flexShrink={1}
                    space={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <HStack flexShrink={1} space={2} alignItems="center">
                      <Alert.Icon />
                      <Text
                        fontSize="md"
                        fontWeight="medium"
                        _dark={{
                          color: "coolGray.800",
                        }}
                      >
                        service shared with success
                      </Text>
                    </HStack>
                    <IconButton
                      variant="unstyled"
                      icon={<CloseIcon size="3" color="coolGray.600" />}
                      onPress={() => setShowS(false)}
                    />
                  </HStack>
                  <Box
                    pl="6"
                    _dark={{
                      _text: {
                        color: "coolGray.600",
                      },
                    }}
                  >
                    go and check your dashbord and you will find the service you
                    just shared
                  </Box>
                </VStack>
              </Alert>
            </Collapse>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  My dear Homie Care
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: "violet.500",
                  }}
                  _dark={{
                    color: "violet.400",
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  <HStack
                    mx={{
                      base: "auto",
                      md: "0",
                    }}
                    space={2}
                  >
                    <Avatar
                      bg="amber.500"
                      source={{
                        uri: "https://alpha.nativebase.io/img/native-base-icon.png",
                      }}
                    >
                      RM
                      <Avatar.Badge bg="green.500" />
                    </Avatar>
                  </HStack>
                  {"     "}. REZGUI Mohamed
                </Text>
              </Stack>
              <Text fontWeight="400">
                my Dear you can here share your service with the easy way just
                check your information carefully when you fill them all you need
                to do is click (share you servce here) and start to fill
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Button variant="outline"
                    onPress={() => {
                      console.log(userData)
                      setModalVisible(!modalVisible);
                    }}
                  >
                    share you service here
                  </Button>
                </HStack>
              </HStack>
            </Stack>
            
          </Box>
        </>
      </Center>
    </NativeBaseProvider>
  );
};
