import { Text, View, StyleSheet } from "react-native";

export default function HBar({ data }) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "right",
    padding: 0,
  },
});
