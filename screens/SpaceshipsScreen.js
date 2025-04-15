import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import SwipeableItem from "./SwipeableItem";
import LazyImage from "../LazyImage";

const banner = {
  uri: "https://lumiere-a.akamaihd.net/v1/images/sw_background_c9a891d6.jpeg",
};

export default function SpaceshipsScreen() {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/starships")
      .then((res) => res.json())
      .then((data) => {
        setShips(data.results); // ✅ correct key from API
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch starships:", error);
        setLoading(false);
      });
  }, []);

  return (
    <ImageBackground
      source={require("../assets/eagle5.gif")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <LazyImage style={styles.banner} source={banner} resizeMode="cover" />
        <Text style={styles.title}>🚀 Starships</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#ffcc00" />
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {Array.isArray(ships) &&
              ships.map((ship, index) => (
                <SwipeableItem
                  key={ship.uid}
                  name={ship.name}
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
  background: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
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
    backgroundColor: "transparent",
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
});

