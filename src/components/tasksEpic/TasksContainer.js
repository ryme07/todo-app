import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { getTasks } from "../../redux/selectors";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
import CountersContainer from "./CountersContainer";
import FloatingButton from "../shared/FloatingButton/FloatingButton";

export default function TasksContainer() {
  const tasks = useSelector(getTasks);

  const [isOpenedForm, setIsOpenedForm] = useState(false);

  const getTasksCompleted = () => {
    let counter = 0;

    tasks.forEach((task) => {
      if (task.completed) {
        counter++;
      }
    });

    return counter;
  };

  const toggleForm = () => setIsOpenedForm(!isOpenedForm);

  return (
    <View style={styles.container}>
      {isOpenedForm && <TaskForm />}
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={() => getTasksCompleted()}
      />
      <TasksList tasks={tasks} />
      <FloatingButton toggleForm={toggleForm} isOpenedForm={isOpenedForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
