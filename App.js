// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image } from "react-native";

export default function App() {
  return (
    <View>
      <Image
        source={{
          with: "100%",
          height: "100%",
          uri: "https://photoshop-kopona.com/uploads/posts/2018-08/1535575878_1.jpg",
        }}
      />
    </View>
  );
}
