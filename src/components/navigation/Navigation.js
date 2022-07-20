import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useSelector } from "react-redux";
import { MODES } from "../../utils/constants";

export default function Navigation({ onChangeModePress }) {
  const onModePress = (mode) => {
    onChangeModePress(mode);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => onModePress(MODES.normal)}
      >
        <Text style={styles.submitBtnTitle}>обычный</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => onModePress(MODES.hard)}
      >
        <Text style={styles.submitBtnTitle}>по отделам</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    paddingTop: 10,
    paddingBottom: 0,

    paddingLeft: 5,
    paddingRight: 5,
  },
  submitBtn: {
    justifyContent: "center",
    alignItems: "center",

    width: "49%",
    height: 20,

    backgroundColor: "yellowgreen",
  },
  submitBtnTitle: {
    color: "white",
  },
});
