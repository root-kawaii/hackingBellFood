import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Cake from "./viz/Cake";
import Water from "./viz/Water";
import Hbar from "./viz/HBar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SnowFlake from "react-native-vector-icons/FontAwesome";
import Sun from "react-native-vector-icons/FontAwesome5";
import Flower from "react-native-vector-icons/MaterialCommunityIcons";
import Leaf from "react-native-vector-icons/FontAwesome5";
import col from "../constants/colors";

const DATA = [
  {
    id: 1,
    data: { title: "Water", Viz: Water, viz_data: 65 },
  },
  {
    id: 2,
    data: {
      title: "Greenhouse",
      Viz: Hbar,
      viz_data: [
        { x: "Winter", y: 24 },
        { x: "Spring", y: 32 },
        { x: "Summer", y: 45 },
        { x: "Autumn", y: 24 },
      ],
    },
  },
  {
    id: 3,
    data: {
      title: "Cake",
      Viz: Cake,
      viz_data: [
        {
          name: "Seoul",
          population: 128,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        },
        {
          name: "Toronto",
          population: 256,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        },
        {
          name: "Beijing",
          population: 89,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        },
        {
          name: "New York",
          population: 74,
          color: "#123455",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        },
        {
          name: "Moscow",
          population: 276,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        },
      ],
    },
  },
];

const Item = ({ data, onPress, backgroundColor, textColor }) => {
  const [open, setOpen] = useState(false);
  const { title, Viz, viz_data } = data;
  return (
    <TouchableOpacity
      onPress={() => {
        setOpen(!open);
        onPress();
      }}
      style={[styles.item, { backgroundColor }]}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
        <Viz data={viz_data} />
      </View>
      {/* <Text style={[styles.title, { color: textColor }]}>{data.title}</Text> */}
    </TouchableOpacity>
  );
};

export default function KPIScreen() {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fff" : "#fff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        data={item.data}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
});
