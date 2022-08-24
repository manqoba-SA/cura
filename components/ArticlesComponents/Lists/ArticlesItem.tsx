import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import COLORS from "../../../constants/COLORS";

export default function ArticlesItem({ title, description, navigation, id }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("articleDetails", {
          id: id,
          title: title,
        })
      }
      style={styles.container}
    >
      <View style={{ flex: 1.0 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View>
        <AntDesign name="right" size={24} color={COLORS.primary.text} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#666666",
  },
  title: {
    fontSize: 17,
    fontFamily: "Poppins_600SemiBold",
  },
  description: {
    fontFamily: "Poppins_400Regular",
    color: "#666666",
  },
});
