import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/homeScreens.jsx/Home";
// import Settings from "../screens/SettingsScreen";

import CustomHeader from "../components/CustomHeader/CustomHeader";
import DiagnoseScreen from "../screens/diagnoseScreens/DiagnoseScreen";
import SettingsScreen from "../screens/settingsScreens/SettingsScreen";
import HealthLibraryScreen from "../screens/healthLibraryScreens/HealthLibraryScreen";
import MedicineReminderScreen from "../screens/medicineReminder/MedicineReminderScreen";

export default function HomeNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={Home}
        options={{
          headerShown: true,
          header: (props) => (
            <CustomHeader navigation={""} title={"Hi, Manqoba"} {...props} />
          ),
        }}
        name="home"
      />
      <Stack.Screen
        component={DiagnoseScreen}
        options={{ headerShown: true }}
        name="diagnosis"
      />
      <Stack.Screen component={SettingsScreen} name="settings" />
      <Stack.Screen component={HealthLibraryScreen} name="healthLibrary" />
      {/* <Stack.Screen component={MedicineReminderScreen} name="reminder" /> */}
    </Stack.Navigator>
  );
}
