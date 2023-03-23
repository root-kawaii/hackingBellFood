import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/Home";
import RankScreen from "./screens/Rank";
import KPIScreen from "./screens/KPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./screens/Login";
import NavigationBar from "./screens/NavigationBar";
import Footprint from "./screens/Footprint";

const Stack = createNativeStackNavigator();

export default function App() {
  const check = getData();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Base"
          component={NavigationBar}
          options={{ title: "Navigate" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@storage_Key");
    if (value !== null) {
      return true;
    }
  } catch (e) {
    // error reading value
  }
};
