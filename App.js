// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Image
        source={{
          with: "100%",
          height: "75%",
          uri: "https://photoshop-kopona.com/uploads/posts/2018-08/1535575878_1.jpg",
        }}
      />
      <View style={{ backgroundColor: "black", flex: 1 }}></View>
      <View style={{ backgroundColor: "blue", flex: 1 }}></View>
    </View>
  );
}
