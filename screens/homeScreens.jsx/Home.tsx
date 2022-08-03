import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../constants/COLORS";
import { Icon } from "@iconify/react";
import settingsIcon from "@iconify/icons-arcticons/settings";
import { Ionicons } from "@expo/vector-icons";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
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
        />
        <View style={{ flexDirection: "row", width: width * 0.8, margin: 0 }}>
          <CustomBox
            title={"Health\nLibrary"}
            type="half"
            onPress={() => navigation.navigate("healthLibrary")}
          />
          <CustomBox
            title={"Medicine\nReminder"}
            type="half"
            onPress={() => navigation.navigate("medineReminderScreen")}
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
          />
        </View>
      </View>
    </View>
  );
}
