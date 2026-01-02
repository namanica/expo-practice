import { Stack } from "expo-router";

export const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      <Stack.Screen name="(stack)/ram-cards" options={{ headerShown: false }} />
    </Stack>
  );
};
