import React from "react"
import { Button , Center, NativeBaseProvider , Heading,Box,CheckIcon,Select,} from "native-base"
import { useNavigation } from "@react-navigation/native";


export default () => {
    const [value, setValue] = React.useState("")
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
        selectedValue={value }
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(value) => setValue(value)}
      >
        <Select.Item  label="Service seeker" value="SignUpServiceSeeker" />
        <Select.Item label="Service provider" value="SignUpServiceProvider" />
        <Select.Item label="Equipements provider" value="SignUpEquipementsProvider" />
      </Select>
    <Button mt="1" width={'30%'} left={'30%'} colorScheme="teal" onPress={()=>navigation.navigate(`${value}`)}>Next</Button>
    
    </Box>
      </Center>
    </NativeBaseProvider>
  )
}
