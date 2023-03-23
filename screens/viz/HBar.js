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
        padding={{ top: 10, bottom: 10, left: 20, right: 20 }}
        data={data}
        height={150}
        width={150}
        barWidth={35}
        labels={({ datum }) => datum.y}
        style={{ labels: { fill: "white" } }}
        labelComponent={
          <VictoryLabel dy={(opts) => (opts.datum.y > 0 ? 30 : -30)} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
