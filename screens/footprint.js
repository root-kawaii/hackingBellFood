import { VictoryBar, VictoryLabel } from "victory-native";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
      <ScrollView>
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
            padding={{ top: 30, left: 12, right: 70, bottom: 60 }}
          />
        </View>
        <Text style={{ padding: 10 }}>
          The <Text style={{ fontWeight: "bold" }}>Ecological Footprint </Text>
          measures the impact of a person or community on the environment,
          expressed as the amount of land required to sustain their use of
          natural resources. It measures how fast we consume resources and
          generate waste compared to how fast nature can absorb our waste and
          generate new resources. {"\n\n"} Your highest factor towards your
          Ecological Footprint is the{" "}
          <Text style={{ fontWeight: "bold" }}>High Water Usage</Text>; to lower
          it, you could: {"\n"}- Check the WELS star rating label that indicates
          water efficiency for consumers. {"\n"}- Check regularly for leaks or
          dripping taps around your home. {"\n"}- It is also important to
          consider your water use outdoors, which can be responsible for an
          average of 40% of a household’s water use.
        </Text>
      </ScrollView>
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
