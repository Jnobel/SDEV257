// PlanetsScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import SwipeableItem from "./SwipeableItem";
import LazyImage from "../LazyImage";

const banner = {
  uri: "https://lumiere-a.akamaihd.net/v1/images/sw_background_c9a891d6.jpeg",
};

export default function PlanetsScreen() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data.results); // ✅ Contains uid and name
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch planets:", error);
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

        {!isConnected && (
          <Text style={styles.offlineText}>
            ⚠️ You're currently offline. Please check your internet connection.
          </Text>
        )}

        <Text style={styles.title}>🌍 Planets of Star Wars</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#00ffcc" />
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {Array.isArray(planets) &&
              planets.map((planet, index) => (
                <SwipeableItem
                key={planet.uid}
                name={planet.name}
                uid={planet.uid}  // ✅ REQUIRED
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
  offlineText: {
    color: "#ffcc00",
    backgroundColor: "#330000",
    padding: 10,
    textAlign: "center",
    marginBottom: 10,
    borderRadius: 4,
    fontWeight: "bold",
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



