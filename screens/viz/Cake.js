import { Text, View, StyleSheet } from "react-native";

import { VictoryPie, VictoryLabel } from "victory-native";

export default function Cake({ data }) {
  return (
    <View style={styles.item}>
      <VictoryPie
        radius={100}
        cornerRadius={({ datum }) => datum.y * 0.5}
        colorScale={["grey", "red", "yellow", "green"]}
        data={data}
        width={270}
        center={[0, 0]}
        hasLegend={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  item: {
    padding: 20,
    marginVertical: -60,
    marginHorizontal: 0,
  },
});
