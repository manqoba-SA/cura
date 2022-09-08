import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButtons/CustomButton";

export default function AssessmentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textHeader}>Assessment</Text>
        <View style={styles.questionsWrap}></View>
      </View>
      <View style={styles.btnsWrapper}>
        <CustomButton
          text={"Finish"}
          onPress={() => navigation.navigate("NoticeScreen")}
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
  questionsWrap: {
    justifyContent: "center",
  },
  btnsWrapper: {
    flex: 1,
    right: 15,
    left: 15,
    position: "absolute",
    bottom: 15,
  },
});
