// PlanetDetailScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from "react-native";

export default function PlanetDetailScreen({ route }) {
  const { uid } = route.params;
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        setPlanet(data.result.properties);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching planet:", err);
        setLoading(false);
      });
  }, [uid]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00ffcc" />
      </View>
    );
  }

  if (!planet) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Unable to load planet data.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{planet.name}</Text>
      <Text style={styles.item}>🌍 Climate: {planet.climate}</Text>
      <Text style={styles.item}>🌡️ Diameter: {planet.diameter} km</Text>
      <Text style={styles.item}>🌎 Gravity: {planet.gravity}</Text>
      <Text style={styles.item}>👥 Population: {planet.population}</Text>
      <Text style={styles.item}>🌄 Terrain: {planet.terrain}</Text>
      <Text style={styles.item}>☁️ Surface Water: {planet.surface_water}%</Text>
      <Text style={styles.item}>🕰️ Rotation Period: {planet.rotation_period} hours</Text>
      <Text style={styles.item}>📅 Orbital Period: {planet.orbital_period} days</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#000",
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffe81f",
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  errorText: {
    color: "#ff4444",
    fontSize: 16,
  },
});


