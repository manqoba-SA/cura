import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../constants/COLORS";
import { Icon } from "@iconify/react";
import settingsIcon from "@iconify/icons-arcticons/settings";
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <View style={{ backgroundColor: "#E5E5E5", flex: 1.0 }}>
      <View
        style={{
          backgroundColor: "#fff",
          height: "15%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <View style={{ flex: 4.0, marginHorizontal: 15 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: COLORS.primary.text,
                fontFamily: "Poppins_400Regular",
              }}
            >
              Hello Oratile
            </Text>
          </View>
          <View style={{ flex: 1.0 }}>
            <TouchableOpacity onPress={() => navigation.navigate("settings")}>
              <Ionicons name="settings-outline" size={35} color="#A1A3AB" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
