import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import React from "react";
import COLORS from "../../constants/COLORS";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Progress.Circle
        thickness={5}
        indeterminate={true}
        color={COLORS.primary.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
