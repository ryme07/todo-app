import React from "react";
import { View, StyleSheet } from "react-native";
import Counter from "../shared/Counter/Counter";

export default CountersContainer = ({ nbTasks, nbTasksCompleted }) => {
  return (
    <View style={styles.container}>
      <Counter nb={nbTasks} title={"Tasks created"} />
      <Counter nb={nbTasksCompleted()} title={"Tasks completed"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
});
