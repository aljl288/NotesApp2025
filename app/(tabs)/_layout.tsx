import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Icons for tabs

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index" //file name without extension
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Summary Tab */}
      <Tabs.Screen
        name="SummaryScreen"
        options={{
          title: "Summary",
          tabBarLabel: "Summary",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
