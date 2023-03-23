import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { colors } from "../constants/colors";

export default function ButtonGroup({ options, selected, setSelected }) {
  return (
    <SafeAreaView>
      <View style={styles.btnGroup}>
        {options.map((o, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.btn, selected === i ? styles.selectedBtn : null]}
            onPress={() => setSelected(i)}
          >
            <Text
              style={[
                // styles.btnText,
                selected === i ? styles.selectedText : null,
              ]}
            >
              {o.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 4,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderWidth: 2,
    borderColor: colors.green,
    borderRadius: 4,
  },
  btnText: {
    textAlign: "center",
    paddingVertical: 16,
    fontSize: 14,
  },
  selectedBtn: {
    backgroundColor: colors.green,
  },
  selectedText: {
    color: colors.light,
  },
});
