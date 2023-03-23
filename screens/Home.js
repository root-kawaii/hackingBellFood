import { Text, View, FlatList } from "react-native";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { Card, Button, IconButton } from "react-native-paper";
import { useState } from 'react';

const App = () => {
  const [elementVisible, setElementVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {elementVisible ? (
          <View
            style={{
              backgroundColor: 'blue',
              paddingHorizontal: 16,
              paddingVertical: 8,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Hello world!</Text>
          </View>
        ) : null}
        <Button
          title={elementVisible ? 'Hide Element' : 'Show Element'}
          onPress={() => setElementVisible(!elementVisible)}
        />
      </View>
    </SafeAreaView>
  );
};

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
    content: "Try changing your food habits, eating veggies instead of meat will improve your carbon footprint",
    reward: 100,
    
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
    content: "avoid waste of precious resources and spend less by buying secondhand clothing",
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
        <Button>{buttonText}</Button>
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
      buttonText={"complete"}
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
          onPress={() => navigation.navigate("Footprint")}
        />
      </View>
      
      <App  />
      <Text style={styles.score}>
        aaaaaaaaaaaaaa
      </Text>


      <Text style={styles.score}>
        {" "} <Score /> <Icon />{" "}
      </Text>

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
