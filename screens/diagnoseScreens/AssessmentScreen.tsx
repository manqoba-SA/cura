import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButtons/CustomButton";
import COLORS from "../../constants/COLORS";
import Loading from "../../components/common/Loading";

export default function AssessmentScreen({ navigation, route }) {
  const { selectedSymptoms, index } = route.params;
  // const [index1, setIndex] = React.useState(index);
  // const [currentQuestion, setCurrentQuestion] = React.useState(0);

  // const covid19Questions = [
  //   {
  //     question: "have you been in contact with a confirmed case of covid-19?",
  //     options: [
  //       {
  //         text: "Yes",
  //         value: "yes",
  //         symptom: "covid-meet",
  //       },
  //       {
  //         text: "No",
  //         value: "no",
  //         symptom: "",
  //       },
  //     ],
  //   },
  //   {
  //     question: "Do you have shortness of breath?",
  //     options: [
  //       { text: "Yes", value: "yes", symptom: "covid-short-breath" },
  //       { text: "No", value: "no", symptom: "" },
  //     ],
  //   },
  //   {
  //     question: "how worse are your symptoms?",
  //     options: [
  //       { text: "Mild", value: "mild", symptom: "" },
  //       { text: "Moderate", value: "moderate", symptom: "" },
  //       { text: "Severe", value: "severe", symptom: "covid-severe" },
  //     ],
  //   },
  //   {
  //     question:
  //       "Do you suffer from any of the following? (select all that apply) ",
  //     options: [
  //       "fever",
  //       "cough",
  //       "sore throat",
  //       "headache",
  //       "muscle pain",
  //       "diarrhea",
  //       "loss of taste or smell",
  //     ],
  //   },
  //   {
  //     question: "Do you sweat a lot?",
  //     options: [
  //       { text: "Yes", value: "yes", symptom: "covid-sweat" },
  //       { text: "No", value: "no", symptom: "" },
  //     ],
  //   },
  //   {
  //     question: "Do you have red or irritated eyes?",
  //     options: [
  //       { text: "Yes", value: "yes", symptom: "covid-eyes" },
  //       { text: "No", value: "no", symptom: "" },
  //     ],
  //   },
  //   {
  //     question: "Do you have loss of speech or movement?",
  //     options: [
  //       { text: "Yes", value: "yes", symptom: "covid-speech" },
  //       { text: "No", value: "no", symptom: "" },
  //     ],
  //   },
  // ];

  const symptomsQuestions = [
    {
      Cough: {
        questions: [
          {
            question: "is your coughing dry or with phlegm?",
            options: [
              {
                text: "Yes",
                value: "yes",
                symptom: "cough-flu",
              },
              {
                text: "No",
                value: "no",
                symptom: "",
              },
            ],
          },
          {
            question: "how long you have been coughing?",
            options: [
              {
                text: "Less than 2 weeks",
                value: "less than 2 weeks",
                symptom: "cough-flu",
              },
              {
                text: "More than 2 weeks",
                value: "more than 2 weeks",
                symptom: "cough-tuberculosis",
              },
              {
                text: "More than 3 weeks",
                value: "more than 3 weeks",
                symptom: "cough-covid-19",
              },
              {
                text: "More than 4 weeks",
                value: "more than 4 weeks",
                symptom: "cough-monkey-pox",
              },
            ],
          },
        ],
      },

      Headache: {
        questions: [
          {
            question: "is your headache severe?",
            options: [
              {
                text: "Yes",
                value: "yes",
                symptom: "headache-migraine",
              },
              {
                text: "No",
                value: "no",
                symptom: "",
              },
            ],
          },
          {
            question: "how long you have been having headache?",
            options: [
              {
                text: "Less than 2 weeks",
                value: "less than 2 weeks",
                symptom: "headache-migraine",
              },
              {
                text: "More than 2 weeks",
                value: "more than 2 weeks",
                symptom: "headache-covid-19",
              },
              {
                text: "More than 3 weeks",
                value: "more than 3 weeks",
                symptom: "headache-flu",
              },
              {
                text: "More than 4 weeks",
                value: "more than 4 weeks",
                symptom: "headache-tuberculosis",
              },
            ],
          },
        ],
      },
    },
  ];

  const [selectedSymptomsQuestions, setSelectedSymptomsQuestions] =
    React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    let selectedSymptomsQuestions = [];
    selectedSymptoms.forEach((symptom) => {
      symptomsQuestions.forEach((symptomQuestion) => {
        if (symptomQuestion[symptom.title]) {
          // selectedSymptomsQuestions.push(
          //   symptomQuestion[symptom.title].questions
          // );
          selectedSymptomsQuestions = [
            ...selectedSymptomsQuestions,
            ...symptomQuestion[symptom.title].questions,
          ];
          // console.log(symptomQuestion[symptom.title].questions);
          // symptomsQuestions[0][symptom].questions[index].question
        }
      });
    });
    setSelectedSymptomsQuestions(selectedSymptomsQuestions);
    setLoading(false);
  }, []);

  // console.log(selectedSymptomsQuestions[index]?.question);

  const [selectedSymptomsAnswers, setSelectedSymptomsAnswers] = React.useState(
    []
  );

  const SymptomsQuestions = () => {
    return (
      <>
        <Text style={styles.question}>
          {selectedSymptomsQuestions[index]?.question}
        </Text>
        <View style={styles.options}>
          {selectedSymptomsQuestions[index]?.options.map((option, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                // setSelectedSymptomsAnswers([
                //   ...selectedSymptomsAnswers,
                //   option.symptom,
                // ]);
                if (index + 1 >= selectedSymptomsQuestions.length) {
                  // if (option.symptom) {
                  //   setSelectedSymptomsAnswers([
                  //     ...selectedSymptomsAnswers,
                  //     option.symptom,
                  //   ]);
                  // }
                  navigation.navigate("SymptomsResult");
                } else {
                  // if (option.symptom) {
                  //   setSelectedSymptomsAnswers([
                  //     ...selectedSymptomsAnswers,
                  //     option.symptom,
                  //   ]);
                  // }
                  navigation.navigate("AssessmentScreen", {
                    index: index + 1,
                    selectedSymptoms,
                  });
                }
              }}
            >
              <Text style={styles.option}>{option.text}</Text>
            </TouchableOpacity>
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
  questionsBtn: {
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
