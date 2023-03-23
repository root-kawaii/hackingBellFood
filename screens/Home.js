import {
  Text,
  View,
  FlatList,
 } from "react-native";
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import Ionicons       from "react-native-vector-icons/Ionicons";
import React          from 'react';
import { Card, Button }       from 'react-native-paper';

const CHALLENGES = [
  {
    id: 1,
    title: "Line-dry clothes",
    content: "let the clothes dry naturally, save energy",
    reward: 100,
  },
  {
    id: 2,
    title: "Go vegan for a day",
    content: "eating veggies instead of meat can reduce your carbon footprint, try veggies from local farmers instead of imported veggies",
    reward: 200,
  },
  {
    id: 3,
    title: "Use LED lights",
    content: "get rid of all the highly inefficient lights and substitute them with the more efficient led lights",
    reward: 50,
  },
];


const Score = () => {
  return (
    <Text
      style={{
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        fontSize: 24,
      }}
    >
      123{" "}
    </Text>
  );
};

const Icon = () => {
  return <Ionicons name={"flower-outline"} size={24} color={"tomato"} />;
};


const Carta = ({title, content, reward, buttonText}) => {
  return <Card style={styles.card}>
    <Text style={styles.title}> {title} </Text>
    <Text style={styles.paragraph}> {content} </Text>
    <Card.Actions>
    <Text style={styles.paragraph}> {reward} </Text>
      <Button>{buttonText}</Button>
    </Card.Actions>
  </Card>
}

const renderItem = ({ item }) => {
  return (
    <Carta title={item.title} content={item.content} reward={item.reward} buttonText={"complete"}/>
  );
};


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.score}> <Score /> <Icon /> </Text>

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
    justifyContent: 'flex-start',
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
    textAlign: "left",
    justifyContent: "space-evenly",
    padding: 10,
  },
});
