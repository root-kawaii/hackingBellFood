import { Text, View, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function HBar({ data }) {
  return (
    <View style={styles.container}>
      <PieChart
        showText
        textSize={10}
        showTextBackground
        showValuesAsLabels
        focusOnPress
        data={data}
        textBackgroundRadius={17}
        textBackgroundColor="black"
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
