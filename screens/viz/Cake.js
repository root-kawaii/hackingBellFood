import { Text, View, StyleSheet } from "react-native";

import { VictoryPie, VictoryLabel } from "victory-native";

export default function Cake({ data }) {
  return (
    <View style={styles.item}>
      <VictoryPie
        radius={70}
        // cornerRadius={({ datum }) => datum.y * 0.5}
        colorScale={["green", "yellow", "red", "grey"]}
        data={data}
        width={150}
        height={150}
        // labels={({ p }) => p.y}
        // center={[0, 0]}
        hasLegend={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 0,
  },
  item: {
    // padding: 20,
    // marginVertical: -60,
    // marginHorizontal: 0,
  },
});
