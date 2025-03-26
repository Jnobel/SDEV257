import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SpaceshipsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Star Wars Spaceships</Text>
      <Text style={styles.item}>🚀 Millennium Falcon – Fastest hunk of junk in the galaxy</Text>
      <Text style={styles.item}>🛸 X-Wing – Rebel starfighter</Text>
      <Text style={styles.item}>🛩️ TIE Fighter – Iconic Imperial ship</Text>
      <Text style={styles.item}>🛸 Slave I – Boba Fett’s unique ship</Text>
      <Text style={styles.item}>🚀 Star Destroyer – Imperial battleship</Text>
      <Text style={styles.item}>🚀 Death Star – Massive space station with a planet-killer laser</Text>
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