import { View, Text } from "react-native";
import React, { Fragment } from "react";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function ReminderSelectInput({
  medicineType,
  onValueChange,
  type = "",
  placeholder,
}) {
  const howMany = [
    "Once A Day",
    "Twice",
    "Three, ",
    "Four",
    "Five",
    "Six",
    "Seven",
  ];
  const medicineTypes = ["Tablet", "Canada", "Australia", "Ireland"];
  return (
    // <Select
    //   bgColor={"tertiary.50"}
    //   borderBottomLeftRadius={type === "first" ? 14 : 0}
    //   borderBottomRightRadius={type === "first" ? 0 : 14}
    //   borderColor="primary.50"
    //   paddingY={10}
    //   borderWidth={0.5}
    //   selectedValue={medicineType}
    //   minWidth="50%"
    //   accessibilityLabel="Choose Medicine Type"
    //   placeholder={placeholder}
    //   _selectedItem={{
    //     bg: "primary.50",
    //     endIcon: <CheckIcon size="5" />,
    //   }}
    //   onValueChange={onValueChange}
    // >
    //   <Select.Item label="Dose" value="dose" />
    // </Select>

    <SelectDropdown
      data={type === "first" ? howMany : medicineTypes}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      searchPlaceHolder="Search"
      rowStyle={{ backgroundColor: "white" }}
      buttonStyle={{
        backgroundColor: "#F8F8F6",
        width: "50%",
        borderBottomLeftRadius: type === "first" ? 14 : 0,
        borderBottomRightRadius: type === "first" ? 0 : 14,
        borderWidth: 0.5,
        borderColor: "#409849",
      }}
      renderDropdownIcon={(isOpened) => {
        return (
          <FontAwesome
            name={isOpened ? "chevron-up" : "chevron-down"}
            color={"#444"}
            size={18}
          />
        );
      }}
      dropdownIconPosition={"right"}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />
  );
}
