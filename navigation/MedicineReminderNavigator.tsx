import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/homeScreens.jsx/Home";
import MedicineReminderScreen from "../screens/medicineReminder/MedicineReminderScreen";

export default function MedicineReminderNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={MedicineReminderScreen}
        name="medineReminderScreen"
      />
    </Stack.Navigator>
  );
}