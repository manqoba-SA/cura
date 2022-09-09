import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButtons/CustomButton";

export default function SecondDiagnoseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textHeader}>New Diagnosis</Text>
        <View style={styles.centerWrap}>
          <Text style={styles.lighterText}>
            Okay Oratile. Who is the assessment for?
          </Text>
        </View>
      </View>
      <View style={styles.btnsWrapper}>
        <CustomButton
          text={"Myself"}
          onPress={() => navigation.navigate("ThirdDiagnosis")}
        />
        <CustomButton
          text={"Someone Else"}
          onPress={() => navigation.navigate("ThirdDiagnosis")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1.0 },
  wrapper: {
    flex: 1,
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
    flex: 1,
    right: 15,
    left: 15,
    position: "absolute",
    bottom: 15,
  },
  centerWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
