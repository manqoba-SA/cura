import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import COLORS from "../../../constants/COLORS";
const { width, height } = Dimensions.get("window");
export default function ReminderBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Your Plan\nFor Today"}</Text>
      <Text style={styles.subTitle}>1 of 3 Completed</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Show More</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: height * 0.2,
    width: "80%",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 20,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 17,
  },
  subTitle: {
    fontFamily: "Poppins_400Regular",
    marginHorizontal: 20,
    color: "#9B9B9B",
  },
  btn: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary.text,
    width: "26%",
  },
  btnText: {
    color: COLORS.primary.text,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
  },
});
