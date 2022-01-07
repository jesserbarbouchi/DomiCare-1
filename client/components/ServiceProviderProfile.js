import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Image,StyleSheet,Text,View} from "react-native"

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const ServiceProviderProfile = () => (
  <View style={styles.container}>
  <Card>
    <Card.Content>
      <Title>Profile</Title>
      </Card.Content>
      <View style = {styles.info}>
    <Image  style={styles.image} resizeMode="cover"   source={{ uri:"https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300"}} />    <Title>Sahar Tabka</Title>
    <Text >Nurse</Text >
    <Text >90054112</Text >
        <Text >Tabkasahar3@gmail.com</Text>
        </View>

    <Card.Actions>
      <Button>Update Profile</Button>
     
    </Card.Actions>
    </Card>
    </View>
);
const styles = StyleSheet.create({})

export default ServiceProviderProfile;