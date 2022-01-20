import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";

import Swiper from "react-native-swiper/src";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay
                    horizontal={false}
                    height={200}
                    activeDotColor="#14b8a6"
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
});
