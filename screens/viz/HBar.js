import { Text, View, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function HBar({ data }) {
  return (
    <View style={styles.container}>
      <BarChart
        rulesLength={0.1}
        initialSpacing={10}
        barStyle="none"
        height={50}
        width={200}
        spacing={10}
        labelWidth={0}
        barWidth={10}
        noOfSections={1}
        barBorderRadius={10}
        frontColor="lightgray"
        data={data}
        yAxisThickness={0}
        xAxisThickness={0}
      />
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
