import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 20, // Ensures layout is below the status bar
    padding: 10,
    backgroundColor: "#fff",
  },
});