import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  ImageBackground,
} from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";

export default function ShoppingList({
  todos,
  onDeleteTodoPress,
  onCheckboxTodoPress,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const checkbox = require("../../../assets/check-mark.png");

  const onDeletePress = (key) => {
    console.log("delete", key);
    onDeleteTodoPress(key);
  };

  const onRowDidOpen = (key) => {
    console.log("This row opened", key);
    // onDeleteTodoPress(key);
  };

  const onCheckboxPress = (key) => {
    onCheckboxTodoPress(key);
  };

  const renderItem = function (data) {
    console.log(data.item);
    return (
      <TouchableHighlight
        onPress={() => console.log("You touched me")}
        style={styles.rowFront}
        underlayColor={"#AAA"}
      >
        <View style={styles.rowFrontInner}>
          {data.item.isChecked && (
            <View style={styles.rowWrapper}>
              <ImageBackground
                style={styles.checkboxChecked}
                source={checkbox}
                resizeMode="contain"
              >
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.deleteBtn}
                  onPress={() => onCheckboxPress(data.item.key)}
                >
                  <Text style={styles.deleteBtnTitle}></Text>
                </TouchableHighlight>
              </ImageBackground>
              <Text>{data.item.title}</Text>
            </View>
          )}
          {!data.item.isChecked && (
            <View style={styles.rowWrapper}>
              <View style={styles.checkbox}>
                <TouchableHighlight
                  underlayColor="transparent"
                  style={styles.deleteBtn}
                  onPress={() => onCheckboxPress(data.item.key)}
                >
                  <Text style={styles.deleteBtnTitle}></Text>
                </TouchableHighlight>
              </View>
              <Text style={styles.frontText}>{data.item.title}</Text>
            </View>
          )}
        </View>
      </TouchableHighlight>
    );
  };
  console.log("JOPA");

  const renderHiddenItem = (data) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={styles.backRightBtnRight}
        onPress={() => onDeletePress(data.item.key)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={todos}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-100}
        stopLeftSwipe={0.1}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingLeft: 5,
    paddingRight: 5,
  },
  rowWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
  },
  backTextWhite: {
    color: "#000",
    borderWidth: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  rowFront: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCC",
    height: 30,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  rowFrontInner: {
    width: "100%",
    height: 30,
  },
  frontText: {
    borderWidth: 1,
    flexGrow: 1,
    color: "green",
  },
  rowBack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: 30,
    marginLeft: "auto",
  },

  backRightBtnRight: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,

    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",

    backgroundColor: "red",
  },
  checkbox: {
    width: 20,
    marginRight: 5,
    // backgroundColor: "blue",
    borderWidth: 1,
  },
  checkboxChecked: {
    width: 20,
    marginRight: 5,
    // backgroundColor: "blue",
    borderWidth: 1,
  },
});
