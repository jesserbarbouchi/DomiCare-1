import React from "react"
import { Button , Center, NativeBaseProvider , Heading,Box,CheckIcon,Select,} from "native-base"
import { useNavigation } from "@react-navigation/native";


export default () => {
    const [value, setValue] = React.useState("Service Seeker")
    const [formData, setData] = React.useState({});

    const navigation = useNavigation()

   
    
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="120%" maxW="300" >
            <Heading
                size="md"
                fontWeight="300"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
              >
                Signup as :
              </Heading>
      
      <Select
        selectedValue={formData.type || ''}
        minWidth="200"
        accessibilityLabel="Choose Service"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => {
          setData({ ...formData, type: itemValue })
        }}
      >
        <Select.Item  key={1} label="Service Seeker" value="SignUpServiceSeeker" />
        <Select.Item key={2} label="Service Provider" value="SignUpServiceProvider" />
        <Select.Item key={3} label="Equipements Provider" value="SignUpEquipementsProvider" />
      </Select>
    <Button mt="1" width={'30%'} left={'30%'} colorScheme="teal" onPress={()=>navigation.navigate(`${formData.type}`)}>Next</Button>
    
    </Box>
      </Center>
    </NativeBaseProvider>
  )
}
