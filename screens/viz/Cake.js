import { Text, View, StyleSheet } from "react-native";
import {
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";

const chartConfig = {
  alignContent: "center",
  color: (opacity = 1) => `black`,
};

export default function Cake({ data }) {
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        height={150}
        width={300}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        center={[75, 0]}
        hasLegend={false}
        // absolute
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});
