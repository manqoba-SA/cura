import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../../constants/COLORS";

export default function RemedyHerbItemCombonent({
  image,
  name,
  description,
  onPress,
}) {
  return (
    <>
      <View style={styles.remedyBox}>
        <Image source={image} style={styles.remedyImage} />
        <View style={styles.contentBox}>
          <Text style={[styles.headerText, styles.marginText]}>{name}</Text>
          <Text style={[styles.remedyDescription, styles.marginText]}>
            {description}
          </Text>
          <TouchableOpacity style={styles.boxBtn} onPress={onPress}>
            <Text style={styles.btnText}>Tell me more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: COLORS.primary.text,
    fontFamily: "Poppins_600SemiBold",
  },
  remedyBox: {
    marginVertical: 10,
    flexDirection: "row",
  },
  remedyImage: {
    borderRadius: 16,
    width: 144,
    height: 136,
  },
  contentBox: {
    backgroundColor: "#fff",
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 10,
    flexShrink: 1,
  },
  marginText: { marginLeft: 10, marginTop: 10 },
  remedyDescription: {
    fontFamily: "Poppins_400Regular",
    color: "#666666",
    flexShrink: 1,
  },
  boxBtn: {
    backgroundColor: COLORS.primary.text,
    padding: 3,
    borderRadius: 6,
    width: "45%",
    marginLeft: 10,
    marginTop: 5,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
});
