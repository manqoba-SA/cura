const sicknessesQuestions = [
  {
    Covid19: {
      questions: [
        {
          question: "Do you have shortness of breath?",
          options: [
            { text: "Yes", value: "yes", symptom: "covid-short-breath" },
            { text: "No", value: "no", symptom: "" },
          ],
        },
      ],
    },
    Flu: {
      questions: [
        {
          question: "Do you feel feverish?",
          options: [
            { text: "Yes", value: "yes", symptom: "flu-fever" },
            { text: "No", value: "no", symptom: "" },
          ],
        },
        {
          question:
            "Do you have a fever or cough that goes away and comes back?",
          options: [
            { text: "Yes", value: "yes", symptom: "flu-fever" },
            { text: "No", value: "no", symptom: "" },
          ],
        },
        {
          question: "Do you have cold sweats and shivers?",
          options: [
            { text: "Yes", value: "yes", symptom: "flu-sweats" },
            { text: "No", value: "no", symptom: "" },
          ],
        },
      ],
    },
    Tuberculosis: {
      questions: [
        {
          question: "Do you have a cough that lasts for more than 3 weeks?",
          options: [
            { text: "Yes", value: "yes", symptom: "tuberculosis-cough" },
            { text: "No", value: "no", symptom: "" },
          ],
        },
      ],
    },
    Sinuses: {
      questions: [
        {
          question: "Do you have a headache?",
          options: [
            { text: "Yes", value: "yes", symptom: "sinuses-headache" },
            { text: "No", value: "no", symptom: "" },
          ],
        },
      ],
    },
    BileReflux: {
      questions: [
        {
          question: "Do you have a burning sensation in your chest?",
          options: [
            { text: "Yes", value: "yes", symptom: "bile-reflux-burning" },
            { text: "No", value: "no", symptom: "" },
          ],
        },
      ],
    },
    Migraine: {
      questions: [
        {
          question: "Do you have a headache?",
          options: [
            { text: "Yes", value: "yes", symptom: "migraine-headache" },
            { text: "No", value: "no", symptom: "" },
          ],
        },
      ],
    },
    Cholera: {
      questions: [
        {
          question: "Do you have diarrhea?",
          options: [
            { text: "Yes", value: "yes", symptom: "cholera-diarrhea" },
            { text: "No", value: "no", symptom: "" },
          ],
        },
      ],
    },
    Monkeypox: {
      questions: [
        {
          question: "Do you have a fever?",
          options: [
            { text: "Yes", value: "yes", symptom: "monkeypox-fever" },
            { text: "No", value: "no", symptom: "" },
          ],
        },
      ],
    },
  },
];

export default sicknessesQuestions;
