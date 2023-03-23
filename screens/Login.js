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
import { colors } from "../constants/colors";
import ButtonGroup from "../components/ButtonGroup";

export default function Login({ navigation }) {
  const [selected, setSelected] = React.useState(-1);
  const [username, setUsername] = React.useState("");
  const options = [
    { value: "worker", label: "Worker" },
    { value: "manager", label: "Manager" },
    { value: "admin", label: "Admin" },
  ];
  const disabled = selected < 0 || username == "";
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>Welcome to the Sustainability Diary!</Text>
      <Text style={styles.subtitle}>What should we call you?</Text>
      <View style={styles.content}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="username"
            placeholderTextColor="#003f5c"
            onChangeText={(user) => setUsername(user)}
          />
        </View>
        <ButtonGroup
          options={options}
          selected={selected}
          setSelected={setSelected}
        />

        <TouchableOpacity
          style={[styles.fullBtn, disabled ? styles.disabled : null]}
          onPress={() => {
            if (disabled) return;
            storeData("user", username);
            navigation.navigate("Base");
            navigation.reset({
              index: 0,
              routes: [{ name: "Base" }],
            });
          }}
        >
          <Text style={styles.btnText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "distribute-evenly",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    fontSize: 40,
    marginTop: 80,
    alignItems: "center",
    marginBottom: 100,
  },
  subtitle: {
    fontSize: 27,
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: "#fff",
    borderColor: colors.green,
    borderBottomWidth: 3,
    width: 300,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  disabled: {
    opacity: 0.5,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  fullBtn: {
    width: 200,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: colors.green,
    fontSize: 50,
  },
  btnText: {
    color: colors.light,
    fontWeight: "bold",
  },
});

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};
