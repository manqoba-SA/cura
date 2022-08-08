import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CustomBox from "../../components/homePageComponents/CustomBox";
const { width } = Dimensions.get("window");
export default function Home({ navigation }) {
  const images = {
    diagnose: require("../../../cura/assets/images/illustrations/undraw_doctors_hwty.png"),
    healthLibrary: require("../../../cura/assets/images/illustrations/library.png"),
    medicineReminder: require("../../../cura/assets/images/illustrations/reminder.png"),
  };
  return (
    <View style={styles.container}>
      <View style={styles.diagnoseBoxWrap}>
        <CustomBox
          title={"Diagnose"}
          subtitle="Hi Oratile, I can help you learn more about your sysmptoms"
          onPress={() => navigation.navigate("diagnosis")}
          image={images.diagnose}
        />
        <View style={styles.healthLibraryAndReminderBoxWrap}>
          <CustomBox
            onPress={() => navigation.navigate("healthLibrary")}
            title={"Health\nLibrary"}
            type="half"
            subtitle={""}
            image={images.healthLibrary}
          />
          <CustomBox
            onPress={() => navigation.navigate("medineReminderScreen")}
            title={"Medicine\nReminder"}
            type="half"
            subtitle={""}
            image={images.medicineReminder}
          />
        </View>
        <View style={styles.articlesWrap}>
          <Text style={styles.atrticlesHeaderText}>
            Check latest Health Articles
          </Text>
          <CustomBox
            title={"Sleep meditation"}
            subtitle="Heaalth is very important in life because when health is a alive.."
            type="medium"
            onPress={() => navigation.navigate("diagnosis")}
            image={""}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#E5E5E5", flex: 1.0 },
  diagnoseBoxWrap: { flex: 1.0 },
  healthLibraryAndReminderBoxWrap: { flexDirection: "row", width: width * 0.8 },
  articlesWrap: { margin: 20 },
  atrticlesHeaderText: { fontFamily: "Poppins_400Regular", fontSize: 20 },
});
