import { Text, View } from "react-native";
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import Ionicons       from "react-native-vector-icons/Ionicons";
import React          from 'react';
import { Card, Button }       from 'react-native-paper';


const Score = () => {
  return <Text
  style={{
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  }}>
    123 </Text> ;
};


const Icon = () => {
  return <Ionicons name={"flower-outline"} size={24} color={"tomato"} />;
};


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text> <Score /> <Icon /> </Text>

      <Card>
        <Text style={styles.paragraph}>
          React Native Card View for Android and IOS using
          "react-native-paper"
        </Text>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});
