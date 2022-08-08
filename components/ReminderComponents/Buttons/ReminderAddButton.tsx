import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../../constants/COLORS";
import { Ionicons } from "@expo/vector-icons";

export default function ReminderAddButton() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary.text,
        padding: 15,
        borderRadius: 18,
      }}
    >
      <Ionicons name="md-add-outline" size={24} color="white" />
    </TouchableOpacity>
  );
}
