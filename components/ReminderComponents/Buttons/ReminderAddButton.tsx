import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../../constants/COLORS";
import { Ionicons } from "@expo/vector-icons";

export default function ReminderAddButton({ onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary.text,
        padding: 15,
        borderRadius: 18,
      }}
      onPress={onPress}
    >
      <Ionicons name="md-add-outline" size={24} color="white" />
    </TouchableOpacity>
  );
}
