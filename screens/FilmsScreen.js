import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, ImageBackground } from "react-native";
import SwipeableItem from "./SwipeableItem";
import LazyImage from "../LazyImage";

const banner = {
  uri: "https://lumiere-a.akamaihd.net/v1/images/sw_background_c9a891d6.jpeg"
};

export default function FilmsScreen() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.result);
        setLoading(false);
      });
  }, []);

  return (
    <ImageBackground
  source={require("../assets/eagle5.gif")}  // ✅ Corrected here
  style={styles.background}
  resizeMode="cover"
>
      <View style={styles.container}>
        <LazyImage style={styles.banner} source={banner} resizeMode="cover" />
        <Text style={styles.title}>🎬 Star Wars Films</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#00ffcc" />
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {films.map((film, index) => (
              <SwipeableItem
                key={film.uid}
                name={film.properties.title}
                index={index}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 6,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "transparent", // keep it transparent so the GIF shows through
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollContainer: {
    paddingBottom: 30,
    alignItems: "center",
  },
  background: {
    flex: 1,
  },
});
