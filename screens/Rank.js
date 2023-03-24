import { Text, View, FlatList } from "react-native";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { Card, Button } from "react-native-paper";
import { ScrollView, StatusBar } from "react-native";

const CHALLENGES = [];

const Carta = ({ title, subtitle, position, points }) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.info}>
        <Text style={styles.position}> {position}. </Text>
        <Text style={styles.titleCard}> {title} </Text>
        {""}
        <Text style={styles.subtitle}> {subtitle} </Text>
      </Text>
      <Text style={styles.nums}>
        <Text style={{ fontSize: 30 }}>
          {points}
          {""}
          <Ionicons name={"flower-outline"} size={30} color={"tomato"} />
        </Text>
      </Text>
    </Card>
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

        <ScrollView style={styles.ranking}>
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
            title={"Süddeutsche Truthahn AG"}
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
    padding: 7,
  },
  container: {
    // display:"flex",
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "#ecf0f1",
  },
  info: {
    width: "60%",
    backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  nums: {
    width: "40%",
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  titleCard: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  position: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    padding: 0,
  },
});
