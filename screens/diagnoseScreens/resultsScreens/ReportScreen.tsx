import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import COLORS from "../../../constants/COLORS";
import CustomButton from "../../../components/CustomButtons/CustomButton";
import navigationTheme from "../../../navigation/navigationTheme";

export default function ReportScreen({ navigation }) {
  const remedyImg = require("../../../../cura/assets/images/illustrations/cup_of_tea.png");
  const herbsImg = require("../../../../cura/assets/images/illustrations/herbs.png");
  const doctorImg = require("../../../../cura/assets/images/illustrations/doctor.png");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textHeader}>Your Report</Text>
        <Text style={[styles.lighterText, styles.lightTextHeader]}>
          Summary
        </Text>
        <Text style={styles.lighterText}>
          Thanks Oratile . We put together a report that outlines possible
          causes for your symptoms
        </Text>
        <View>
          <Text style={[styles.lighterText, styles.lightTextHeader]}>
            Possible Sicknesses
          </Text>
          <View style={styles.sicknessBox}>
            <Text style={styles.boxTitle}>Infuenza Flu</Text>
            <Text style={styles.lighterText}>
              9 out of 10 people with these symptoms had this condition
            </Text>
            <TouchableOpacity
              style={styles.boxBtn}
              onPress={() => navigation.navigate("CauseScreen")}
            >
              <Text style={styles.btnText}>Tell me more</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Less Likely causes */}
        <View>
          <Text style={[styles.lighterText, styles.lightTextHeader]}>
            Less Likely Causes
          </Text>
          <View style={styles.sicknessBox}>
            <Text style={styles.boxTitle}>CoVid19</Text>
            <Text style={styles.lighterText}>
              2 out of 10 people with these symptoms had this condition
            </Text>
            <TouchableOpacity style={styles.boxBtn}>
              <Text style={styles.btnText}>Tell me more</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* WHAT YOU CAN tRY */}
        <View>
          <Text style={[styles.lighterText, styles.lightTextHeader]}>
            What you can try
          </Text>
          <Text style={styles.lighterText}>
            In most cases, you can relieve your symptoms at home, with herbs
            that you can buy, or with medicine. Do not hesitate to see a doctor
            if this does not work in some cases
          </Text>
          <View style={styles.sicknessBox}>
            <Text style={styles.boxTitle}>Home Remedies</Text>
            <TouchableOpacity
              style={styles.boxWrapper}
              onPress={() => navigation.navigate("HomeRemediesScreen")}
            >
              <Image
                source={remedyImg}
                style={styles.boxImage}
                key={remedyImg}
              />
              <Text style={styles.lighterText}>
                It has been proven that 9 out of 10 people are helped by these
                home remedies. If you are interested, click and please try them
                out
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.sicknessBox}
            onPress={() => navigation.navigate("HerbsScreen")}
          >
            <Text style={styles.boxTitle}>Try Herbs</Text>
            <View style={styles.boxWrapper}>
              <Image
                source={herbsImg}
                style={styles.boxImage}
                key={remedyImg}
              />
              <Text style={styles.lighterText}>
                It has been proven that 9 out of 10 people are helped by this
                herbs. If you are interested, click and please try them out
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sicknessBox}
            onPress={() => navigation.navigate("DoctorsScreen")}
          >
            <Text style={styles.boxTitle}>Speak to a doctor</Text>
            <View style={styles.boxWrapper}>
              <Image
                source={doctorImg}
                style={styles.boxImage}
                key={remedyImg}
              />
              <Text style={styles.lighterText}>
                Still worried?, You still not satisfied with the information we
                gave you but still dont want to go to clinic, we have option for
                you to speak with a doctor
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.lastPart}>
          <Text style={styles.lighterText}>
            Remember that this is not a diagnosis is exhaustive information for
            educational perposes. You might have a condition that is not
            suggested here. You should always consult a doctor to confirm for
            best results
          </Text>
        </View>

        <CustomButton
          text={"Continue"}
          onPress={() => console.log("Go to Feedback page")}
        />
        <CustomButton
          text={"Finish"}
          onPress={() => console.log("Go to Feedback page")}
        />
      </View>
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
  textHeader: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    marginTop: 20,
  },
  lightTextHeader: {
    fontSize: 19,
    marginTop: 15,
  },
  lighterText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#666666",
    flexWrap: "wrap",
    flexShrink: 1,
  },
  sicknessBox: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#409849",
    borderRadius: 16,
    padding: 15,
    width: "100%",
    height: 150,
  },
  boxTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 19,
    color: COLORS.primary.text,
  },
  boxBtn: {
    backgroundColor: COLORS.primary.text,
    padding: 5,
    borderRadius: 6,
    width: "35%",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  boxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    // flexWrap: "wrap",
  },
  boxImage: {
    resizeMode: "contain",
    width: 80,
    height: 75,
  },
  lastPart: {
    marginTop: 50,
    borderTopWidth: 1.5,
    borderTopColor: "#ccc",
    borderStyle: "dotted",
  },
});
