import { View, Text } from "react-native";
import React from "react";
import { CheckIcon, Select } from "native-base";

export default function ReminderSelectInput({ medicineType, onValueChange }) {
  return (
    <Select
      bgColor={"tertiary.50"}
      borderRadius={14}
      // borderRightRadius={14}
      paddingY={10}
      borderWidth={0}
      selectedValue={medicineType}
      minWidth="50%"
      accessibilityLabel="Choose Medicine Type"
      placeholder="Medicine Type"
      _selectedItem={{
        bg: "primary.50",
        endIcon: <CheckIcon size="5" />,
      }}
      onValueChange={onValueChange}
    >
      <Select.Item label="UX Research" value="ux" />
      <Select.Item label="Web Development" value="web" />
    </Select>
  );
}
