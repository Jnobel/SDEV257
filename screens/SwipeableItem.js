import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

function SwipeableItem({ name, uid }) {
  const navigation = useNavigation();  // ✅ use hook

  const renderRightActions = () => (
    <View style={styles.actionContainer}>
      <Text style={styles.actionText}>View Details</Text>
    </View>
  );

  const handleSwipeOpen = (direction) => {
    if (direction === 'right') {
      navigation.navigate("PlanetDetail", { uid }); // ✅ pass uid
    }
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableOpen={handleSwipeOpen}
      rightThreshold={40}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.itemContainer}
        onPress={() => navigation.navigate("PlanetDetail", { uid })}
      >
        <Text style={styles.itemText}>{name}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    backgroundColor: '#ffe81f',
    borderRadius: 5
  },
  itemText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500'
  },
  actionContainer: {
    flex: 1,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});

// ✅ wrap for gesture support
export default gestureHandlerRootHOC(SwipeableItem);


