import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../../../../constants/COLORS";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";

export default function HomeRemediesScreen({ navigation }) {
  const teaImage = require("../../../../../cura/assets/images/honeyTea.jpg");
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>
          Home Remedies that will help in flue sicknesses
        </Text>
        <View style={styles.remedyBox}>
          <Image source={teaImage} style={styles.remedyImage} />
          <View style={styles.contentBox}>
            <Text style={[styles.headerText, styles.marginText]}>
              Honey Tea
            </Text>
            <Text style={[styles.remedyDescription, styles.marginText]}>
              According to some research, honey may relieve coughs
            </Text>
            <TouchableOpacity
              style={styles.boxBtn}
              onPress={() => navigation.navigate("RemedyDetailScreen")}
            >
              <Text style={styles.btnText}>Tell me more</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#E5E5E5", flex: 1.0 },
  headerText: {
    color: COLORS.primary.text,
    fontFamily: "Poppins_600SemiBold",
  },
  wrapper: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  remedyBox: {
    marginVertical: 10,
    flexDirection: "row",
  },
  remedyImage: {
    // resizeMode: "contain",
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
    // alignItems: "center",
    marginLeft: 10,
    marginTop: 5,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
});
