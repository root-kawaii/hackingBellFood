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

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "ios-information-circle";
                break;
              case "Ranking":
                iconName = "trophy";
                break;
              case "KPI":
                iconName = "cellular";
            }
            !focused && (iconName += "-outline");

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Ranking" component={RankScreen} />
        <Tab.Screen name="KPI" component={KPIScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
