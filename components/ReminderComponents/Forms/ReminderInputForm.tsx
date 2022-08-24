import { View, Text } from "react-native";
import React from "react";
import { Icon, Input } from "native-base";
import { Fontisto } from "@expo/vector-icons";

export default function ReminderInputForm({
  type = "default",
  placeholder,
  icon,
}) {
  return (
    <Input
      w={type === "dose" ? "50%" : null}
      textAlign={type === "dose" ? "center" : null}
      bgColor={"tertiary.50"}
      borderRadius={14}
      paddingY={10}
      borderWidth={0}
      size="lg"
      placeholder={placeholder}
      InputLeftElement={<Icon as={icon} size={6} ml="5" color="muted.400" />}
    />
  );
}
