import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../constants/COLORS";
import * as Progress from "react-native-progress";

export default function CustomButton({
  onPress,
  text,
  type = "primary",
  bgColor,
  fgColor,
  disabled = false,
  loading = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
        !disabled ? {} : { backgroundColor: "#9FCEA4" },
      ]}
      disabled={disabled}
    >
      {loading ? (
        <View style={styles.loadingWrapper}>
          <Progress.Circle thickness={5} indeterminate={true} color={"#fff"} />
        </View>
      ) : (
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? { color: fgColor } : {},
          ]}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 6,
  },
  container_primary: {
    backgroundColor: COLORS.primary.text,
  },
  container_secondary: {
    backgroundColor: COLORS.light.background,
  },
  container_tertiary: {},
  text: {
    fontWeight: "bold",
  },
  text_primary: {
    color: COLORS.dark.text,
  },
  text_secondary: {
    color: COLORS.light.text,
  },
  text_tertiary: {
    color: COLORS.tertiary.text,
  },
  loadingWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});
