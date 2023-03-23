import { StatusBar } from "expo-status-bar";
import IconsLogin from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "Worker" },
    { key: "2", value: "Manager" },
    { key: "3", value: "Admin" },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => {
            storeData("email", email);
          }}
        />
      </View>
      <SelectList
        placeholderTextColor={"#000"}
        width={300}
        maxHeight={120}
        arrowicon={<IconsLogin name="chevron-down" size={20} color={"black"} />}
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
      />

      <TouchableOpacity style={styles.loginBtn}>
        <Button title="navigate" onPress={() => navigation.navigate("Base")}>
          LOGIN
        </Button>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor: "#000",
    borderWidth: 3,
    width: 300,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    borderWidth: 3,
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fff",
  },
});

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};
