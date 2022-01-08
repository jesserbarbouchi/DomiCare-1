import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

const Home = () => {
    const navigation = useNavigation();
    var goToLogin = () => {
        navigation.navigate("Login");
    };
   
    return (
        <View>
            <Text>This is the Home page</Text>
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
                title="Forum"
                onPress={() => navigation.navigate("Forum")}
            />
             <Button
                title="share service"
                onPress={() => navigation.navigate("shareservice")}
            />
            <Button title="Forum2" onPress={()=>navigation.navigate("Forum2")} /> 
        </View>
    );
};

export default Home;
