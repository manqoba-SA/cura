import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../constants/COLORS";
import { Ionicons } from "@expo/vector-icons";
import Plans from "../../constants/dummyData/plans";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Item = ({ name, time, status }) => (
  <View
    style={{
      flexDirection: "row",
      backgroundColor: "#F8F8F6",
      borderRadius: 15,
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 15,
      padding: 15,
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      // shadowRadius: 3,
    }}
  >
    <View>
      <Fontisto name="pills" size={24} color="#9B9B9B" />
    </View>
    <View>
      <Text style={{ fontFamily: "Poppins_600SemiBold" }}>{name}</Text>
      <Text style={{ color: "#9B9B9B", fontFamily: "Poppins_600SemiBold" }}>
        {time} . {status}
      </Text>
    </View>
    <View>
      <AntDesign name="right" size={20} color="#9B9B9B" />
    </View>
  </View>
);

export default function MedicineReminderScreen() {
  const { width, height } = Dimensions.get("window");
  const renderItem = ({ item }) => (
    <Item name={item.title} status={item.status} time={item.time} />
  );
  const [data, setData] = useState(Plans);
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
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{ flex: 1.0, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary.text,
              padding: 15,
              borderRadius: 18,
            }}
          >
            <Ionicons name="md-add-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
