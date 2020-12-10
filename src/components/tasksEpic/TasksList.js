import React from "react";
import { FlatList, Text } from "react-native";
import TaskTile from "./TaskTile";

const TasksList = ({ tasks }) => {
  const _renderItem = ({ item }) => (
    <TaskTile id={item.id} title={item.title} completed={item.completed} />
  );
  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TasksList;
