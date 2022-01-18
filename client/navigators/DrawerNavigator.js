import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {StyleSheet, Text, View , TouchableHighlight , TouchableOpacity, Image , ScrollView} from 'react-native';
import React from "react";
import { CredentialsContext } from "../components/Authentification/CredentialsContext.js";
import MainScreen from "./MainScreen.js";
import {ProfileServiceSeeker , ProfileServiceProvider , ProfileEquipementsProvider } from "../components/Profile.js"


import ForumPost from "../components/ForumPost.js";
import serviceProvidersList from "../components/serviceProvidersList.js";
import shareservice from "../components/shareService.js";
import AddBlog from "../components/AddBlog.js";
import Equipmentsfetch from "../components/Equipementsfetch.js";
import EditProfile from "../components/EditProfile.js";


import SeekerRequest from "../components/SeekerRequest.js";
import Report from "../components/report.js";

import CustomDrawer from "../navigators/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {

  const { storedCredentials, setStoredCredentials } =
  React.useContext(CredentialsContext);
  const userType = storedCredentials.userData.type


 


  const linking = {
    screens: {
      ResetPassword: {
        path: "ResetPassword/:code/:email",
        parse: {
          code: (code) => code.replace(/^@/, ""),
          email: (email) => email.replace(/^@/, ""),
        },
        stringify: {
          code: (code) => `@{code}`,
          email: (email) => `@{email}`,
        },
      },
      VerificationCode: {
        path: "VerificationCode/:code/:email",
        parse: {
          email: (email) => "",
          code: (code) => "",
        },
        stringify: {
          code: (code) => "",
          email: (email) => "",
        },
      },
    },
  };

  return (
      <Drawer.Navigator
      
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: '#76becc',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: 0,
          fontSize: 15,
        },
      }}
  
      initialRouteName="Home"
        drawerContent={(props) =>
          <CustomDrawer {...props}/>}
      >

        <Drawer.Screen name="MainScreen" component={MainScreen} />
        <Drawer.Screen name="Equipementsfetch" component={Equipmentsfetch} />   
        {
                (userType === 'serviceSeeker')?(
                    <Drawer.Screen name="Profile" component={ProfileServiceSeeker} />

                ):(userType=== 'serviceProvider')?(
                    <Drawer.Screen name="Profile" component={ProfileServiceProvider} />
                ): (
                    <Drawer.Screen name="Profile" component={ProfileEquipementsProvider} />
                )
            }
        <Drawer.Screen name="serviceProvidersList" component={serviceProvidersList}/>

        <Drawer.Screen name="shareservice" component={shareservice} />
 
        <Drawer.Screen options={{
            drawerLabel: () => null,
            title: null,
            drawerItemStyle: { height: 0 },
            drawerIcon: () => null,
          }}name="SeekerRequest" component={SeekerRequest} />
          
        <Drawer.Screen name="Report" component={Report}
         options={{
          drawerLabel: () => null,
          title: null,
          drawerItemStyle: { height: 0 },
          drawerIcon: () => null,
        }} />
           <Drawer.Screen name="AddBlog" component={AddBlog}     options={{
            drawerLabel: () => null,
            title: null,
            drawerItemStyle: { height: 0 },
            drawerIcon: () => null,
          }}/>
           <Drawer.Screen name="ForumPost" component={ForumPost}
           options={{
            drawerLabel: () => null,
            title: null,
            drawerItemStyle: { height: 0 },
            drawerIcon: () => null,
          }} />
                <Drawer.Screen
          options={{
            drawerLabel: () => null,
            title: null,
            drawerItemStyle: { height: 0 },
            drawerIcon: () => null,
          }}
          name="EditProfile"
          component={EditProfile}
        />
        
      </Drawer.Navigator>
  );
};
export default DrawerNav;

const styles = StyleSheet.create({
  drawerTransparent : {
      flex : 1,
      backgroundColor : 'transparent'
  },
  drawer : {
    flex : 1,
    width:500,
    backgroundColor:'white'  
  },
  
  header:{
      width: '100%',
      height : 200,
      backgroundColor : '#6195ff',
      alignItems: 'center',
      justifyContent : 'center'
  },
  
  headerImage:{
      borderRadius : 100
  },
  row:{
      flexDirection : 'row',
      paddingVertical : 15,
      paddingLeft : 10,
  },
  menu:{
      width : 10,
      height : 10,
      backgroundColor : 'red',
      borderRadius : 50,
      alignSelf : 'center', 
  },
  text: {
      fontSize : 20,
      fontWeight : 'bold',
      marginLeft: 15,
      color : '#111',
  },
  line:{
      width : '90%',
      alignSelf: 'center',
      height : 1,
      backgroundColor: 'gray',
      margin:15
  }
})