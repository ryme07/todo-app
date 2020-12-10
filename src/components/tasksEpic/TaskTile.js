import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../redux/actions";

export default function TaskTile({ id, title, completed }) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity onPress={() => dispatch(toggleTask(id))}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Image
            style={styles.icon}
            source={
              completed
                ? require("../../../assets/icon_check.png")
                : require("../../../assets/icon_circle.png")
            }
          />
          <Text
            style={[styles.title, { color: completed ? "lightgrey" : "black" }]}
          >
            {title}
          </Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(deleteTask(id))}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icon_bin.png")}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginLeft: 30,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
