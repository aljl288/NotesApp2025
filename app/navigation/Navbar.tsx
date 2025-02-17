import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter, useSegments } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Navbar() {
  const router = useRouter();
  const segments = useSegments(); // Get current route segments

  // Map routes to titles
  const titleMap: { [key: string]: string } = {
    Home: "Home", // Home tab
    SummaryScreen: "Summary", // Summary tab
    SettingScreen: "Settings", // Settings screen
  };

  // Get the last segment (active route) and set title
  const activeSegment = segments[segments.length - 1] || "index";
  const title = titleMap[activeSegment] || "Home"; // Default to "Home"

  // Check if we should show the back button (not on Home)
  const showBackButton = activeSegment !== "HomeScreen";

  return (
    <View style={styles.navbar}>
      <View style={styles.titleContainer}>
        {/* Back Button (Only if not on Home Screen) */}
        {showBackButton ? (
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} /> // Placeholder for alignment
        )}

        {/* Dynamic Title */}
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Settings Icon (Hidden on SettingScreen) */}
      {!activeSegment.includes("SettingScreen") && (
        <TouchableOpacity onPress={() => router.push("/SettingScreen")}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    padding: 5,
  },
  placeholder: {
    width: 24, // Same width as the back button for alignment
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
