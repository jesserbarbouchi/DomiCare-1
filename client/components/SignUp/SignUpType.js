import React from "react"
import { Button , Radio, Center, NativeBaseProvider } from "native-base"
import { useNavigation } from "@react-navigation/native";

export default () => {
    const [value, setValue] = React.useState("service seeker")
    const navigation = useNavigation()

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
      <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="user type"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue)
      }}
    >
      <Radio value="service seeker"  size="lg" my={1}>
      service seeker
      </Radio>
      <Radio value="service provider"  size="lg" my={1}>
      service provider
      </Radio>
      <Radio value="equipement provider"  size="lg" my={1}>
      equipement provider
      </Radio>
    </Radio.Group>
    <Button onPress={()=>navigation.navigate('SignUp')}>Next</Button>
      </Center>
    </NativeBaseProvider>
  )
}
