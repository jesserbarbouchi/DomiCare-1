import React, { useState, useEffect } from "react";
import {localhost} from "@env";
import {
  View,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
  Picker,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import sProvider from "./dummy.js";
import axios from "axios";
const ServiceSeekerRequests = () => {
  const [Data, setData] = useState([]);

  useEffect(async () => {
    try {
      const result = await axios.get(
        `http://${localhost}:3000/ServiceSeekerRequests/ServiceSeekerRequests`
      );
      setSProviders(result.data);
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export default ServiceSeekerRequests;
