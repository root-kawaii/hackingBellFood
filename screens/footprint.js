import { VictoryBar, VictoryLabel } from "victory-native";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native";

export default function FootprintScreen() {
  const data = [
    { x: "Emissions", y: 42 },
    { x: "Water", y: 57 },
    { x: "Recycle", y: 52 },
    { x: "Ecosystem", y: 12 },
    { x: "Safety", y: 32 },
    { x: "Employee Condition", y: 38 },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.title}>Ecological Footprint</Text>
        <Text style={styles.title}>42 sqKm</Text>
      </View>
      <View style={styles.container}>
        <VictoryBar
          labels={({ datum }) => `${datum.x}`}
          labelComponent={<VictoryLabel dy={0} />}
          barWidth={40}
          horizontal
          height={475}
          style={{
            flex: 1,
            data: { fill: "#40916C" },
          }}
          data={data}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#ecf0f1",
    marginHorizontal: 0,
    marginVertical: 0,
  },
  title: {
    marginVertical: 30,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
