import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PlanetsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Star Wars Planets</Text>
      <Text style={styles.item}>🌍 Tatooine – Desert planet, home of Anakin & Luke Skywalker</Text>
      <Text style={styles.item}>🌑 Hoth – Icy world, Rebel base in *Empire Strikes Back*</Text>
      <Text style={styles.item}>🌿 Endor – Forest moon with Ewoks</Text>
      <Text style={styles.item}>🌆 Coruscant – City-covered galactic capital</Text>
      <Text style={styles.item}>🌊 Kamino – Ocean world, cloning facility</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginVertical: 6,
  },
});