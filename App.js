import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import MainInput from "./src/components/main-input/MainInput";
import ShoppingList from "./src/components/shopping-list/ShoppingList";

export default function App() {
  const [todos, setTodos] = useState([
    { key: 1, title: "item-1", isChecked: false },
    { key: 2, title: "item-2", isChecked: false },
  ]);

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

  return (
    <SafeAreaView style={styles.container}>
      <MainInput onCreateTodoPress={onCreateTodoPress} />
      <ShoppingList
        todos={todos}
        onDeleteTodoPress={onDeleteTodoPress}
        onCheckboxTodoPress={onCheckboxTodoPress}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
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
