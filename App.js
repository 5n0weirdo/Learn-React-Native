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
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "purple",
          width: 100,
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
      <View style={{ backgroundColor: "grey", width: 100, height: 100 }}></View>
    </View>
  );
}
