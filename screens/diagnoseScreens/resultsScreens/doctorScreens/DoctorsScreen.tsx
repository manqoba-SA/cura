import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomSearchBar from "../../../../components/CustomSearchBar/CustomSearchBar";
import doctors from "../../../../constants/dummyData/doctors";
import { Fontisto } from "@expo/vector-icons";
import navigationTheme from "../../../../navigation/navigationTheme";

export default function DoctorsScreen({ navigation }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <CustomSearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setCLicked={setClicked}
        placeholder="Search Doctor"
      />
      <View style={styles.content}>
        <View style={styles.doctors}>
          {doctors.map((doctor) => (
            <TouchableOpacity
              key={doctor.id}
              style={styles.box}
              onPress={() =>
                navigation.navigate("DoctorDetailsScreen", { id: doctor.id })
              }
            >
              <Image source={doctor.image} style={styles.doctorImage} />
              <Text style={styles.doctorName}>Dr. {doctor.name}</Text>
              <Text style={styles.doctorTitle}>{doctor.title}</Text>
              <Text style={styles.doctorTitle}>
                <Fontisto name="doctor" size={15} color="#409849" />
                Patients: {doctor.customers}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
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
  doctorImage: {
    width: 78.16,
    height: 78.16,
    borderRadius: 50,
  },
  doctorName: {
    marginTop: 5,
    fontFamily: "Poppins_400Regular",
    fontSize: 17,
    color: "#0A0909",
  },
  doctorTitle: {
    color: "#666666",
    fontFamily: "Poppins_400Regular",
  },
});
