import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import {
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

const data = [0.37, 0.42, 0.12, 0.32, 0.32];

export default function ProgressChartElement() {
  return (
    <View
      style={{
        paddingVertical: 100,

        backgroundColor: "#000",

        flex: 1,
      }}
    >
      <ProgressChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
      <View style={{ padding: 20, alignItems: "center" }}></View>
    </View>
  );
}
