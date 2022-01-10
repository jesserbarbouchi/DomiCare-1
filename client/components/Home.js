import React from "react";
import { View,  Button, } from "react-native";

const Home = ({route,navigation}) => {
    var goToLogin = () => {
        navigation.navigate("Login");
    };

    var goToServiceProviderList = () => {
        navigation.navigate("ServiceProviderList");
    };
    
    const  userData = route.params;
   
    

    return (
        <View>
     
            <Button
                title="Go to Equipements Feed"
                
                onPress={() => navigation.navigate("Equipementsfetch")}
                
            
            />
            
            <Button title="Go to Login" onPress={goToLogin} />
            <Button
                title="Service Providers"
                onPress={() => navigation.navigate("serviceProvidersList")}
            />
             <Button
                title="ServiceProviderProfile"
                onPress={() => navigation.navigate("ServiceProviderProfile")}
            />

            
           
             <Button
                title="share service"
                onPress={() => navigation.navigate("shareservice")}
            />
            <Button title="Forum2" onPress={()=>navigation.navigate("Forum2",userData)} /> 
        </View>
    );
};


export default Home;
