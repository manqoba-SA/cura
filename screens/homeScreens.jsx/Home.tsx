import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBox from "../../components/homePageComponents/CustomBox";

export default function Home({ navigation }) {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={{ backgroundColor: "#E5E5E5", flex: 1.0 }}>
      <View style={{ flex: 1.0 }}>
        <CustomBox
          title={"Diagnose"}
          subtitle="Hi Oratile, I can help you learn more about your sysmptoms"
          onPress={() => navigation.navigate("diagnosis")}
          image={require("../../../cura/assets/images/illustrations/undraw_doctors_hwty.png")}
        />
        <View style={{ flexDirection: "row", width: width * 0.8 }}>
          <CustomBox
            onPress={() => navigation.navigate("healthLibrary")}
            title={"Health\nLibrary"}
            type="half"
            subtitle={""}
            image={require("../../../cura/assets/images/illustrations/library.png")}
          />
          <CustomBox
            onPress={() => navigation.navigate("medineReminderScreen")}
            title={"Medicine\nReminder"}
            type="half"
            subtitle={""}
            image={require("../../../cura/assets/images/illustrations/reminder.png")}
          />
        </View>
        <View style={{ margin: 20 }}>
          <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 20 }}>
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
