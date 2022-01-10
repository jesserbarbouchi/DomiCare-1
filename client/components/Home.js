import React from "react";
import { View, Text, Button,TouchableOpacity,Image } from "react-native";

const Home = ({route,navigation}) => {
    var goToLogin = () => {
        navigation.navigate("Login");
    };

    var goToServiceProviderList = () => {
        navigation.navigate("ServiceProviderList");
    };
    
    const  userData = route.params;
    console.log('params :' ,userData)
    

    return (
        <View>
            <Text>This is the Home page</Text>
         
    <TouchableOpacity >
      
        <Image source={{uri:"https://images.ctfassets.net/hrltx12pl8hq/2lZ0arT4qgoZ4oVl3pHGQj/e0061a48776af514f9fc62ed76ab9130/07-healthcare-medical_275331998.jpg?fit=fill&w=480&h=270"}}/>
    </TouchableOpacity>




10
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
