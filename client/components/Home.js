import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

const Home = () => {
    const navigation = useNavigation();
    var goToLogin = () => {
        navigation.navigate("Login");
    };
    var goToServiceProviderList = () => {
        navigation.navigate("ServiceProviderList");
    };
    return (
        <View>
            <Text>This is the Home page</Text>
            <Button
                title="Go to Equipements Feed"
                onPress={() => navigation.navigate("EquipementsFeed")}
            />
            <Button title="Go to Login" onPress={goToLogin} />
            <Button
                title="Service Providers"
                onPress={() => navigation.navigate("ServiceProviderList")}
            />
            <Button
                title="Forum"
                onPress={() => navigation.navigate("Forum")}
            />
        </View>
    );
};

export default Home;
