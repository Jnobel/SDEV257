import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  const deckCoords = {
    latitude: 21.7995,
    longitude: -72.1785,
  };

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            title="The Deck"
            description="Beachside restaurant at Grace Bay"
            coordinate={deckCoords}
          />
        </MapView>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      )}

      <View style={styles.info}>
        {errorMsg ? (
          <Text style={styles.error}>{errorMsg}</Text>
        ) : location ? (
          <>
            <Text style={styles.text}>Address: The Deck, Grace Bay Rd, TKCA 1ZZ</Text>
            <Text style={styles.text}>Latitude: {location.coords.latitude.toFixed(5)}</Text>
            <Text style={styles.text}>Longitude: {location.coords.longitude.toFixed(5)}</Text>
          </>
        ) : (
          <Text style={styles.text}>Fetching location...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  info: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  error: {
    color: "red",
    fontSize: 16,
  },
});
