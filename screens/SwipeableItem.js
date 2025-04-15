import React, { useState } from "react";
import { View, ScrollView, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";

export default function SwipeableItem({ name }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.x > 150) {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.swipeContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        onScroll={handleScroll}
      >
        <TouchableOpacity>
          <View style={styles.swipeItem}>
            <Text style={styles.swipeItemText}>{name}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.swipeBlank} />
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalInner}>
            <Text style={styles.modalText}>{name}</Text>
            <Text style={styles.modalButton} onPress={() => setModalVisible(false)}>
              Close
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  swipeContainer: {
    width: 200,
    height: 40,
    marginVertical: 10,
  },
  swipeItem: {
    width: 200,
    height: 40,
    backgroundColor: "lightyellow",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "goldenrod",
  },
  swipeItemText: {
    color: "black",
    fontWeight: "bold",
  },
  swipeBlank: {
    width: 200,
    height: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalInner: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 6,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalButton: {
    color: "blue",
    fontWeight: "bold",
  },
});
