import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import disc from "@jsamr/counter-style/presets/disc";
import MarkedList from "@jsamr/react-native-li";
import { Checkbox } from "native-base";
import CustomButton from "../../components/CustomButtons/CustomButton";

export default function DiagnoseScreen({ navigation }) {
  const [groupValues, setGroupValues] = React.useState([]);
  const terms = [
    {
      id: 1,
      title: "This is not a real diagnosis, is a checkup.",
      description:
        "Checkup is for informational purposes and is not qualified medical opinion.",
    },
    {
      id: 2,
      title: "Do not use in emeegencies",
      description:
        "In case of health emergency, call your local emergency number immediately.",
    },
    {
      id: 3,
      title: "Your data is safe.",
      description:
        "Information that you provide is anonymous and not shared with anyone",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textHeader}>Terms of Service</Text>
        <Text style={styles.lighterText}>
          Please read the Terms of Service before using the checkup. Keep in
          mind that:
        </Text>
        <View style={styles.listWrapper}>
          <MarkedList
            counterRenderer={disc}
            markerBoxStyle={{ paddingVertical: 12 }}
          >
            {terms.map((term, index) => (
              <View key={index}>
                <Text style={styles.darkTextSemiBold}>{term.title}</Text>
                <Text style={styles.lighterText}>{term.description}</Text>
              </View>
            ))}
          </MarkedList>
        </View>
        <View>
          <Checkbox.Group
            onChange={setGroupValues}
            value={groupValues}
            accessibilityLabel="choose numbers"
          >
            <Checkbox value="one" my={2}>
              <Text style={styles.darkText}>
                I read and accept Terms of Services and Private Policy.
              </Text>
            </Checkbox>
            <Checkbox value="two">
              <Text style={styles.darkText}>
                I consert to curaHealth using any personal health data I
                voluntarily share....
              </Text>
            </Checkbox>
          </Checkbox.Group>
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <CustomButton
          text={"Continue"}
          onPress={() => navigation.navigate("SecondDiagnosis")}
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
    // alignItems: "center",
    // justifyContent: "center",
  },
  textHeader: { fontSize: 20, fontFamily: "Poppins_600SemiBold" },
  lighterText: {
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    color: "#666666",
  },
  darkTextSemiBold: {
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
    marginTop: 15,
  },
  btnWrapper: {
    flex: 1,
    right: 15,
    left: 15,
    position: "absolute",
    bottom: 15,
  },
  darkText: { fontSize: 15, fontFamily: "Poppins_400Regular" },
  listWrapper: {
    marginTop: 15,
  },
});
