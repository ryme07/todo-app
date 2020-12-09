import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
import CountersContainer from "./CountersContainer";
import FloatingButton from "../shared/FloatingButton/FloatingButton";

export default function TasksContainer() {
  const [tasks, setTasks] = useState([]);

  const [isOpenedForm, setIsOpenedForm] = useState(false);

  // on Add Task
  const onAddTask = (title) => {
    const newTask = {
      id: new Date().getTime(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // on Change Status
  const onChangeStatus = (id) => {
    let newTasks = [];

    tasks.forEach((task) => {
      if (task.id === id) {
        newTasks.push({
          id: id,
          title: task.title,
          completed: !task.completed,
        });
      } else {
        newTasks.push(task);
      }
    });

    setTasks(newTasks);
  };

  //on Delete

  const onDelete = (id) => {
    let newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

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
      {isOpenedForm && <TaskForm onAddTask={onAddTask} />}
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={() => getTasksCompleted()}
      />
      <TasksList
        tasks={tasks}
        onChangeStatus={onChangeStatus}
        onDelete={onDelete}
      />
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
