import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

export default function TaskForm() {
  const [newTask, setnewTask] = useState("");

  const dispatch = useDispatch();

  // add new text into input
  const _onChangeText = (value) => setnewTask(value);

  // add a new task and verified the input is not empty
  const _onPressBtn = () => {
    const trimmedText = newTask.trim();
    if (trimmedText.length > 0 && trimmedText.length <= 28) {
      dispatch(addTask(newTask));
      setnewTask("");
    } else {
      console.log("error length");
      // créer un système d'erreur
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput value={newTask} onChangeText={_onChangeText} />
      </View>
      <Button onPress={_onPressBtn} title="Ajouter" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  containerInput: {
    borderWidth: 1,
    width: "75%",
    borderColor: "black",
    borderRadius: 4,
    paddingLeft: 8,
  },
});
