import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Timer = (props) => {
  const { tiempo } = props;

  const formatoTiempo = `${Math.floor(tiempo / 60)
    .toString()
    .padStart(2, "0")} : ${(tiempo % 60).toString().padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formatoTiempo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: "#F08B52B",
    height: 250,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  text: {
    fontSize: 60,
    fontWeight: "bold",
  },
});

export default Timer;
