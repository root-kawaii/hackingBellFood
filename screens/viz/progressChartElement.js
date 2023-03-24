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
  backgroundGradientFrom: "#95D5B2",
  backgroundGradientTo: "#95D5B2",
  color: (opacity = 1) => `rgba(8, 28, 21, ${opacity})`,
};

export default function ProgressChartElement({ data }) {
  var yo = [];
  yo.push(data[0] / data[1]);
  console.log(yo);
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
      }}
    >
      <ProgressChart
        radius={100}
        data={yo}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        hideLegend={true}
      />
      <View style={{ padding: 20, alignItems: "center" }}></View>
    </View>
  );
}
