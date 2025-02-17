import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navbar from "./navigation/Navbar";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            header: () => <Navbar />, // Custom Navbar with dynamic title
          }}
        >
          {/* Tabs Navigator inside Stack */}
          <Stack.Screen name="(tabs)" options={{ headerShown: true }} />

          {/* Individual Stack Screens (not inside tabs) */}
          <Stack.Screen name="SettingScreen" options={{ title: "Setting" }} />
        </Stack>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
