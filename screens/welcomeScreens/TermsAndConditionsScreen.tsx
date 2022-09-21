import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useState } from "react";
import disc from "@jsamr/counter-style/presets/disc";
import MarkedList from "@jsamr/react-native-li";
import CustomButton from "../../components/CustomButtons/CustomButton";
import { CheckBox, Separator } from "react-native-btr";
import COLORS from "../../constants/COLORS";

export default function TermsAndConditionsScreen({ navigation }) {
  const [groupValues, setGroupValues] = React.useState([]);
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  // const toggle = (index: number) => {
  //   const item = data[index];
  //   item.checked = !item.checked;
  //   setGroupValues([...groupValues]);
  // }
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
  ];

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textHeader}>Terms & Conditions</Text>
        <Text style={styles.lighterText}>
          Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum
          elit ex ut. Dolore exercitation nulla tempor consequat aliquip
          occaecat. Nisi id ipsum irure aute.
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
          <View style={styles.checkoutWrap}>
            <CheckBox
              checked={isSelected}
              onPress={() => setSelection(!isSelected)}
              color={COLORS.primary.text}
            />
            <View style={styles.checkoutText}>
              <Text style={styles.darkText}>
                I agree to curaHealth’s Terms & Condition and confirm that I am
                at least 16 old.
              </Text>
            </View>
          </View>
          <View style={styles.checkoutWrap}>
            <CheckBox
              checked={isSelected2}
              onPress={() => setSelection2(!isSelected2)}
              color={COLORS.primary.text}
            />
            <View style={styles.checkoutText}>
              <Text style={styles.darkText}>
                I agree to curaHealth’s Terms & Condition and confirm that I am
                at least 16 old.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <CustomButton
          text={"Continue"}
          onPress={() => navigation.navigate("Register")}
          disabled={isSelected && isSelected2 ? false : true}
          //   disabled={true}
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
    bottom: 25,
  },
  darkText: { fontSize: 15, fontFamily: "Poppins_400Regular" },
  listWrapper: {
    marginTop: 15,
  },
  checkoutWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  checkoutText: {
    marginLeft: 15,
  },
});
