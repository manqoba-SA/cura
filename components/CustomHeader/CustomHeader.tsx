import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import COLORS from "../../constants/COLORS";
import { Icon } from "@iconify/react";
import settingsIcon from "@iconify/icons-arcticons/settings";
import { Ionicons } from "@expo/vector-icons";

export default function CustomHeader({ navigation }) {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <View
        style={{
          // marginTop: 30,
          flexDirection: "row",
          margin: 0,
          backgroundColor: "#fff",
          height: height * 0.12,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Platform.OS === "ios" ? 0 : 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: COLORS.primary.text,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Hi, Oratile
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Platform.OS === "ios" ? 0 : 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("settings")}>
            <Ionicons name="settings-outline" size={35} color="#A1A3AB" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
