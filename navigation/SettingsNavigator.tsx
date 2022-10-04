import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/settingsScreens/SettingsScreen";
import CustomHeader from "../components/CustomHeader/CustomHeader";

export default function SettingsNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={SettingsScreen}
        name="settings"
        options={{
          headerShown: true,
          //   header: (props) => (
          //     <CustomHeader
          //       navigation={""}
          //       type="library"
          //       title={"Settings"}
          //       {...props}
          //     />
          //   ),
        }}
      />
    </Stack.Navigator>
  );
}
