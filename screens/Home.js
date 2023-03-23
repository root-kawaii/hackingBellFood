import { Text, View, FlatList } from "react-native";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { Card, Button, IconButton  } from "react-native-paper";

const CHALLENGES = [
  {
    id: 1,
    title: "Line-dry clothes",
    content: "let the clothes dry naturally, save energy",
    reward: 100,
    buttonText: "complete",
  },
  {
    id: 2,
    title: "2",
    content: "let the clothes dry naturally, save energy",
    reward: 100,
    buttonText: "complete",
  },
  {
    id: 3,
    title: "Use LED lights",
    content:
      "get rid of all the highly inefficient lights and substitute them with highly efficient led lights and reduce carbon emissions",
    reward: 50,
  },
  {
    id: 4,
    title: "Secondhand clothing",
    content:
      "avoid waste of precious resources and spend less by buying secondhand clothing",
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

const Stack = createNativeStackNavigator();

const Icon = () => {
  return <Ionicons name={"flower-outline"} size={24} color={"tomato"} />;
};

const Carta = ({ title, content, reward, buttonText }) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.paragraph}> {content} </Text>
      <Card.Actions>
        <Text style={styles.paragraph}> {reward} </Text>
        <Button>{content}</Button>
      </Card.Actions>
    </Card>
  );
};

const renderItem = ({ item }) => {
  return (
    <Carta
      title={item.title}
      content={item.content}
      reward={item.reward}
      buttonText={item.buttonText}
    />
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <IconButton
          icon="foot-print"
          iconColor={"blue"}
          size={20}
          onPress={() => navigation.navigate('Footprint')}
        />
      </View>
      <Text>
        <Score /> <Icon />
      </Text>

      <Carta
        title={"Challenge"}
        content={
          "testo react Native Card View for Android and IOS using react-native-paper"
        }
        reward={10}
        buttonText={"complete"}
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
    justifyContent: "left",
    margin: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    position: 'absolute',
    top: 10,
    right: 0,
    left: 0,
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
