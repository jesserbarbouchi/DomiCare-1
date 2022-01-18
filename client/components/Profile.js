import React from "react";
import axios from "axios";
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import { CredentialsContext } from "../components/Authentification/CredentialsContext.js";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export const ProfileServiceSeeker = () => {
    const { storedCredentials, setStoredCredentials } =
        React.useContext(CredentialsContext);
    const userData = storedCredentials.userData;

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
            px: "20px",
            mb: "4",
            minW: "80",
        }}
    >
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image
                style={styles.avatar}
                source={{
                    uri: userData.picture,
                }}
            />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>
                        {userData.lastName + " " + userData.firstName}
                    </Text>
                </View>
                
                <View style={styles.infoBoxWrapper}>
                    <View
                        style={[
                            styles.infoBox,
                            {
                                borderRightColor: "#dddddd",
                                borderRightWidth: 1,
                            },
                        ]}
                    >
                        <Title>0</Title>
                        <Caption>Request</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title>0</Title>
                        <Caption>Post</Caption>
                    </View>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon
                            name="map-marker-radius"
                            color="#777777"
                            size={20}
                        />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.adress && userData.city
                                ? userData.adress + " - " + userData.city
                                : "N/A"}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.phoneNumber}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.email}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Icon name="cake" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.dateOfBirth
                                ? userData.dateOfBirth
                                : "N/A"}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Icon
                            name="gender-male-female-variant"
                            color="#777777"
                            size={20}
                        />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.gender ? userData.gender : "N/A"}
                        </Text>
                    </View>
                </View>

            

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <Icon name="chat" color="#76becc" size={25} />
                            <Text style={styles.menuItemText}>My Posts</Text>
                        </View>
                    </TouchableRipple>

               
                </View>
            </View>
        </View>
                </ScrollView>

    );
};
export const ProfileServiceProvider = () => {
    const { storedCredentials, setStoredCredentials } =
        React.useContext(CredentialsContext);
    const userData = storedCredentials.userData;

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
            px: "20px",
            mb: "4",
            minW: "80",
        }}
    >
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image
                style={styles.avatar}
                source={{
                    uri: userData.picture,
                }}
            />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>
                        {userData.lastName + " " + userData.firstName}
                    </Text>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon
                            name="map-marker-radius"
                            color="#777777"
                            size={20}
                        />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.adress && userData.city
                                ? userData.adress + " - " + userData.city
                                : "N/A"}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.phoneNumber}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.email}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Icon name="cake" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.dateOfBirth
                                ? userData.dateOfBirth
                                : "N/A"}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Icon
                            name="gender-male-female-variant"
                            color="#777777"
                            size={20}
                        />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.gender ? userData.gender : "N/A"}
                        </Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View
                        style={[
                            styles.infoBox,
                            {
                                borderRightColor: "#dddddd",
                                borderRightWidth: 1,
                            },
                        ]}
                    >
                        <Title>0</Title>
                        <Caption>Request</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title>0</Title>
                        <Caption>Post</Caption>
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <Icon name="chat" color="#76becc" size={25} />
                            <Text style={styles.menuItemText}>My Posts</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <Icon
                                name="account-edit"
                                color="#76becc"
                                size={25}
                            />
                            <Text style={styles.menuItemText}>
                                Edit Profile
                            </Text>
                        </View>
                    </TouchableRipple>
                </View>
            </View>
        </View>
        </ScrollView>

    );
};
export const ProfileEquipementsProvider = () => {
    const { storedCredentials, setStoredCredentials } =
        React.useContext(CredentialsContext);
    const userData = storedCredentials.userData;

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
            px: "20px",
            mb: "4",
            minW: "80",
        }}
    >
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image
                style={styles.avatar}
                source={{
                    uri: userData.picture,
                }}
            />
            <View style={styles.body}>
            <View style={styles.bodyContent}>
                    <Text style={styles.name}>
                        {userData.lastName + " " + userData.firstName}
                    </Text>
                </View>
                
                <View style={styles.infoBoxWrapper}>
                    <View
                        style={[
                            styles.infoBox,
                            {
                                borderRightColor: "#dddddd",
                                borderRightWidth: 1,
                            },
                        ]}
                    >
                        <Title>0</Title>
                        <Caption>Request</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title>0</Title>
                        <Caption>Post</Caption>
                    </View>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon
                            name="map-marker-radius"
                            color="#777777"
                            size={20}
                        />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.adress && userData.city
                                ? userData.adress + " - " + userData.city
                                : "N/A"}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.phoneNumber}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.email}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Icon name="cake" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.dateOfBirth
                                ? userData.dateOfBirth
                                : "N/A"}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Icon
                            name="gender-male-female-variant"
                            color="#777777"
                            size={20}
                        />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>
                            {userData.gender ? userData.gender : "N/A"}
                        </Text>
                    </View>
                </View>

         

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <Icon name="chat" color="#76becc" size={25} />
                            <Text style={styles.menuItemText}>My Posts</Text>
                        </View>
                    </TouchableRipple>

                 
                </View>
            </View>
        </View>
        </ScrollView>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginTop: 30,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "500",
    },
    row: {
        flexDirection: "row",
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
        flexDirection: "row",
        height: 100,
    },
    infoBox: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: "#777777",
        marginLeft: 20,
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 26,
    },

    header: {
        backgroundColor: "#14b8a6",
        height: 130,
    },
    avatar: {
        width: 180,
        height: 180,
        borderRadius: 113,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: "center",
        position: "absolute",
        marginTop: 30,
    },
    // name: {
    //     fontSize: 22,
    //     color: "#FFFFFF",
    //     fontWeight: "600",
    // },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: "center",
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600",
    },
});
