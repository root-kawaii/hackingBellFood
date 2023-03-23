
import { Text, View, FlatList } from "react-native";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { Card, Button } from "react-native-paper";
import { useState } from "react";

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
    content:
      "Try changing your food habits, eating veggies instead of meat will improve your carbon footprint",
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
    content:
      "avoid waste of precious resources and spend less by buying secondhand clothing",
    reward: 50,
  },
];

points = 130

const Score = () => {
  return (
    <Text
      style={{
        textAlign: "center",
        right: 0,
        left: 0,
        color: "black",
        fontWeight: "bold",
        fontSize: 50,
      }}
    >
      {points}
    </Text>
  );
};

const Icon = () => {
  return <Ionicons name={"flower-outline"} size={48} color={"tomato"} />;
};

const Carta = ({ title, content, reward, buttonText, todo, onPress }) => {
      return (
      <Card style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.paragraph}>{content}</Text>
        <Card.Actions>
          <Text style={styles.paragraph}>{reward}<Ionicons name={"flower-outline"} size={12} color={"tomato"} /></Text>
          <Button buttonColor="green" onPress={onPress}>{buttonText}</Button>
        </Card.Actions>
      </Card>
      );
};

  

export default function HomeScreen() {
  const [items, setItems] = useState(CHALLENGES);
  
  const renderItem = ({ item }) => {
    return (
      <Carta
        title={item.title}
        content={item.content}
        reward={item.reward}
        buttonText={"complete"}
        todo={item.todo}
        onPress={() => { setItems(items.filter(i=>i.id!==item.id));
                        points = points + item.reward}
        }
      />
    );
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.score}>
        <Score /> <Icon />
      </Text>

      <FlatList
        data={items}
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
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
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


/*
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const App = () => {
  const [elementVisible, setElementVisible] = useState(true);

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
            <Button
          title={elementVisible ? 'Hide Element' : 'Show Element'}
          onPress={() => setElementVisible(!elementVisible)}
        />
          </View>
        ) : null}
        
      </View>
    </SafeAreaView>
  );
};

export default App;
*/
