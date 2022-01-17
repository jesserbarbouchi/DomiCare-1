import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from "react-native";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./Authentification/CredentialsContext.js";
import Swiper from "react-native-swiper/src";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeScreen = ({ navigation }) => {
    const theme = useTheme();
    const { storedCredentials, setStoredCredentials } =
        React.useContext(CredentialsContext);
    const userData = storedCredentials;
    console.log("userData :", userData);

    const clearLogin = () => {
        AsyncStorage.removeItem("domicareCredentials")
            .then(() => {
                setStoredCredentials("");
            })
            .catch((error) => console.log(error));
    };

    const profileType = () => {
        if (!storedCredentials) {
            return;
        } else if (storedCredentials.type === "serviceProvider") {
            console.log("provider",storedCredentials.type)
            navigation.navigate("ServiceProviderProfile");
        } else if (storedCredentials.type === "equipementsProvider") {
            console.log("equipements",storedCredentials.type)
            navigation.navigate("EquipementsProviderProfile");
        } else return;
    };

    return (

        <ScrollView style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay
                    horizontal={false}
                    height={200}
                    activeDotColor="#008080"
                >
                    <View style={styles.slide}>
                        <Image
                            source={{
                                uri: "https://i.pinimg.com/originals/88/55/04/8855045af2589b1353f620b2b1235e10.jpg",
                            }}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={{
                                uri: "https://www.konicaminolta.co.th/wp-content/uploads/2019/10/Website_Konica-54.jpg",
                            }}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require("../assets/wa.png")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() => navigation.navigate("serviceProvidersList")}
                >
                    <View style={styles.categoryIcon}>
                        <Ionicons
                            name="medical-sharp"
                            size={35}
                            color="white"
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>
                        Services Providers
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryBtn}>
                    <View style={styles.categoryIcon}>
                        <Ionicons
                            name="chatbubbles-sharp"
                            size={35}
                            color="white"
                            onPress={() =>
                                navigation.navigate("Forum2", userData)
                            }
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Forum</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.categoryBtn}>
                    <View style={styles.categoryIcon}>
                        <Ionicons
                            name="chatbubbles-sharp"
                            size={35}
                            color="white"
                            onPress={() =>
                                navigation.navigate("Essai", userData)
                            }
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Essai</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn}>
                    <View style={styles.categoryIcon}>
                        <Ionicons
                            name="chatbubbles-sharp"
                            size={35}
                            color="white"
                            onPress={() =>
                                navigation.navigate("ServicesRequests", userData)
                            }
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>ServicesRequests</Text>
                </TouchableOpacity>
                

                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                    <View style={styles.categoryIcon}>
                        <Ionicons
                            name="medkit-sharp"
                            size={35}
                            color="white"
                            onPress={() =>
                                navigation.navigate("Equipementsfetch")
                            }
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Equipements</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() => navigation.navigate("shareservice")}
                >
                    <View style={styles.categoryIcon}>
                        <Ionicons name="documents" size={35} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Posts</Text>
                </TouchableOpacity>

                {storedCredentials ? (
                    <>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={profileType}
                        >
                            <View style={styles.categoryIcon}>
                                <Ionicons
                                    name="person"
                                    size={35}
                                    color="white"
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Profil</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <></>
                )}

                {storedCredentials ? (
                    <>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={clearLogin}
                        >
                            <View style={styles.categoryIcon}>
                                <Ionicons
                                    name="log-out"
                                    size={35}
                                    color="white"
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Logout</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TouchableOpacity
                            style={styles.categoryBtn}
                            onPress={() => navigation.navigate("Login")}
                        >
                            <View style={styles.categoryIcon}>
                                <Ionicons
                                    name="log-in-sharp"
                                    size={35}
                                    color="white"
                                />
                            </View>
                            <Text style={styles.categoryBtnTxt}>Login</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </ScrollView>

    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    sliderContainer: {
        height: 200,
        width: "100%",
        marginBottom: 50,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
        borderRadius: 8,
    },
    sliderImage: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: "30%",
        marginHorizontal: 0,
        alignSelf: "center",
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 70,
        height: 70,
        backgroundColor: "#008080" /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: "center",
        marginTop: 5,
        color: "black",
    },
});
