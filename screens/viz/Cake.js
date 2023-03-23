import { Text, View, StyleSheet } from "react-native";

import { VictoryPie, VictoryLabel } from "victory-native";

export default function Cake({ data }) {
  return (
    <View style={styles.item}>
      <VictoryPie
        radius={60}
        labelRadius={55}
        // cornerRadius={({ datum }) => datum.y * 0.5}
        colorScale={["#2a800b", "#ffad58", "#db0700", "#9c9c9c"]}
        data={data}
        width={143}
        height={140}
        labels={({ p }) => p.y}
        labelComponent={
          <VictoryLabel
            backgroundStyle={{
              fill: "white",
              rx: 2,
              stroke: "black",
              strokeWidth: "1",
            }}
            backgroundPadding={3}
          />
        }
        // center={[0, 0]}
        hasLegend={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  item: {},
});
