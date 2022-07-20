import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  ImageBackground,
  FlatList,
} from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";
import { useSelector } from "react-redux";
import { DEPARTMENTS } from "../../utils/constants";
import ShoppingList from "../shopping-list/ShoppingList";

const getCurrentTitle = (type) => {
  switch (type) {
    case DEPARTMENTS.bread:
      return "хлеб/булка";
    case DEPARTMENTS.milk:
      return "молочка";
    case DEPARTMENTS.meat:
      return "мясо";
    case DEPARTMENTS.alcohol:
      return "бухлишко";
  }
};

export default function HardShoppingList({
  onDeleteTodoPress,
  onCheckboxTodoPress,
}) {
  const dataFromReducer = useSelector((state) => state.hardShoppingList);
  const listData = Object.keys(dataFromReducer.departments).map((item) => {
    return { key: item, title: getCurrentTitle(item) };
  });
  console.log(listData);
  const [todos, setTodos] = useState([
    { key: 1, title: "item-1", isChecked: false },
    { key: 2, title: "item-2", isChecked: false },
    { key: 3, title: "item-3", isChecked: false },
  ]);

  const renderItem = function (data) {
    return (
      <View style={styles.rowItemWrapper}>
        <Text style={styles.rowTitle}>{data.item.title}</Text>
        <TouchableHighlight
          onPress={() => console.log("You touched me")}
          style={styles.rowFront}
          underlayColor={"#AAA"}
        >
          <View style={styles.rowInnerListWrapper}>
            <ShoppingList
              todos={todos}
              onDeleteTodoPress={onDeleteTodoPress}
              onCheckboxTodoPress={onCheckboxTodoPress}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        style={styles.rowListWrapper}
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
    height: "100%",
  },
  rowListWrapper: {
    flexWrap: "wrap",
    marginBottom: 15,
  },
  rowItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    borderWidth: 1,
    marginBottom: 5,
  },
  rowTitle: {
    width: "100%",
  },
  rowInnerListWrapper: {
    flexDirection: "row",
    width: "100%",
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
    width: "100%",
    // height: 50,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  rowFrontInner: {
    width: "100%",
    // height: 50,
  },
  frontText: {
    borderWidth: 1,
    flexGrow: 1,
    color: "green",
  },
  rowBack: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    // height: 30,
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
