import { Text, View, StyleSheet } from "react-native";

import { VictoryPie, VictoryLabel } from "victory-native";

export default function Cake({ data }) {
  return (
    <View style={styles.item}>
      <VictoryPie
          width={150}
          height={150}
          data={[73,27]}
          colorScale={[
            "navy",
            "transparent"
          ]}
          radius={50}
          innerRadius={40}
          cornerRadius={10}
          labels={() => null}
          style={{
          }}
          labelComponent = {<VictoryLabel
          textAnchor="middle" verticalAnchor="middle"
          x={75} y={75}
          text={"73%"}
          style={{ fontSize: 30 }}
          />}

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
