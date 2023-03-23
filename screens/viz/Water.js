import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Water({ data }) {
  return (
    <View style={styles.item}>
      <Icon name="cow" size={150} color="#900" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
  },
  item: {
    padding: 20,
    marginVertical: 0,
    marginHorizontal: 55,
  },
});
