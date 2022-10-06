const symptomsQuestions = [
  {
    cough: {
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

    headache: {
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
