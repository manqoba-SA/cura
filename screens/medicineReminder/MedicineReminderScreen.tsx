import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../constants/COLORS";
import { Ionicons } from "@expo/vector-icons";

const Item = ({ name, details }) => (
  <View
    style={{
      flexDirection: "row",
      backgroundColor: "F8F8F6",
      borderRadius: 24,
      justifyContent: "space-around",
    }}
  >
    <View>
      <Ionicons name="md-enter-outline" size={35} color="black" />
    </View>
    <Text style={{ color: "#9B9B9B" }}>{name}</Text>
  </View>
);

export default function MedicineReminderScreen() {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={{ backgroundColor: "#E5E5E5", flex: 1 }}>
      <View
        style={{
          flex: 1.0,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* First Wrap to  */}
        <View
          style={{
            backgroundColor: "#fff",
            height: height * 0.2,
            width: "80%",
            borderRadius: 10,
            shadowColor: "#171717",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            margin: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              marginHorizontal: 20,
              marginVertical: 10,
              fontSize: 17,
            }}
          >
            {"Your Plan\nFor Today"}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              marginHorizontal: 20,
              color: "#9B9B9B",
            }}
          >
            1 of 3 Completed
          </Text>
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              marginVertical: 10,
              borderBottomWidth: 2,
              borderBottomColor: COLORS.primary.text,
              width: "26%",
            }}
          >
            <Text
              style={{
                color: COLORS.primary.text,
                fontFamily: "Poppins_600SemiBold",
                fontSize: 14,
              }}
            >
              Show More
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2.0, width: "80%" }}>
          <Text style={{ fontSize: 15, fontFamily: "Poppins_600SemiBold" }}>
            Daily Review
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
