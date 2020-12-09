import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Counter = ({ nb, title }) => {
  return (
    <View>
      <Text style={styles.nb}>{nb}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nb: {
    fontWeight: "bold",
  },
  title: {
    color: "grey",
  },
});
