import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../../../constants/COLORS";
import herbs from "../../../../constants/dummyData/herbs";
import RemedyHerbItemCombonent from "../../../../components/DiagnosisComponents/remediesAndherbs/RemedyHerbItemCombonent";

export default function HerbsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>
          Herbs that will help in flue sicknesses
        </Text>
        {herbs.map((herb) => (
          <RemedyHerbItemCombonent
            name={herb.title}
            description={herb.description}
            image={herb.image}
            onPress={() =>
              navigation.navigate("HerbDetailsScreen", { id: herb.id })
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
