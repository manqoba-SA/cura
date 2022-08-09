import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <Text>shopScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    flex: 1.0,
  },
});
