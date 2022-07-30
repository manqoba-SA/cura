import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import shopScreen from "../screens/shopScreens/shopScreen";

export default function ShopNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={shopScreen} name="shopScreen" />
    </Stack.Navigator>
  );
}
