import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";

export default function SpaceshipsScreen() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/starships")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data.results); // Array of planet objects
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Spaceships:", err);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Spaceships 🛸</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007aff" />
      ) : (
        <FlatList
          data={planets}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
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
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
