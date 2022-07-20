import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
} from "react-native";

export default function Todo({ id, title, onDeleteTodoPress }) {
  const checkbox = require("../../../assets/check-mark.png");

  const onDeletePress = (id) => {
    onDeleteTodoPress(id);
  };

  return (
    <View style={styles.todoWrapper}>
      <View style={styles.deleteBtnWrapper}>
        <ImageBackground
          style={styles.checkbox}
          source={checkbox}
          resizeMode="contain"
        >
          <TouchableHighlight
            underlayColor="transparent"
            style={styles.deleteBtn}
            onPress={() => onDeletePress(id)}
          >
            <Text style={styles.deleteBtnTitle}></Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todoWrapper: {
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",

    marginBottom: 7,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
  },
  title: {
    color: "#000",
  },
  deleteBtnWrapper: {
    marginRight: 5,
    backgroundColor: "transparent",
  },
  deleteBtn: {
    justifyContent: "center",
    alignItems: "center",

    width: 20,
    height: 20,

    borderWidth: 1,
    backgroundColor: "white",
  },
  deleteBtnTitle: {
    color: "white",
  },
});
