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
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function CustomHeader({ navigation, title, type = "default" }) {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <View
        style={{
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
            {title}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Platform.OS === "ios" ? 0 : 20,
          }}
        >
          {type === "library" ? (
            <Text>{""}</Text>
          ) : (
            <>
              {type === "shop" ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("settings")}
                    style={{ marginRight: 15 }}
                  >
                    <MaterialIcons
                      name="favorite-outline"
                      size={30}
                      color="#409849"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("settings")}
                  >
                    <AntDesign name="shoppingcart" size={30} color="#409849" />
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate("settings")}
                >
                  <Ionicons name="settings-outline" size={35} color="#A1A3AB" />
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
      </View>
    </View>
  );
}
