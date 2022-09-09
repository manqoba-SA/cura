import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButtons/CustomButton";

export default function ThirdDiagnoseScreen({ navigation }) {
  const image = require("../../assets/images/illustrations/symptoms.png");
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textHeader}>New Diagnosis</Text>
        <View style={styles.centerWrap}>
          <Image source={image} style={styles.imageStyle} key={image} />
          <Text style={styles.lighterText}>
            Let’s start with the symptom that’s troubling you the most
          </Text>
        </View>
      </View>
      <View style={styles.btnsWrapper}>
        <CustomButton
          text={"Type Symptoms"}
          onPress={() => navigation.navigate("AddSymptoms")}
        />
        <CustomButton
          text={"Voice Symptoms"}
          onPress={() => navigation.navigate("SecondDiagnosis")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1.0 },
  wrapper: {
    flex: 1.0,
    marginHorizontal: 15,
    marginTop: 15,
  },
  textHeader: { fontSize: 20, fontFamily: "Poppins_600SemiBold" },
  lighterText: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    color: "#666666",
  },
  btnsWrapper: {
    right: 15,
    left: 15,
    position: "absolute",
    bottom: 15,
  },
  centerWrap: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  imageStyle: {
    resizeMode: "contain",
    width: 300,
    height: 300,
  },
});
