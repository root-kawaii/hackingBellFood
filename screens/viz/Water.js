import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { VictoryPie, VictoryLabel } from "victory-native";

export default function Water({ data }) {
  return (
    <View style={styles.item}>
      <View style={styles.row}>
      <Icon name="water-pump" size={30} ></Icon>
      </View>
      
      <View style={styles.row}>
      <VictoryPie
          width={70}
          height={150}
          data={[60,40]}
          colorScale={[
            "navy",
            "transparent"
          ]}
          radius={35}
          innerRadius={30}
          cornerRadius={6}
          labels={() => null}
          style={{
          }}
          labelComponent = {<VictoryLabel
          textAnchor="middle" verticalAnchor="middle"
          x={35} y={75}
          text={"10"}
          style={{ fontSize: 30 }}
          />}

        />
        <VictoryPie
          width={70}
          height={150}
          data={[40,60]}
          colorScale={[
            "navy",
            "transparent"
          ]}
          radius={35}
          innerRadius={30}
          cornerRadius={6}
          labels={() => null}
          style={{
          }}
          labelComponent = {<VictoryLabel
          textAnchor="middle" verticalAnchor="middle"
          x={35} y={75}
          text={"50"}
          style={{ fontSize: 30 }}
          />}

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  item: {
    padding: 0,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  row: {
    top: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  col: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    // borderWidth: 1,
  },
});
