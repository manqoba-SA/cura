import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Actionsheet, Box, FormControl } from "native-base";
import ReminderInputForm from "../Forms/ReminderInputForm";
import ReminderSelectInput from "../Forms/ReminderSelectInput";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-date-picker";

export default function ReminderActionSheet({ isOpen, onClose }) {
  let [medicineType, setMedicineType] = useState("pills");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
  ]);

  const [date, setDate] = useState(new Date());
  const [open1, setOpen1] = useState(false);
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content bg={"#fff"}>
        <View>
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 20 }}>
            Add Plan
          </Text>
        </View>
        <View style={{ marginHorizontal: 20, width: "100%" }}>
          <View style={{ marginHorizontal: 25 }}>
            <FormControl w="100%">
              <FormControl.Label>Pill/Medicine Name</FormControl.Label>
              <ReminderInputForm
                placeholder={"eg.panado"}
                icon={<Fontisto name="pills" size={30} color="#9B9B9B" />}
              />
            </FormControl>
          </View>
          <View style={{ marginHorizontal: 25, marginTop: 10 }}>
            <FormControl w="100%">
              <FormControl.Label>Dose Amount & Medicine Type</FormControl.Label>

              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <ReminderInputForm
                  type="dose"
                  placeholder={"Dose Amount"}
                  icon={
                    <MaterialCommunityIcons
                      name="pill"
                      size={24}
                      color="#9B9B9B"
                    />
                  }
                />
                <ReminderSelectInput
                  medicineType={medicineType}
                  onValueChange={(itemValue) => setMedicineType(itemValue)}
                />
              </View>
            </FormControl>
          </View>
          <View style={{ marginHorizontal: 25, marginTop: 10 }}>
            <FormControl w="100%">
              <FormControl.Label>
                For How Long You Gonna Take?
              </FormControl.Label>

              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  // paddingHorizontal: 10,
                }}
              >
                <ReminderInputForm
                  type="dose"
                  placeholder={"How Long"}
                  icon={
                    <FontAwesome5
                      name="business-time"
                      size={24}
                      color="#9B9B9B"
                    />
                  }
                />
                <ReminderSelectInput
                  medicineType={medicineType}
                  onValueChange={(itemValue) => setMedicineType(itemValue)}
                />
              </View>
            </FormControl>
          </View>
          <View style={{ marginHorizontal: 25, marginTop: 10 }}>
            <FormControl w="100%">
              <FormControl.Label>
                How often do you take this medicine?
              </FormControl.Label>
              <DropDownPicker
                style={{
                  backgroundColor: "#F8F8F6",
                  borderWidth: 0,
                  borderRadius: 14,
                }}
                textStyle={{
                  fontSize: 15,
                  color: "#a1a1aa",
                }}
                mode="BADGE"
                multiple={true}
                min={4}
                max={5}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </FormControl>
          </View>
          <View style={{ marginHorizontal: 25, marginTop: 10 }}>
            <FormControl w="100%">
              <FormControl.Label>Notification</FormControl.Label>

              <TouchableOpacity onPress={() => setOpen1(true)}>
                <Text>Click</Text>
              </TouchableOpacity>
              <DatePicker
                modal
                mode="time"
                open={open1}
                date={date}
                onConfirm={(date) => {
                  setOpen1(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen1(false);
                }}
              />
            </FormControl>
          </View>
        </View>
      </Actionsheet.Content>
    </Actionsheet>
  );
}

const styles = StyleSheet.create({});
