import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Water({ data }) {
  return (
    <Text>
      {data}
      <Icon name="cow" size={150} color="#900" />
    </Text>
  );
}