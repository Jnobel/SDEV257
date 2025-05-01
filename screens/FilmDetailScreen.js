import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function FilmDetailScreen({ route }) {
  const { itemData } = route.params;

  if (!itemData?.properties) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No film data available.</Text>
      </View>
    );
  }

  const film = itemData.properties;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{film.title}</Text>
      <Text style={styles.label}>🎬 Directed by:</Text>
      <Text style={styles.value}>{film.director}</Text>
      <Text style={styles.label}>💼 Produced by:</Text>
      <Text style={styles.value}>{film.producer}</Text>
      <Text style={styles.label}>📅 Release Date:</Text>
      <Text style={styles.value}>{film.release_date}</Text>
      <Text style={styles.label}>📝 Opening Crawl:</Text>
      <Text style={styles.value}>{film.opening_crawl}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#aaa",
    marginTop: 15,
  },
  value: {
    color: "#fff",
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});


