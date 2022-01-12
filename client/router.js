import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import EquipementsFeed from "./components/EquipementsFeed.js";
import Forum from "./components/Forum.js";
import Home from "./components/Home.js";
import Login from "./components/Authentification/Login.js";
import SignUpServiceSeeker from "./components/Authentification/SignUpServiceSeeker.js";
import SignUpServiceProvider from "./components/Authentification/SignUpServiceProvider.js";
import SignUpEquipementsProvider from "./components/Authentification/SignUpEquipementsProvider.js";
import SignUpType from "./components/Authentification/SignUpType.js";
import ForumPost from "./components/ForumPost.js";
import serviceProvidersList from "./components/serviceProvidersList.js";
import shareservice from "./components/shareService.js";
import AddBlog from "./components/AddBlog.js";
import Forum2 from "./components/forum2.js";
import ServiceProviderProfile from "./components/ServiceProviderProfile.js";
import Equipmentsfetch from "./components/Equipementsfetch.js";
import EquipementsProviderProfile from "./components/EquipementsProviderProfile.js"
import EditProfile from "./components/EditProfile.js"
import VerificationCode from "./components/Authentification/VerificationCode.js";
import ForgetPassword from "./components/Authentification/ForgetPassword.js";
import ResetPassword from "./components/Authentification/ResetPassword.js";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
const Router = () => {
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
                    code: (code) =>  "",
                },
                stringify: {
                    code: (code) => "",
                    email: (email) => "",
                },
            },
        },
    };

    return (
        <NavigationContainer
            linking={linking}
            fallback={<Text>Loading...</Text>}
        >
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="Equipementsfetch"
                    component={Equipmentsfetch}
                />
                <Stack.Screen name="EquipementsProviderProfile" component={EquipementsProviderProfile} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Forum" component={Forum} />
                <Stack.Screen name="Forum2" component={Forum2} />
                <Stack.Screen name="ForumPost" component={ForumPost} />
                <Stack.Screen name="AddBlog" component={AddBlog} />
                <Stack.Screen
                    name="serviceProvidersList"
                    component={serviceProvidersList}
                />
                <Stack.Screen
                    name="ServiceProviderProfile"
                    component={ServiceProviderProfile}
                />
                <Stack.Screen name="shareservice" component={shareservice} />

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                    name="ForgetPassword"
                    component={ForgetPassword}
                />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen
                    name="VerificationCode"
                    component={VerificationCode}
                />
                <Stack.Screen name="SignUpAs" component={SignUpType} />
                <Stack.Screen
                    name="SignUpServiceSeeker"
                    component={SignUpServiceSeeker}
                />
                <Stack.Screen
                    name="SignUpServiceProvider"
                    component={SignUpServiceProvider}
                />
                <Stack.Screen
                    name="SignUpEquipementsProvider"
                    component={SignUpEquipementsProvider}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
