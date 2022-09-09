import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import COLORS from "../../../../constants/COLORS";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function RemedyDetailScreen() {
  const teaImage = require("../../../../../cura/assets/images/honeyTea.jpg");
  return (
    <View style={styles.container}>
      <Image source={teaImage} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.headerText}>Try Honey Tea</Text>
        <Text style={styles.lighterText}>
          Researchers in one 2007 studyTrusted Source found evidence to suggest
          that buckwheat honey may be more effective than traditional medication
          at relieving cough
        </Text>

        <Text style={styles.headerText}>Get to know more</Text>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { backgroundColor: "#E5E5E5", flex: 1.0 },
  image: {
    width,
    height: (height * 40) / 100,
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 15,
  },
  headerText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },
  lighterText: {
    color: "#666666",
    fontFamily: "Poppins_400Regular",
  },
});
