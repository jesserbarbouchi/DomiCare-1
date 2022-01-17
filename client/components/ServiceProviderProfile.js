import React, { useState, useEffect } from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Image, StyleSheet, Text, View } from "react-native";
import axios from "axios";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ServiceProviderProfile = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("/serviceProvidersList");
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
  });
  return (
    <View style={styles.container}>
      {data.map((sp, index) => {
        return (
          <View key={i} style={styles.user}>
            <Card>
              <Card.Content>
                <Title>Profile</Title>
              </Card.Content>
              <View style={styles.info}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{
                    uri: "https://cdn.dribbble.com/users/844597/screenshots/9008058/media/a8bfc3cd2e71a304a02d8729bcffa132.png?compress=1&resize=400x300",
                  }}
                />{" "}
                <Title>Sahar Tabka</Title>
                <Text>{sp.speciality}</Text>
                <Text>{sp.phoneNumber}</Text>
                <Text>{sp.email}</Text>
              </View>
              <Card.Actions>
                <Button>Update Profile</Button>
              </Card.Actions>
            </Card>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({});

export default ServiceProviderProfile;
