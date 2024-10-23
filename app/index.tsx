import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Pressable onPress={() => setCount(count + 1)}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}
