import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

export default function SpaceshipDetailScreen({ route }) {
  const { itemData } = route.params;
  const [ship, setShip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/starships/${itemData.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setShip(data.result.properties);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch ship details:", err);
        setLoading(false);
      });
  }, [itemData]);

  if (loading) {
    return <ActivityIndicator style={{ flex: 1 }} color="#00ffcc" size="large" />;
  }

  if (!ship) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No starship data available.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{ship.name}</Text>
      <Text style={styles.label}>🚀 Model:</Text>
      <Text style={styles.value}>{ship.model}</Text>
      <Text style={styles.label}>🏭 Manufacturer:</Text>
      <Text style={styles.value}>{ship.manufacturer}</Text>
      <Text style={styles.label}>💰 Cost in Credits:</Text>
      <Text style={styles.value}>{ship.cost_in_credits}</Text>
      <Text style={styles.label}>📏 Length:</Text>
      <Text style={styles.value}>{ship.length}</Text>
      <Text style={styles.label}>💨 Max Speed:</Text>
      <Text style={styles.value}>{ship.max_atmosphering_speed}</Text>
      <Text style={styles.label}>🧑‍✈️ Crew:</Text>
      <Text style={styles.value}>{ship.crew}</Text>
      <Text style={styles.label}>🧍 Passengers:</Text>
      <Text style={styles.value}>{ship.passengers}</Text>
      <Text style={styles.label}>🛸 Class:</Text>
      <Text style={styles.value}>{ship.starship_class}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#000" },
  title: { fontSize: 26, fontWeight: "bold", color: "#FFD700", marginBottom: 20 },
  label: { fontWeight: "bold", fontSize: 16, color: "#aaa", marginTop: 15 },
  value: { color: "#fff", fontSize: 16 },
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  errorText: { color: "red", fontSize: 18 },
});

