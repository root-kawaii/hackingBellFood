import { Text, View, FlatList } from "react-native";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { Card, Button } from "react-native-paper";
import { ScrollView, StatusBar } from "react-native";
import { colors } from "../constants/colors";

const CHALLENGES = [];

const Carta = ({ title, subtitle, position, points }) => {
  return (
    <View
      style={[
        styles.card,
        {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.position}>{position}.</Text>
        <View>
          <Text style={styles.titleCard}>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
      </View>
      <Text style={{ fontSize: 30 }}>
        {points}
        <Ionicons name={"flower-outline"} size={30} color={"tomato"} />
      </Text>
    </View>
  );
};

const renderItem = ({ item }) => {
  return (
    <Carta title={item.title} position={item.position} points={item.points} />
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.end}>
          <Text style={styles.title}>March '23</Text>
        </View>

        <ScrollView>
          <Carta
            title={"Bell Schweiz"}
            subtitle={"Zell"}
            position={1}
            points={124}
          />
          <Carta
            title={"Bell Deutschland"}
            subtitle={"Schiltach"}
            position={2}
            points={89}
          />
          <Carta
            title={"Eisberg"}
            subtitle={"Dällikon Feldhof"}
            position={3}
            points={78}
          />
          <Carta title={"Hilcona"} subtitle={"Orbe"} position={4} points={57} />
          <Carta
            title={"Süddeutsche Truthahn"}
            subtitle={"Ampfing"}
            position={5}
            points={45}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  end: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
    right: 0,
    left: 0,
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
  },
  card: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    borderStartColor: "light",
    backgroundColor: colors.light,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: 10,
    elevation: 3,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ecf0f1",
  },
  info: {
    backgroundColor: "red",
  },
  nums: {
    backgroundColor: "yellow",
  },
  titleCard: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
  },
  position: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    padding: 5,
  },
});
