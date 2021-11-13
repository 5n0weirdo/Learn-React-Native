// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ backgroundColor: "purple", flex: 2 }}></View>
      <View style={{ backgroundColor: "black", flex: 1 }}></View>
      <View style={{ backgroundColor: "blue", flex: 1 }}></View>
    </View>
  );
}
