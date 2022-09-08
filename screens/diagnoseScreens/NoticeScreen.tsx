import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import COLORS from "../../constants/COLORS";

export default function NoticeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Progress.Circle
          progress={0.3}
          //   width={200}
          color={COLORS.primary.text}
        />
        <Text style={styles.textHeader}>Note</Text>
        <Text style={styles.lighterText}>
          Please remember that this is not a medical diagnosis. In case of
          doubt, it's always best to consult a doctor
        </Text>
        <Pressable onPress={() => navigation.navigate("ReportScreen")}>
          <Text>Presss</Text>
        </Pressable>
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
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    marginTop: 10,
  },
  lighterText: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    color: "#666666",
  },
});
