// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, Button } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { CredentialsContext } from "./Authentification/CredentialsContext.js";
// import axios from "axios";

// const EditProfile = ({ navigation }) => {
//     const { storedCredentials, setStoredCredentials } =
//         React.useContext(CredentialsContext);
//     const userData = storedCredentials;
//     const {
//         firstName,
//         lastName,
//         phoneNumber,
//         email,
//         adress,
//         city,
//         gender,
//         dateOfBirth,
//     } = userData.userData;
//     const [selectedValue, setSelectedValue] = useState("");
//     const [formData, setData] = React.useState({});
//     console.log("userData:", userData);
//     console.log({ firstName, lastName, phoneNumber, email, adress, city });

//     useEffect(() => {
//         axios
//             .get(
//                 `http://192.168.119.162:3000/editprofile/fetch/${userData.userData._id}`
//             )
//             .then((res) => {
//                 console.log("res in useEffect", res);
//                 // console.log("res in useEffect2",res.json());
//                 // console.log("getbyid",res.data);
//                 // console.log("formadata",{...formData,res});
//                 setData(res.data);
//                 // setData({user})
//                 // console.log(user);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);
//     var profile = () => {
//         navigation.navigate("EquipementsProviderProfile");
//     };
//     const submit = () => {
//         axios
//             .put(
//                 `http://192.168.119.162:3000/editprofile/${userData.userData._id}`,
//                 { formData }
//             )
//             .then((res) => {
//                 console.log("res", res);
//                 var user = res.data;
//                 setData({
//                     ...formData,
//                     lastName: res.data.lastName,
//                     firstName: user.firstName,
//                 });
//                 // console.log("formData",formData);
//                 // console.log(res.data.adress);
//                 // console.log(res.data.firstName);
//                 // console.log(res.data.lastName);
//                 // console.log({...formData,firstName:formData.firstName});
//                 // console.log(formData.firstName);
//             })
//             .then(() => {
//                 setTimeout(() => profile(), 1000);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

//     return (
//         <View>
//             <Text>Edit Profile</Text>
//             <View>
//                 <TextInput
//                     style={{
//                         height: 20,
//                         width: 150,
//                         justifyContent: "center",
//                         flexDirection: "row",
//                         display: "flex",
//                         alignItems: "center",
//                     }}
//                     placeholder="Change your first name"
//                     onChangeText={(value) =>
//                         setData({ ...formData, firstName: value })
//                     }
//                     defaultValue={formData.firstName}
//                 />
//                 <TextInput
//                     style={{
//                         height: 20,
//                         width: 150,
//                         justifyContent: "center",
//                         flexDirection: "row",
//                         display: "flex",
//                         alignItems: "center",
//                     }}
//                     placeholder="Change your last name"
//                     onChangeText={(value) =>
//                         setData({ ...formData, lastName: value })
//                     }
//                     defaultValue={formData.lastName}
//                 />
//                 <TextInput
//                     style={{
//                         height: 20,
//                         width: 150,
//                         justifyContent: "center",
//                         flexDirection: "row",
//                         display: "flex",
//                         alignItems: "center",
//                     }}
//                     placeholder="Change your email"
//                     onChangeText={(value) =>
//                         setData({ ...formData, email: value })
//                     }
//                     defaultValue={formData.email}
//                 />
//                 <TextInput
//                     style={{
//                         height: 20,
//                         width: 150,
//                         justifyContent: "center",
//                         flexDirection: "row",
//                         display: "flex",
//                         alignItems: "center",
//                     }}
//                     placeholder="Change your address"
//                     onChangeText={(value) =>
//                         setData({ ...formData, adress: value })
//                     }
//                     defaultValue={formData.adress}
//                 />
//                 <TextInput
//                     style={{
//                         height: 20,
//                         width: 150,
//                         justifyContent: "center",
//                         flexDirection: "row",
//                         display: "flex",
//                         alignItems: "center",
//                     }}
//                     placeholder="Change your phone number"
//                     onChangeText={(value) =>
//                         setData({ ...formData, phoneNumber: value })
//                     }
//                     defaultValue={formData.phoneNumber}
//                 />
//                 <TextInput
//                     style={{
//                         height: 20,
//                         width: 150,
//                         justifyContent: "center",
//                         flexDirection: "row",
//                         display: "flex",
//                         alignItems: "center",
//                     }}
//                     placeholder="Change your Gendeer"
//                     onChangeText={(value) =>
//                         setData({ ...formData, gender: value })
//                     }
//                     defaultValue={formData.gender}
//                 />
//                 <TextInput
//                     style={{
//                         height: 20,
//                         width: 150,
//                         justifyContent: "center",
//                         flexDirection: "row",
//                         display: "flex",
//                         alignItems: "center",
//                     }}
//                     placeholder="Change your Date Of Birth"
//                     onChangeText={(value) =>
//                         setData({ ...formData, dateOfBirth: value })
//                     }
//                     defaultValue={formData.dateOfBirth}
//                 />
//                 <Picker
//                     selectedValue={selectedValue}
//                     style={{ height: 50, width: 150 }}
//                     onValueChange={(cityValue, cityIndex) => {
//                         setData({ ...formData, city: cityValue });
//                     }}
//                 >
//                     <Picker.Item label="select city" value="" />
//                     <Picker.Item label="Ariana" value="Ariana" />
//                     <Picker.Item label="Ben Arous" value="Ben Arous" />
//                     <Picker.Item label="Tunis" value="Tunis" />
//                     <Picker.Item label="Sousse" value="Sousse" />
//                     <Picker.Item label="Monastir" value="Monastir" />
//                     <Picker.Item label="Sfax" value="Sfax" />
//                     <Picker.Item label="Beja" value="Beja" />
//                     <Picker.Item label="Benzart" value="Benzart" />
//                     <Picker.Item label="Mahdia" value="Mahdia" />
//                     <Picker.Item label="kairouan" value="kairouan" />
//                     <Picker.Item label="Sidi Bouzid" value="Sidi Bouzid" />
//                     <Picker.Item label="Zaghouane" value="Zaghouane" />
//                     <Picker.Item label="Mednine" value="Mednine" />
//                     <Picker.Item label="Gabes" value="Gabes" />
//                     <Picker.Item label="Kebili" value="Kebili" />
//                     <Picker.Item label="Gasserine" value="Gasserine" />
//                     <Picker.Item label="Jendouba" value="Jendouba" />
//                     <Picker.Item label="Kef" value="Kef" />
//                     <Picker.Item label="Siliana" value="Siliana" />
//                     <Picker.Item label="Tozeur" value="Tozeur" />
//                     <Picker.Item label="Tataouine" value="Tataouine" />
//                     <Picker.Item label="Manouba" value="Manouba" />
//                     <Picker.Item label="Gafsa" value="Gafsa" />
//                     <Picker.Item label="Nabeul" value="Nabeul" />
//                 </Picker>
//             </View>
//             <Button onPress={submit}>Submit</Button>
//         </View>
//     );
// };

// export default EditProfile;
