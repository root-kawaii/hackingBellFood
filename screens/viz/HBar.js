import { Text, View, StyleSheet } from "react-native";
import {
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";

const chartConfig = {
  color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export default function HBar({ data }) {
  return (
    <View style={styles.container}>
      <BarChart
        withVerticalLabels={false}
        withHorizontalLabels={false}
        data={data}
        height={200}
        width={200}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      ></BarChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "right",
    padding: 0,
  },
});
