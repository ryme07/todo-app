import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function FloatingButton({ toggleForm, isOpenedForm }) {
  return (
    <TouchableOpacity onPress={toggleForm} style={styles.container}>
      {isOpenedForm ? (
        <Text style={styles.close}>x</Text>
      ) : (
        <Text style={styles.plus}>+</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 25,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#841584",
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    fontSize: 45,
    fontWeight: "500",
    color: "white",
    marginBottom: 5,
  },
  close: {
    fontSize: 45,
    fontWeight: "500",
    color: "white",
    marginBottom: 10,
  },
});
