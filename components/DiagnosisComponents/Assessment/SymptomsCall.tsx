import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Actionsheet, Box } from "native-base";
import CustomSearchBar from "../../CustomSearchBar/CustomSearchBar";
import symptoms from "./allSymptoms";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import COLORS from "../../../constants/COLORS";
import { AntDesign } from "@expo/vector-icons";

export default function SymptomsCall({ isOpen, onClose }) {
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <ScrollView style={styles.container}>
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

          {symptoms.map((symptom) => (
            <View style={styles.symptomsWrap}>
              <Text style={styles.symptomName}>{symptom.name}</Text>
              <Text style={styles.symptomCategory}>{symptom.category}</Text>
              <Text style={styles.symptomDescription} numberOfLines={2}>
                {symptom.description}
              </Text>

              <TouchableOpacity style={styles.addBtn}>
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
  );
}

const styles = StyleSheet.create({
  container: {},
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
  addBtn: {
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
