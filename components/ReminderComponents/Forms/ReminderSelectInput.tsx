import { View, Text } from "react-native";
import React, { Fragment } from "react";
import { CheckIcon, Select } from "native-base";

export default function ReminderSelectInput({
  medicineType,
  onValueChange,
  type = "",
  placeholder,
  chiildren,
}) {
  return (
    <Select
      bgColor={"tertiary.50"}
      borderBottomLeftRadius={type === "first" ? 14 : 0}
      borderBottomRightRadius={type === "first" ? 0 : 14}
      borderColor="primary.50"
      paddingY={10}
      borderWidth={0.5}
      selectedValue={medicineType}
      minWidth="50%"
      accessibilityLabel="Choose Medicine Type"
      placeholder={placeholder}
      _selectedItem={{
        bg: "primary.50",
        endIcon: <CheckIcon size="5" />,
      }}
      onValueChange={onValueChange}
    >
      <Select.Item label="Dose" value="dose" />
      {chiildren}
    </Select>
  );
}
