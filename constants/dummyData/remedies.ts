const remedies = [
  {
    id: 1,
    title: "Honey Tea",
    description: "According to some research, honey may relieve coughs",
    image: require("../../assets/images/honeyTea.jpg"),
    overview:
      "Researchers in one 2007 studyTrusted Source found evidence to suggest that buckwheat honey may be more effective than traditional medication at relieving cough.",
    ingrediens: [
      {
        id: 1,
        name: "Roibos Tea",
        image: require("../../assets/images/honeyTea.jpg"),
      },
      {
        id: 2,
        name: "Honey",
        image: require("../../assets/images/honey.jpg"),
      },
    ],
    steps: "",
    shouldNotUse: "",
  },
  {
    id: 2,
    title: "Probiotics",
    description:
      "According to some research, Probiotics can help to relieve coughs",
    image: require("../../assets/images/honeyTea.jpg"),
    overview:
      "Probiotics are microorganisms that can provide a host of health benefits. While they don’t relieve a cough directly, they do help to balance your gastrointestinal flora. Gastrointestinal flora are the bacteria that live in your intestines.",
    ingrediens: [
      { id: 1, name: "Roibos Tea", image: "" },
      { id: 2, name: "Honey", image: "" },
    ],
    steps: "",
    shouldNotUse: "",
  },
  {
    id: 3,
    title: "Cut Up an Onion",
    description: "According to some research, honey may relieve coughs",
    image: require("../../assets/images/honeyTea.jpg"),
    overview:
      "Many people start to cry the minute they begin chopping up an onion. But while there isn’t any science behind it, some people swear that the strong vapor an onion emits when it’s cut helps relieve a cough, says Russell. Before you go to bed, cut an onion into quarters and leave it on a plate on your bedside table or at the foot of the bed. Although using onions may sound like nothing more than an old wives' tale, Russell says it's quite popular in Spain and France.",
    ingrediens: [
      { id: 1, name: "Roibos Tea", image: "" },
      { id: 2, name: "Honey", image: "" },
    ],
    steps: "",
    shouldNotUse: "Should not be use by people with diabities",
  },
];

export default remedies;
