import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

export default function MainInput({ onCreateTodoPress }) {
  const [text, onChangeText] = React.useState("");

  const onSubmitPress = () => {
    onChangeText("");
    onCreateTodoPress(text);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Введите название товара..."
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={onSubmitPress}>
        <Text style={styles.submitBtnTitle}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",

    paddingTop: 10,
    paddingBottom: 10,

    paddingLeft: 5,
    paddingRight: 5,
  },
  input: {
    flexGrow: 1,

    paddingLeft: 5,
    paddingRight: 5,

    borderWidth: 1,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "#000",
  },
  submitBtn: {
    justifyContent: "center",
    alignItems: "center",

    width: 30,
    height: 30,
    marginLeft: 5,

    backgroundColor: "yellowgreen",
  },
  submitBtnTitle: {
    color: "white",
  },
});
