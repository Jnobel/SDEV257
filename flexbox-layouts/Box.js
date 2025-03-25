import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Box({ children }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 80,
    height: 80,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});