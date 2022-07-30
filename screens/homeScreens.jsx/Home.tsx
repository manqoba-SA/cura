import React from "react";
import { Text, View } from "react-native";
import COLORS from "../../constants/COLORS";

export default function Home() {
  return (
    <View style={{ backgroundColor: "#D9D9D9", flex: 1.0 }}>
      <View style={{ backgroundColor: "#fff", height: 100, width: "100%" }}>
        <View style={{ flexDirection: "row", marginTop: 45 }}>
          <View style={{ flex: 1.0, marginHorizontal: 15 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: COLORS.primary.text,
              }}
            >
              Hello Oratile
            </Text>
          </View>
          <View style={{ flex: 1.0 }}>
            <Text>Settings</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
