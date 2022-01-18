
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackNavigator from './StackNavigator.js';
import  ServiceProviderProfile from '../components/ServiceProviderProfile.js'
import  Notifications  from '../components/Notifications.js';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../components/Home.js';

const MainScreen = ()=> {

    const Tab = createBottomTabNavigator();
    const tabBarOptions = {
        activeTintColor: 'teal',
        indicatorStyle: { backgroundColor: 'red', height: '100%' },
        pressOpacity: 1,
      }
    
    return (
        <Tab.Navigator
        initialRouteName="HomeScreen" 
        screenOptions={tabBarOptions}
            screenOptions={
                () => ({

                headerShown: false,
    
            })}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} 
            options={{
                tabBarLabel: 'HomeScreen',
                tabBarColor: 'teal',
                tabBarIcon: ({color}) => (
                  <Icon name="ios-home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen name="Notifications" component={Notifications} 
            options={{
                tabBarLabel: 'Notifications',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({color}) => (
                  <Icon name="ios-notifications" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
      name="Profiles"
      component={ServiceProviderProfile}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default MainScreen