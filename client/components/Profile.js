// import React, { useState, useEffect } from "react";
// import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
// import { Image, StyleSheet, Text, View } from "react-native";
// import axios from "axios";

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

// export const ProfileServiceSeeker = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data: response } = await axios.get("/serviceProvidersList");
//         setData(response);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   });
//   return (
//     <View style={styles.container}>
//       {data.map((sp, index) => {
//         return (
//           <View key={i} style={styles.user}>
//             <Card>
//               <Card.Content>
//                 <Title>Profile</Title>
//               </Card.Content>
//               <View style={styles.info}>
//                 <Image
//                   style={styles.image}
//                   resizeMode="cover"
//                   source={{
//                     uri: "https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300",
//                   }}
//                 />{" "}
//                 <Title>Sahar Tabka</Title>
//                 <Text>{sp.speciality}</Text>
//                 <Text>{sp.phoneNumber}</Text>
//                 <Text>{sp.email}</Text>
//               </View>

//               <Card.Actions>
//                 <Button>Update Profile</Button>
//               </Card.Actions>
//             </Card>
//           </View>
//         );
//       })}
//     </View>
//   );
// };

// export const ProfileServiceProvider = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const { data: response } = await axios.get("/serviceProvidersList");
//           setData(response);
//         } catch (error) {
//           console.log(error);
//         }
//       };
//     });
//     return (
//       <View style={styles.container}>
//         {data.map((sp, index) => {
//           return (
//             <View key={i} style={styles.user}>
//               <Card>
//                 <Card.Content>
//                   <Title>Profile</Title>
//                 </Card.Content>
//                 <View style={styles.info}>
//                   <Image
//                     style={styles.image}
//                     resizeMode="cover"
//                     source={{
//                       uri: "https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300",
//                     }}
//                   />{" "}
//                   <Title>Sahar Tabka</Title>
//                   <Text>{sp.speciality}</Text>
//                   <Text>{sp.phoneNumber}</Text>
//                   <Text>{sp.email}</Text>
//                 </View>

//                 <Card.Actions>
//                   <Button>Update Profile</Button>
//                 </Card.Actions>
//               </Card>
//             </View>
//           );
//         })}
//       </View>
//     );
//   };

//  export const ProfileEquipementsProvider = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const { data: response } = await axios.get("/serviceProvidersList");
//           setData(response);
//         } catch (error) {
//           console.log(error);
//         }
//       };
//     });
//     return (
//       <View style={styles.container}>
//         {data.map((sp, index) => {
//           return (
//             <View key={i} style={styles.user}>
//               <Card>
//                 <Card.Content>
//                   <Title>Profile</Title>
//                 </Card.Content>
//                 <View style={styles.info}>
//                   <Image
//                     style={styles.image}
//                     resizeMode="cover"
//                     source={{
//                       uri: "https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300",
//                     }}
//                   />{" "}
//                   <Title>Sahar Tabka</Title>
//                   <Text>{sp.speciality}</Text>
//                   <Text>{sp.phoneNumber}</Text>
//                   <Text>{sp.email}</Text>
//                 </View>

//                 <Card.Actions>
//                   <Button>Update Profile</Button>
//                 </Card.Actions>
//               </Card>
//             </View>
//           );
//         })}
//       </View>
//     );
//   };

import React from "react";
import axios from "axios";
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import { CredentialsContext } from "../components/Authentification/CredentialsContext.js";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
} from "react-native-fontawesome";

export const ProfileServiceSeeker = () => {
    const { storedCredentials, setStoredCredentials } =
        React.useContext(CredentialsContext);
    const userData = storedCredentials.userData;

    return (
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
    );
};
export const ProfileServiceProvider = () => {
    const { storedCredentials, setStoredCredentials } =
        React.useContext(CredentialsContext);
    const userData = storedCredentials.userData;

    return (
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
    );
};
export const ProfileEquipementsProvider = () => {
    const { storedCredentials, setStoredCredentials } =
        React.useContext(CredentialsContext);
    const userData = storedCredentials.userData;

    return (
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
    );
};

export default ProfileServiceSeeker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginTop: 10,
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
        backgroundColor: "#76becc",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: "center",
        position: "absolute",
        marginTop: 130,
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: "600",
    },
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
