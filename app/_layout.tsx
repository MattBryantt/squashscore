import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
      name="index"
      options={{
        title: 'SquashScore',
        headerStyle: {
          backgroundColor: "#1f1f1f"
        },
        headerTintColor: "#f1f1f1"
      }} />
    </Stack>
  );
}
