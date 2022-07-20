import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import MainInput from "./src/components/main-input/MainInput";
import ShoppingList from "./src/components/shopping-list/ShoppingList";
import { RootReducer } from "./src/components/redux/reducers/index";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";
import Navigation from "./src/components/navigation/Navigation";
import { MODES } from "./src/utils/constants";
import HardShoppingList from "./src/components/hard-shopping-list/HardShoppingList";

const store = configureStore(
  { reducer: RootReducer },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  const [todos, setTodos] = useState([
    { key: 1, title: "item-1", isChecked: false },
    { key: 2, title: "item-2", isChecked: false },
  ]);
  const [mode, setMode] = useState(MODES.normal);

  const onCreateTodoPress = (text) => {
    setTodos((prev) => [
      { key: Date.now().toString(), title: text, isChecked: false },
      ...prev,
    ]);
  };

  const onDeleteTodoPress = (key) => {
    setTodos((prev) => prev.filter((item) => item.key !== key));
  };

  const onCheckboxTodoPress = (key) => {
    setTodos((prev) => {
      const newArray = [];
      prev.forEach((item) => {
        if (item.key === key) {
          item.isChecked = !item.isChecked;
        }
        newArray.push(item);
      });
      return newArray;
    });
  };

  const onChangeModePress = (mode) => {
    console.log(mode);
    setMode(mode);
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigation onChangeModePress={onChangeModePress} />
        <MainInput onCreateTodoPress={onCreateTodoPress} />
        {mode === MODES.normal && (
          <ShoppingList
            todos={todos}
            onDeleteTodoPress={onDeleteTodoPress}
            onCheckboxTodoPress={onCheckboxTodoPress}
          />
        )}
        {mode === MODES.hard && (
          <HardShoppingList
            onDeleteTodoPress={onDeleteTodoPress}
            onCheckboxTodoPress={onCheckboxTodoPress}
          />
        )}
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 35,
    overflow: "scroll",
  },
});
