// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{ backgroundColor: "black", width: 100, height: 100 }}
      ></View>
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          position: "absolute",
          right: 20,
          top: 20,
        }}
      ></View>
      <View
        style={{ backgroundColor: "green", width: 100, height: 100 }}
      ></View>
    </View>
  );
}
