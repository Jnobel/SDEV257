import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";

export default function FilmsScreen() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.result); // result, not results
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching films:", err);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Films 🎬</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007aff" />
      ) : (
        <FlatList
          data={films}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.properties.title}</Text>
              <Text style={styles.sub}>Directed by: {item.properties.director}</Text>
              <Text style={styles.sub}>Released: {item.properties.release_date}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#f4f4f4",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sub: {
    fontSize: 14,
    color: "#555",
  },
});