import { Text, View, FlatList } from "react-native";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { Card, Button } from "react-native-paper";

const CHALLENGES = [
  {
    id: 1,
    title: "Bell Schweiz - Zell",
    content: "let the clothes dry naturally, save energy",
    reward: 124,
    buttonText: "101",
  },
  {
    id: 2,
    title: "Bell Deutschland - Schiltach",
    content: "let the clothes dry naturally, save energy",
    reward: 112,
    buttonText: "89",
  },
  {
    id: 3,
    title: "Eisberg - Dällikon Feldhof",
    content: "let the clothes dry naturally, save energy",
    reward: 100,
    buttonText: "78",
  },
  {
    id: 4,
    title: "Hilcona - Orbe",
    content: "let the clothes dry naturally, save energy",
    reward: 100,
    buttonText: "57",
  },
  {
    id: 5,
    title: "Süddeutsche Truthahn AG",
    content: "let the clothes dry naturally, save energy",
    reward: 100,
    buttonText: "45",
  },
];

const Carta = ({ title, content, reward, buttonText }) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.paragraph}> {content} </Text>
      <Card.Actions>
        <Text style={styles.paragraph}> {reward} </Text>
        <Button buttonColor="green">{buttonText}</Button>
      </Card.Actions>
    </Card>
  );
};

const renderItem = ({ item }) => {
  return (
    <Carta
      title={item.title}
      content={item.content}
      buttonText={item.buttonText}
    />
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Carta
        title={"PODIUM"}
        content={"Bell Food - Basel"}
        buttonText={"143"}
      />

      <FlatList
        data={CHALLENGES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    justifyContent: "center",
    margin: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "center",
    padding: 10,
  },
});
