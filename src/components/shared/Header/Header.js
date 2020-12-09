import React from "react";
import { Text, View, StyleSheet } from "react-native";

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export default function Header() {
  const date = new Date();
  const getDay = days[date.getDay()];
  // Yes, I know. It is not necessary but it's funny.
  const day = getDay
    .split("")
    .map((letter) => letter.toUpperCase())
    .join("");
  const titleDate = day + ", " + date.getDate() + " " + months[date.getMonth()];

  return (
    <View>
      <Text style={styles.title}>{titleDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
