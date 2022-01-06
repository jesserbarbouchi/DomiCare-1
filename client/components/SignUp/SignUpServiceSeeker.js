
import * as React from "react"
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
} from "native-base"

const [formData, setData] = React.useState({});
const [errors, setErrors] = React.useState({});

const validate = () => {
  if (formData.name === undefined) {
    setErrors({
      ...errors,
      name: 'Name is required',
    });
    return false;
  } else if (formData.name.length < 3) {
    setErrors({
      ...errors,
      name: 'Name is too short',
    });
    return false;
  }
  return true;
};
const  onSubmit = () => {
 

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading
        size="lg"
        color="coolGray.800"
        _dark={{
          color: "warmGray.50",
        }}
        fontWeight="semibold"
      >
        Welcome
      </Heading>
      <Heading
        mt="1"
        color="coolGray.600"
        _dark={{
          color: "warmGray.200",
        }}
        fontWeight="medium"
        size="xs"
      >
        Sign up to continue!
      </Heading>
      <VStack space={3} mt="5">
        
      <FormControl isRequired>
          <FormControl.Label>FirstName</FormControl.Label>
          <Input    onChangeText={(value) => setData({ ...formData, firstName: value })}/>
        </FormControl>
        
        
        <FormControl isRequired>
          <FormControl.Label>LastName</FormControl.Label>
          <Input    onChangeText={(value) => setData({ ...formData, lastName: value })}/>
        </FormControl>
        
        
        <FormControl isRequired>
          <FormControl.Label>Username</FormControl.Label>
          <Input    onChangeText={(value) => setData({ ...formData, userName: value })} />
        </FormControl>
        
        
        <FormControl >
          <FormControl.Label    >Phone Number</FormControl.Label>
          <Input onChangeText={(value) => setData({ ...formData, phoneNumber: value })}/>
        </FormControl>
        
        
        <FormControl isRequired>
          <FormControl.Label >Email</FormControl.Label>
          <Input onChangeText={(value) => setData({ ...formData, email: value })} />
        </FormControl>
        
        
        <FormControl isRequired>
          <FormControl.Label>Password</FormControl.Label>
          <Input  type="password" onChangeText={(value) => setData({ ...formData, password: value })}/>
          <FormControl.HelperText _text={{fontSize: 'xs'}}>
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>Error Name</FormControl.ErrorMessage>
        </FormControl>
        
        
        <FormControl isRequired>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        
        
        <Button mt="2" colorScheme="indigo" onPress={()=>validate()}>
          Sign up
        </Button >
      </VStack>
    </Box>
      </Center>
    </NativeBaseProvider>
  )
}


