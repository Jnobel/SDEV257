import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

// Screens
import PlanetsScreen from "./screens/PlanetsScreen";
import PlanetDetailScreen from "./screens/PlanetDetailScreen";
import FilmsScreen from "./screens/FilmsScreen";
import FilmDetailScreen from "./screens/FilmDetailScreen";
import SpaceshipsScreen from "./screens/SpaceshipsScreen";
import SpaceshipDetailScreen from "./screens/SpaceshipDetailScreen";

const Tab = createBottomTabNavigator();
const PlanetsStack = createStackNavigator();
const FilmsStack = createStackNavigator();
const SpaceshipsStack = createStackNavigator();

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

function FilmsStackNavigator() {
  return (
    <FilmsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <FilmsStack.Screen
        name="FilmsHome"
        component={FilmsScreen}
        options={{ title: "Films" }}
      />
      <FilmsStack.Screen
        name="FilmDetail"
        component={FilmDetailScreen}
        options={{ title: "Film Details" }}
      />
    </FilmsStack.Navigator>
  );
}

function SpaceshipsStackNavigator() {
  return (
    <SpaceshipsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <SpaceshipsStack.Screen
        name="SpaceshipsHome"
        component={SpaceshipsScreen}
        options={{ title: "Starships" }}
      />
      <SpaceshipsStack.Screen
        name="SpaceshipDetail"
        component={SpaceshipDetailScreen}
        options={{ title: "Starship Details" }}
      />
    </SpaceshipsStack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          <Tab.Screen name="Films" component={FilmsStackNavigator} />
          <Tab.Screen name="Spaceships" component={SpaceshipsStackNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
