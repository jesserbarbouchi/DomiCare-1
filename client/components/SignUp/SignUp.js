import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';



export default class SignUp extends React.Component {
  
  state = {
   type:'service seeker' , firstName:'', lastName:'',  userName: '', password: '', email: '', phone_number: '', 
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  render() {
    return (
      <View style={styles.container}>

            <TextInput
          style={styles.input}
          placeholder='FirstName'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('firstName', val)}
        />
            <TextInput
          style={styles.input}
          placeholder='LastName'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('lastName', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('userName', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button
          title='Sign Up'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dropDown : {
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    height: 40
  }
})




