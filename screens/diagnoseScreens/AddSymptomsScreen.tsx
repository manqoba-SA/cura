import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../../components/CustomButtons/CustomButton";
import COLORS from "../../constants/COLORS";
import locationSymptoms from "../../constants/dummyData/locationSymptoms";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
export default function AddSymptomsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textHeader}>Symptoms</Text>
        <Text style={styles.lighterText}>Please specify your symptoms</Text>
        {/* <View style={styles.centerWrap}> */}
        <View style={styles.sysmptomsBox}>
          <Text>nnjjn</Text>
        </View>
        <View style={styles.addBtnWrap}>
          <TouchableOpacity style={styles.addBtn}>
            <View style={styles.dFlex}>
              <AntDesign name="plus" size={20} color="#409849" />
              <Text style={styles.btnText}>Add Symptoms</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.sysmptomsLocationTags}>
          <Text style={styles.lighterText}>Most common in your location</Text>
          <View style={styles.sysmptomsLocationTagsWrap}>
            {locationSymptoms.map((symptom) => (
              <TouchableOpacity style={[styles.addBtn, styles.symptomsBtns]}>
                <View style={styles.dFlex}>
                  <AntDesign name="plus" size={20} color="#2266EA" />
                  <Text style={styles.btnText}>{symptom.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.btnsWrapper}>
        <CustomButton
          text={"Continue"}
          onPress={() => navigation.navigate("ThirdDiagnosis")}
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
    // backgroundColor: "#555555",
  },
  textHeader: { fontSize: 20, fontFamily: "Poppins_600SemiBold" },
  lighterText: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    color: "#666666",
  },
  btnsWrapper: {
    flex: 1,
    right: 15,
    left: 15,
    position: "absolute",
    bottom: 15,
  },
  centerWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  sysmptomsBox: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#409849",
    borderRadius: 16,
    padding: 15,
    width: "100%",
    height: 150,
  },
  addBtnWrap: {
    marginTop: 12,
    width: "50%",
  },
  addBtn: {
    borderWidth: 1.5,
    borderColor: COLORS.primary.text,
    borderRadius: 25,
    color: COLORS.primary.text,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  dFlex: {
    flexDirection: "row",
  },
  btnText: {
    color: COLORS.primary.text,
    fontFamily: "Poppins_400Regular",
  },
  sysmptomsLocationTags: {
    marginTop: 15,
  },
  sysmptomsLocationTagsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  symptomsBtns: {
    marginBottom: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
