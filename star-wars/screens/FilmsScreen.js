import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FilmsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Star Wars Films</Text>
      <Text style={styles.item}>🎬 A New Hope (Episode IV)</Text>
      <Text style={styles.item}>🎬 The Empire Strikes Back (Episode V)</Text>
      <Text style={styles.item}>🎬 Return of the Jedi (Episode VI)</Text>
      <Text style={styles.item}>🎬 The Phantom Menace (Episode I)</Text>
      <Text style={styles.item}>🎬 Attack of the Clones (Episode II)</Text>
      <Text style={styles.item}>🎬 Revenge of the Sith (Episode III)</Text>
      <Text style={styles.item}>🎬 The Force Awakens (Episode VII)</Text>
      <Text style={styles.item}>🎬 The Last Jedi (Episode VIII)</Text>
      <Text style={styles.item}>🎬 The Rise of Skywalker (Episode IX)</Text>
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