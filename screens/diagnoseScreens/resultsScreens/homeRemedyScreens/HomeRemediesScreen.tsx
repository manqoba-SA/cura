import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../../../../constants/COLORS";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import RemedyHerbItemCombonent from "../../../../components/DiagnosisComponents/remediesAndherbs/RemedyHerbItemCombonent";
import remedies from "../../../../constants/dummyData/remedies";

export default function HomeRemediesScreen({ navigation }) {
  const teaImage = require("../../../../../cura/assets/images/honeyTea.jpg");
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>
          Home Remedies that will help in flue sicknesses
        </Text>
        {remedies.map((remedy) => (
          <RemedyHerbItemCombonent
            name={remedy.title}
            description={remedy.description}
            image={remedy.image}
            onPress={() =>
              navigation.navigate("RemedyDetailScreen", { id: remedy.id })
            }
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#E5E5E5", flex: 1.0 },
  headerText: {
    color: COLORS.primary.text,
    fontFamily: "Poppins_600SemiBold",
  },
  wrapper: {
    marginTop: 10,
    marginHorizontal: 15,
  },
});
