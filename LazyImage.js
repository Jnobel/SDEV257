import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";

const placeholder = require("./assets/placeholder.png");
 // Add a local placeholder image

export default function LazyImage(props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={props.style}>
      {!loaded && <Image source={placeholder} style={props.style} />}
      <Image
        {...props}
        style={[props.style, loaded ? styles.visible : styles.hidden]}
        onLoad={() => setLoaded(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hidden: {
    position: "absolute",
    opacity: 0,
  },
  visible: {
    position: "absolute",
    opacity: 1,
  },
});
