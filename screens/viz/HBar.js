import { Text, View, StyleSheet } from "react-native";
import {
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";
import { VictoryBar, VictoryLabel } from "victory-native";

export default function HBar({ data }) {
  return (
    <View style={styles.container}>
      <VictoryBar
        data={data}
        height={200}
        width={300}
        labels={({ datum }) => datum.y}
        style={{ labels: { fill: "white" } }}
        labelComponent={<VictoryLabel dy={30} />}
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
