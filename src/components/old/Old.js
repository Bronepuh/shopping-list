import React from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import Todo from "../todo/Todo";

export default function Old({ todos, onDeleteTodoPress }) {
  const renderItem = ({ item }) => (
    <Todo
      id={item.id}
      title={item.title}
      onDeleteTodoPress={onDeleteTodoPress}
    />
  );

  return (
    <ScrollView
      contentContainerStyle={styles.wrapper}
      horizontal={true}
      style={{ width: "100%" }}
    >
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

console.log("JOPA");

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  list: {
    padding: 5,
  },
});
