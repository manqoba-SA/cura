import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../../constants/COLORS";

export default function CustomBox({ title, subtitle, type = "full", onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.box, styles[`${type}_box`]]}
    >
      {type === "medium" ? (
        <View style={{ flex: 1.0, marginTop: 20 }}>
          <Text style={[styles.boxTitle, styles[`${type}_boxTitle`]]}>
            {title}
          </Text>
          <Text style={[styles.boxSubTitle, styles[`${type}_boxSubTitle`]]}>
            {subtitle}
          </Text>
        </View>
      ) : (
        <>
          <Image
            source={require("../../../cura/assets/images/illustrations/undraw_doctors_hwty.png")}
            style={[styles.boxImage, styles[`${type}_boxImage`]]}
          />
          {type === "full" ? (
            <View style={{ flex: 1.0 }}>
              <Text style={styles.boxTitle}>{title}</Text>
              <Text style={styles.boxSubTitle}>{subtitle}</Text>
            </View>
          ) : (
            <Text style={styles.boxTitle}>{title}</Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    height: height * 0.21,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  full_box: {
    flexDirection: "row",
    margin: 20,
  },
  half_box: {
    marginHorizontal: 20,
    width: "50%",
  },
  medium_box: {
    backgroundColor: COLORS.light.background,
    width: "80%",
    marginTop: 12,
  },
  boxImage: {
    resizeMode: "contain",
  },
  full_boxImage: {
    flex: 1.0,
    height: "70%",
  },
  half_boxImage: {
    height: "50%",
  },
  boxTitle: {
    color: COLORS.primary.text,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },
  boxSubTitle: {
    fontFamily: "Poppins_400Regular",
    color: "grey",
  },
});
