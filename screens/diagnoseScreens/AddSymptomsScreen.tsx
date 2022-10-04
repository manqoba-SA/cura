import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomButton from "../../components/CustomButtons/CustomButton";
import COLORS from "../../constants/COLORS";
import locationSymptoms from "../../constants/dummyData/locationSymptoms";
import { AntDesign } from "@expo/vector-icons";
import SymptomsCall from "../../components/DiagnosisComponents/Assessment/SymptomsCall";
import { Actionsheet, useDisclose } from "native-base";
import CustomSearchBar from "../../components/CustomSearchBar/CustomSearchBar";
const { width, height } = Dimensions.get("window");
export default function AddSymptomsScreen({ navigation }) {
  const [symptoms, setSymptoms] = React.useState(locationSymptoms);
  const [selectedSymptoms, setSelectedSymptoms] = React.useState([]);
  const [selectedLocation, setSelectedLocation] = React.useState("");
  const [selectedLocationSymptoms, setSelectedLocationSymptoms] =
    React.useState();
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclose();

  const onAdd = (item) => {
    setSelectedSymptoms([...selectedSymptoms, item]);
    setSymptoms(symptoms.filter((element) => element.id !== item?.id));
    if (isOpen) {
      onClose();
    }
  };

  const finalizeSymptoms = () => {
    navigation.navigate("AssessmentScreen", {
      selectedSymptoms,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textHeader}>Symptoms</Text>
        <Text style={styles.lighterText}>Please specify your symptoms</Text>
        <View style={styles.sysmptomsBox}>
          <View style={styles.sysmptomsLocationTags}>
            <View style={styles.sysmptomsLocationTagsWrap}>
              {selectedSymptoms.map((symptom) => (
                <TouchableOpacity
                  style={[
                    styles.addBtn,
                    styles.symptomsBtns,
                    { backgroundColor: COLORS.primary.text },
                  ]}
                  onPress={() => {
                    setSymptoms([...symptoms, symptom]);
                    setSelectedSymptoms(
                      selectedSymptoms.filter(
                        (element) => element.id !== symptom.id
                      )
                    );
                  }}
                >
                  <View style={styles.dFlex}>
                    {/* <AntDesign name="plus" size={15} color="#2266EA" /> */}
                    <Text style={[styles.btnText, { color: "#fff" }]}>
                      {symptom.title}
                    </Text>
                    <AntDesign
                      style={{ marginLeft: 10 }}
                      name="close"
                      size={17}
                      color="#fff"
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.addBtnWrap}>
          <TouchableOpacity onPress={onOpen} style={styles.addBtn}>
            <View style={styles.dFlex}>
              <AntDesign name="plus" size={20} color="#409849" />
              <Text style={styles.btnText}>Add Symptoms</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.sysmptomsLocationTags}>
          <Text style={styles.lighterText}>Most common symptoms</Text>
          <View style={styles.sysmptomsLocationTagsWrap}>
            {symptoms.map((symptom) => (
              <>
                {symptom.common ? (
                  <TouchableOpacity
                    style={[styles.addBtn, styles.symptomsBtns]}
                    onPress={() => onAdd(symptom)}
                  >
                    <View style={styles.dFlex}>
                      <AntDesign name="plus" size={15} color="#2266EA" />
                      <Text style={styles.btnText}>{symptom.title}</Text>
                    </View>
                  </TouchableOpacity>
                ) : null}
              </>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.btnsWrapper}>
        <CustomButton text={"Continue"} onPress={() => finalizeSymptoms()} />
      </View>
      {/* <SymptomsCall
        isOpen={isOpen}
        onClose={onClose}
        symptoms={symptoms}
        // onAdd={onAdd}
      /> */}

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <ScrollView>
            <Text style={styles.headerText}>Search for a symptom</Text>
            <View style={styles.searchBar}>
              <CustomSearchBar
                searchPhrase={search}
                setSearchPhrase={setSearch}
                placeholder="search for symptom"
                clicked={clicked}
                setCLicked={setClicked}
              />
            </View>

            {symptoms.sort().map((symptom) => (
              <View style={styles.symptomsWrap}>
                <Text style={styles.symptomName}>{symptom.title}</Text>
                <Text style={styles.symptomCategory}>{symptom.category}</Text>
                <Text style={styles.symptomDescription} numberOfLines={2}>
                  {symptom.description}
                </Text>

                <TouchableOpacity
                  style={styles.addBtn1}
                  onPress={() => onAdd(symptom)}
                >
                  <AntDesign name="plus" size={15} color="#2266EA" />
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      color: COLORS.primary.text,
                    }}
                  >
                    Add Symptom
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
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
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: COLORS.primary.text,
    fontFamily: "Poppins_400Regular",
  },
  sysmptomsLocationTags: {
    marginTop: 15,
  },
  sysmptomsLocationTagsWrap: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  symptomsBtns: {
    marginBottom: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  headerText: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    fontSize: 20,
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 20,
  },
  symptomsWrap: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#666666",
  },
  symptomName: {
    fontSize: 20,
    color: "#000",
    fontFamily: "Poppins_600SemiBold",
  },
  symptomCategory: {
    fontSize: 15,
    color: COLORS.primary.text,
    fontFamily: "Poppins_400Regular",
  },
  symptomDescription: {
    fontSize: 15,
    color: "#666666",
    fontFamily: "Poppins_400Regular",
    marginBottom: 5,
  },
  addBtn1: {
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: COLORS.primary.text,
    width: "40%",
    // height: 30,
    padding: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",

    marginTop: 10,
    marginBottom: 10,
  },
});
