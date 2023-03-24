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
import Cow from "./viz/Cow";
import Water from "./viz/Water";
import Hbar from "./viz/HBar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SnowFlake from "react-native-vector-icons/FontAwesome";
import Sun from "react-native-vector-icons/FontAwesome5";
import Flower from "react-native-vector-icons/MaterialCommunityIcons";
import Leaf from "react-native-vector-icons/FontAwesome5";
import { colors } from "../constants/colors";

const DATA = [
  {
    id: 1,
    data: {
      title: "Water",
      Viz: Water,
      viz_data: [10, 50],
      description:
        "We aim to reduce water consumption in our operations by 10% in non-risk areas and by 50% per unit of goods sold in risk areas by 2026.",
      hidden:
        "To reach this goals it is necessary to optimize our entire wastewater management.",
    },
  },
  {
    id: 2,
    data: {
      title: "ESG Indicators",
      Viz: Cake,
      viz_data: [
        { x: 1, y: 50, label: "50" },
        { x: 2, y: 30, label: "30" },
        { x: 3, y: 20, label: "20" },
        { x: 4, y: 10, label: "10" },
      ],
      description:
        "An ESG score is an objective measurement or evaluation of a given company's performance with respect to Environmental, Social.",
      hidden:
        "ESG indicators are a key value to understand the efficacy of any company's environmental and social sustainability.",
    },
  },
  {
    id: 3,
    data: {
      title: "Seasonal Greenhouse Gas Emissions",
      Viz: Hbar,
      viz_data: [
        { x: "Winter", y: -7 },
        { x: "Spring", y: 10 },
        { x: "Summer", y: -5 },
        { x: "Autumn", y: 6 },
      ],
      description: "We commit to science-based climate targets and so we aim to reduce our absolute greenhouse gas emissions by 21% by 2026.",
      hidden: "We develop targets to reduce greenhouse gas emissions in our supply chain and promote corresponding measures and projects.",
    },
  },
  {
    id: 4,
    data: {
      title: "Animal Welfare",
      Viz: Cow,
      description:
        "The next step is to get an animal welfare certfication on 37% of our animal raw materials and products across the Bell Food Group and 60% in Bell Switzerland, all of this by 2026.",
      hidden:
        "By 2022 we already have implemented a company-wide animal welfare policy.",
    },
  },
];

const Item = ({ data, onPress, backgroundColor, textColor }) => {
  const [open, setOpen] = useState(false);
  const { title, Viz, viz_data, description, hidden } = data;
  return (
    <TouchableOpacity
      onPress={() => {
        setOpen(!open);
        onPress();
      }}
      style={[styles.item, { backgroundColor }]}
    >
      <View style={styles.row}>
        <View>
          <Viz data={viz_data} />
        </View>
        <View style={styles.col}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{ fontSize: 12, marginTop: 7 }}>{description}</Text>
        </View>
      </View>
      {open && (
        <View style={styles.bottom}>
          <Text>{hidden}</Text>
        </View>
      )}
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
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  col: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "flex-start",
    // borderWidth: 1,
  },
  bottom: {
    marginTop: 3,
  },
});
