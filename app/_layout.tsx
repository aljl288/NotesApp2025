import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Tabs Navigator inside Stack */}
      <Stack.Screen name="tabs" options={{ headerShown: false }} />

      {/* Individual Stack Screens (not inside tabs) */}
      <Stack.Screen name="profile/[id]" options={{ title: "Profile" }} />
    </Stack>
  );
}
