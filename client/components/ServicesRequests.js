import React ,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button ,ScrollView } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import {Avatar , NativeBaseProvider} from 'native-base';



 const ServicesRequests =()=> {
     const[feed, setFeed]=useState([])


    useEffect(() => {
        const fetch = async () => {
          const posts = await axios.get(
            `http://${localhost}:3000/posts/servicesrequests`
          );
        }
        setFeed(posts)
    }
    )

    return (
        <NativeBaseProvider>
            <ScrollView>
      {feed.map((e,key)=>{return(
      <View style={styles.container} key={key}>
        <Card style={{padding: 10, margin: 10}}>
        <Text style={{marginLeft: 270}}> createdAt</Text>
    
        <Avatar
          bg="green.500"
         
          size="md"
          source={{
            uri: "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600119/59070200-user-icon-man-profil-homme-d-affaires-avatar-personne-ic%C3%B4ne-illustration-vectorielle.jpg?ver=6",
          }}
        >
            </Avatar>
            <Text> By:</Text>
          <Text>Adress city</Text>
          <Text>Requested Date</Text>
          <Text>Details</Text>
          <Button
            onPress={()=>{}}
            title="Offer my services"
            color="teal"
            accessibilityLabel="Learn more about this purple button"
          />
        </Card>
      </View>)})}
      </ScrollView>
      </NativeBaseProvider>
    );
}
const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default ServicesRequests;