import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import COLORS from "../../constants/COLORS";

export default function CustomBox({
  title,
  subtitle,
  type = "full",
  onPress,
  image,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.box, styles[`${type}_box`]]}
      // pressRetentionOffset={200}
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
            source={image}
            style={[styles.boxImage, styles[`${type}_boxImage`]]}
            key={image}
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
    width: "100%",
    marginTop: 12,
  },
  swiper_box: {
    width: "100%",
  },
  boxImage: {
    resizeMode: "contain",
  },
  full_boxImage: {
    flex: 1.0,
    height: "70%",
  },
  half_boxImage: {
    width: "50%",
    height: "50%",
    resizeMode: "cover",
    margin: 0,
  },
  boxTitle: {
    color: COLORS.primary.text,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },
  medium_boxTitle: {
    marginHorizontal: 10,
  },
  medium_boxSubTitle: {
    marginHorizontal: 10,
  },
  boxSubTitle: {
    fontFamily: "Poppins_400Regular",
    color: "grey",
  },
});
