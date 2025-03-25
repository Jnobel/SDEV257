import React from "react";
import { View, StyleSheet } from "react-native";

export default function Column({ children }) {
  return <View style={styles.column}>{children}</View>;
}

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});