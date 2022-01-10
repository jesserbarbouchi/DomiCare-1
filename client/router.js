import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import EquipementsFeed from "./components/EquipementsFeed.js";
import Forum from "./components/Forum.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import SignUpServiceSeeker from "./components/SignUp/SignUpServiceSeeker.js";
import SignUpServiceProvider from "./components/SignUp/SignUpServiceProvider.js";
import SignUpEquipementsProvider from "./components/SignUp/SignUpEquipementsProvider.js";
import SignUpType from "./components/SignUp/SignUpType.js";
import ForumPost from "./components/ForumPost.js";
import serviceProvidersList from './components/serviceProvidersList.js';
import shareservice from './components/shareService.js';
import AddBlog from "./components/AddBlog.js";
import Forum2 from "./components/Forum2.js"
import ServiceProviderProfile from "./components/ServiceProviderProfile.js"
import Equipmentsfetch from "./components/Equipementsfetch.js"



const Stack = createNativeStackNavigator();
const Router = () => {
    return (
        //create your routes here
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Equipementsfetch" component={Equipmentsfetch} />
            <Stack.Screen name="SignUpServiceSeeker" component={SignUpServiceSeeker} options={{headerShown: false}} />
            <Stack.Screen name="SignUpServiceProvider" component={SignUpServiceProvider} options={{headerShown: false}} />
            <Stack.Screen name="SignUpEquipementsProvider" component={SignUpEquipementsProvider} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="SignUpType" component={SignUpType} options={{headerShown: false}} />
            <Stack.Screen name="Forum" component={Forum} />
            <Stack.Screen name="Forum2" component={Forum2} />
            <Stack.Screen name="ForumPost" component={ForumPost} />
            <Stack.Screen name="shareservice" component={shareservice} />
            <Stack.Screen name="AddBlog" component={AddBlog} />

            <Stack.Screen name="serviceProvidersList" component={serviceProvidersList} />
            <Stack.Screen name="ServiceProviderProfile" component={ServiceProviderProfile} />
            
        
        </Stack.Navigator>
    );
};



export default Router;
