import { VictoryPie } from "victory-native";
import { StyleSheet, View } from "react-native";
import Leaf from "react-native-vector-icons/FontAwesome5";

export default function FootprintScreen() {
  const data = [
    { x: "Cats", y: 24 },
    { x: "Dogs", y: 32 },
    { x: "Birds", y: 45 },
    { x: "Cats", y: 24 },
    { x: "Dogs", y: 31 },
    { x: "Birds", y: 55 },
    { x: "Dogs", y: 43 },
    { x: "Birds", y: 40 },
  ];

  return (
    <View style={styles.container}>
      <VictoryPie
        data={data}
        colorScale={[
          "green",
          "red",
          "purple",
          "cyan",
          "navy",
          "blue",
          "orange",
          "brown",
        ]}
        cornerRadius={({ datum }) => datum.y * 0.1}
        labelRadius={({ innerRadius }) => innerRadius + 5}
        radius={({ datum }) => 50 + datum.y * 2}
        innerRadius={50}
        style={{
          labels: { fill: "white", fontSize: 15, fontWeight: "bold" },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ecf0f1",
  },
});
