import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import COLORS from "../../constants/COLORS";
import Loading from "../../components/common/Loading";
import sicknessesQuestions from "./sicknessesQuestions";

export default function SicknessesAssessment({ route, navigation }) {
  const { selectedSymptomsAnswers, index } = route.params;
  const [loading, setLoading] = React.useState(false);
  const questions = sicknessesQuestions;
  const [symptomsQuestions, setSymptomsQuestions] = React.useState([]);
  const [selectedAnswers, setSelectedAnswers] = React.useState([]);

  const sicknessCount = (sickness) => {
    return selectedSymptomsAnswers.reduce(
      (a, str) => a + str.includes(sickness),
      0
    );
  };
  useEffect(() => {
    setLoading(true);
    let selectedSicknessesQuestions = [];
    const covidCount = sicknessCount("covid");
    const fluCount = sicknessCount("flu");
    const tbCount = sicknessCount("tb");
    const magraineCount = sicknessCount("migraine");
    const choleraCount = sicknessCount("cholera");
    const monkeyPoxCount = sicknessCount("monkeyPox");
    const sinusitisCount = sicknessCount("sinus");
    const bileCount = sicknessCount("bile");
    const arthritisCount = sicknessCount("arthritis");

    if (covidCount >= 2) {
      selectedSicknessesQuestions = [
        ...selectedSicknessesQuestions,
        ...questions[0]["Covid19"].questions,
      ];
    }

    if (fluCount >= 2) {
      selectedSicknessesQuestions = [
        ...selectedSicknessesQuestions,
        ...questions[0]["Flu"].questions,
      ];
    }

    if (tbCount >= 2) {
      selectedSicknessesQuestions = [
        ...selectedSicknessesQuestions,
        ...questions[0]["Tuberculosis"]?.questions,
      ];
    }

    setSymptomsQuestions(selectedSicknessesQuestions);
    setLoading(false);
  }, []);

  console.log(symptomsQuestions);

  const SymptomsQuestions = () => {
    return (
      <>
        <Text style={styles.question}>
          {symptomsQuestions[index]?.question}
        </Text>
        <View style={styles.options}>
          {symptomsQuestions[index]?.options.map((option) => (
            <View key={option.value} style={styles.option}>
              <TouchableOpacity
                onPress={() => {
                  if (index + 1 >= symptomsQuestions.length) {
                    if (option.symptoms) {
                      setSelectedAnswers([...selectedAnswers, option.symptom]);
                    }
                    navigation.navigate("ReportScreen", {
                      selectedAnswers,
                      //   index: index + 1,
                    });
                  } else {
                    if (option.symptoms) {
                      setSelectedAnswers([...selectedAnswers, option.symptom]);
                    }
                    navigation.navigate("SicknessesAssessment", {
                      selectedSymptomsAnswers,
                      index: index + 1,
                    });
                  }
                }}
                style={styles.optionButton}
              >
                <Text style={styles.optionText}>{option.text}</Text>
              </TouchableOpacity>
              {/* <Text style={styles.optionText}>{option.text}</Text> */}
            </View>
          ))}
        </View>
      </>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.wrapper}>
          <Text style={styles.textHeader}>Assessment</Text>
          <View style={styles.questionsWrap}>
            <SymptomsQuestions />
          </View>
        </View>
      )}
    </ScrollView>
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
    marginTop: 15,
  },
  optionButton: {
    // backgroundColor: "#2266EA",
    borderWidth: 1,
    borderColor: COLORS.primary.text,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    // width: "45%",
  },
  questionsBtnText: {
    color: COLORS.primary.text,
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
  question: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    color: "#666666",
    marginTop: 15,
  },
  options: {
    marginTop: 15,
  },

  option: {
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: COLORS.primary.text,
  },
  header: {
    backgroundColor: COLORS.primary.text,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
  },
  body: {
    flex: 1,
    padding: 20,
  },
  questionText: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    color: "#666666",
    marginTop: 15,
  },

  btn: {
    borderWidth: 1,
    borderColor: COLORS.primary.text,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  btnText: {
    color: COLORS.primary.text,
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },

  optionText: {
    color: COLORS.primary.text,
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
});
