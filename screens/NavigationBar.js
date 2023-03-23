import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./Home";
import Footprint from "./footprint"
import RankScreen from "./Rank";
import KPIScreen from "./KPI";
import QR from "./QR";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "albums";
              break;
            case "Ranking":
              iconName = "trophy";
              break;
            case "Footprint":
              iconName = "podium";
              break;
            case "KPI":
              iconName = "cellular";
            // case "QR":
            //   iconName = "camera";
          }
          !focused && (iconName += "-outline");

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ranking" component={RankScreen} />
      <Tab.Screen name="Footprint" component={Footprint} />
      <Tab.Screen name="KPI" component={KPIScreen} />
      {/* <Tab.Screen name="QR" component={QR} /> */}
    </Tab.Navigator>
  );
}
