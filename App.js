import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // ✅ Required
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import PlanetsScreen from "./screens/PlanetsScreen";
import PlanetDetailScreen from "./screens/PlanetDetailScreen";
import FilmsScreen from "./screens/FilmsScreen";
import SpaceshipsScreen from "./screens/SpaceshipsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const PlanetsStack = createStackNavigator();

function PlanetsStackNavigator() {
  return (
    <PlanetsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <PlanetsStack.Screen
        name="PlanetsHome"
        component={PlanetsScreen}
        options={{ title: "Planets" }}
      />
      <PlanetsStack.Screen
        name="PlanetDetail"
        component={PlanetDetailScreen}
        options={{ title: "Planet Details" }}
      />
    </PlanetsStack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> {/* ✅ Enables swipe gestures */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Planets") iconName = "planet-outline";
              else if (route.name === "Films") iconName = "film-outline";
              else if (route.name === "Spaceships") iconName = "rocket-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#FFD700",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: { backgroundColor: "#000" },
          })}
        >
          <Tab.Screen name="Planets" component={PlanetsStackNavigator} />
          <Tab.Screen name="Films" component={FilmsScreen} />
          <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}