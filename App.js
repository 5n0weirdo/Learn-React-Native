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
        style={{
          backgroundColor: "purple",
          flexGrow: 1, //flex:1
          flexShrink: -1, //flex:-1
          width: 400,
          height: 100,
        }}
      ></View>
      <View
        style={{ backgroundColor: "black", width: 100, height: 100 }}
      ></View>
      <View style={{ backgroundColor: "blue", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "green", width: 100, height: 100 }}
      ></View>
    </View>
  );
}
