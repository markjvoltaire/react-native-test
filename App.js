import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Course Goal"
          style={{
            borderBottomColor: "black",
            borderWidth: 0.34,
            padding: 10,
            width: 200,
            borderRadius: 20,
          }}
        />
        <Button title="Add" />
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
