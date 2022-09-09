import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomSearchBar from "../../../../components/CustomSearchBar/CustomSearchBar";
import doctors from "../../../../constants/dummyData/doctors";

export default function DoctorsScreen() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.container}>
      <CustomSearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setCLicked={setClicked}
      />
      <View style={styles.content}>
        <View style={styles.doctors}>
          {doctors.map((doctor) => (
            <TouchableOpacity style={styles.box}>
              <Text>{doctor.name}</Text>
              <Text>{doctor.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#E5E5E5", flex: 1 },
  content: { marginHorizontal: 15 },
  doctors: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    // flexGrow: 0,
    // flexShrink: 1,
    // flexBasis: "auto",
  },
  box: {
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "45%",
    // marginHorizontal: 4,
    marginVertical: 10,
  },
});
