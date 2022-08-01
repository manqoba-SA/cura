import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import MedicineReminderNavigator from "./MedicineReminderNavigator";
import HealthLibraryNavigator from "./HealthLibraryNavigator";
import ShopNavigator from "./ShopNavigator";
import { AntDesign } from "@expo/vector-icons";

interface TabBarIconProps {
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontFamily: "Poppins_400Regular" },
      }}
    >
      <Tab.Screen
        component={HomeNavigator}
        name="Home"
        options={{
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <AntDesign color={color} name="home" size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={MedicineReminderNavigator}
        name="Reminder"
        options={{
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <MaterialCommunityIcons
              color={color}
              name="calendar-clock-outline"
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        component={HealthLibraryNavigator}
        name="Library"
        options={{
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <MaterialCommunityIcons
              color={color}
              name="book-education-outline"
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        component={ShopNavigator}
        name="Shop"
        options={{
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <MaterialCommunityIcons
              color={color}
              name="shopping-outline"
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
