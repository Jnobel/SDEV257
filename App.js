import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlanetsScreen from "./screens/PlanetsScreen";
import FilmsScreen from "./screens/FilmsScreen";
import SpaceshipsScreen from "./screens/SpaceshipsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Planets") {
              iconName = "planet-outline";
            } else if (route.name === "Films") {
              iconName = "film-outline";
            } else if (route.name === "Spaceships") {
              iconName = "rocket-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FFD700",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "#000" },
        })}
      >
        <Tab.Screen name="Planets" component={PlanetsScreen} />
        <Tab.Screen name="Films" component={FilmsScreen} />
        <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

