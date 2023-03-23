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
        {
          value: 250,
          label: <SnowFlake name="snowflake-o" size={18} color="#900" />,
        },

        {
          value: 500,
          label: <Flower name="flower" size={18} color="#900" />,
          frontColor: "#177AD5",
        },

        {
          value: 745,
          label: <Sun name="sun" size={18} color="#900" />,
          frontColor: "#177AD5",
        },

        {
          value: 320,
          label: <Leaf name="leaf" size={18} color="#900" />,
        },
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
          value: 250,
          color: "green",
        },
        {
          value: 500,
          color: "red",
        },
        {
          value: 150,
          color: "grey",
        },
        {
          value: 320,
          color: "yellow",
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
        <Text>{title}</Text>
        <Viz data={viz_data} />
      </View>
      {/* <Text style={[styles.title, { color: textColor }]}>{data.title}</Text> */}
    </TouchableOpacity>
  );
};

export default function KPIScreen() {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
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
    fontSize: 32,
  },
});
