import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButtons/CustomButton";

export default function AssessmentScreen({ navigation, route }) {
  const { selectedSymptoms } = route.params;
  console.log(selectedSymptoms);
  // const covidSymptoms = [
  //   { id: 1, title: "Fever" },
  //   { id: 2, title: "Cough" },
  //   { id: 3, title: "Sore Throat" },
  //   { id: 4, title: "Shortness of Breath" },
  //   { id: 5, title: "Headache" },
  //   { id: 6, title: "Muscle Pain" },
  //   { id: 7, title: "Loss of Taste or Smell" },
  //   { id: 8, title: "Chills" },
  //   { id: 9, title: "Nausea or Vomiting" },
  //   { id: 10, title: "Diarrhea" },
  // ];

  const coughDiagnosisQuestions = [
    {
      id: 1,
      title: "Do you have a dry cough?",
      options: ["Yes", "No"],
    },
    {
      id: 2,
      title: "How would others describe your cough?",
      options: [
        "Dry cough, without phlegm or mucus",
        "Wet cough, with phlegm or mucus",
        "Both a wet cough",
      ],
    },
  ];

  const covidDiagnosticQuestions = [
    {
      id: 1,
      title: "Have you lost your sense of taste or smell?",
      options: ["Yes", "No"],
    },
    {
      id: 2,
      title: "Do you have shortness of breath?",
      options: ["Yes", "No"],
    },
    {
      id: 3,
      title: "Do you have prior medical conditions?",
      options: ["Yes", "No"],
    },
    { id: 4, title: "Have you va", options: ["Yes", "No"] },
  ];

  const userSymptoms = [
    { id: 1, title: "Fever", selected: false },
    { id: 2, title: "Cough", selected: false },
    { id: 3, title: "Sore Throat", selected: false },
    { id: 4, title: "Shortness of Breath", selected: false },
    { id: 5, title: "Headache", selected: false },
  ];

  const fluSymptoms = [
    {
      id: 1,
      title: "Fever",
    },
    {
      id: 2,
      title: "Cough",
    },
    { id: 3, title: "Sore Throat" },
    { id: 4, title: "Shortness of Breath" },
    { id: 5, title: "Headache" },
    { id: 6, title: "Muscle Pain" },
    { id: 7, title: "Loss of Taste or Smell" },
    { id: 8, title: "Chills" },
    { id: 9, title: "Nausea or Vomiting" },
    { id: 10, title: "Diarrhea" },
    { id: 11, title: "Runny Nose" },
    { id: 12, title: "Sneezing" },
    { id: 13, title: "Stuffy Nose" },
    { id: 14, title: "Body Aches" },
    { id: 15, title: "Fatigue" },
    { id: 16, title: "Congestion" },
    { id: 17, title: "Sore Throat" },
    { id: 18, title: "Cough" },
  ];

  const tbSymptoms = [
    {
      id: 1,
      title: "Fever",
    },
    {
      id: 2,
      title: "Fever",
    },
    {
      id: 3,
      title: "Fever",
    },
    {
      id: 4,
      title: "Fever",
    },
    {
      id: 5,
      title: "Fever",
    },
    {
      id: 6,
      title: "Fever",
    },
  ];

  // const bileRefluxStymtoms = [{

  // }]

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textHeader}>Assessment</Text>
        <View style={styles.questionsWrap}>
          <Text style={styles.questionsText}>
            Do you have any of the following symptoms?
          </Text>
          <View style={styles.questionsBtns}>
            <TouchableOpacity style={styles.questionsBtn}>
              <Text style={styles.questionsBtnText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.questionsBtn}>
              <Text style={styles.questionsBtnText}>No</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.questionsText}>
            Do you have any of the following symptoms?
          </Text>
        </View>
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
  questionsText: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    color: "#666666",
    marginTop: 15,
  },
  questionsBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  questionsBtn: {
    backgroundColor: "#2266EA",
    borderRadius: 5,
    padding: 10,
    width: "45%",
  },
  questionsBtnText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
});
