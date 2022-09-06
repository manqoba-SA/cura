import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/homeScreens.jsx/Home";
// import Settings from "../screens/SettingsScreen";

import CustomHeader from "../components/CustomHeader/CustomHeader";
import DiagnoseScreen from "../screens/diagnoseScreens/DiagnoseScreen";
import SettingsScreen from "../screens/settingsScreens/SettingsScreen";
import HealthLibraryScreen from "../screens/healthLibraryScreens/HealthLibraryScreen";
import MedicineReminderScreen from "../screens/medicineReminder/MedicineReminderScreen";
import ArticlesScreen from "../screens/articlesScreens/ArticlesScreen";
import COLORS from "../constants/COLORS";
import ArticleDetailsScreen from "../screens/articlesScreens/ArticleDetailsScreen";
import SecondDiagnoseScreen from "../screens/diagnoseScreens/SecondDiagnoseScreen";
import ThirdDiagnoseScreen from "../screens/diagnoseScreens/ThirdDiagnoseScreen";

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
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="diagnosis"
      />
      <Stack.Screen
        component={SecondDiagnoseScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="SecondDiagnosis"
      />
      <Stack.Screen
        component={ThirdDiagnoseScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="ThirdDiagnosis"
      />
      <Stack.Screen
        component={SettingsScreen}
        name="settings"
        options={{
          headerShown: true,
          header: (props) => (
            <CustomHeader
              navigation={""}
              type="library"
              title={"Settings"}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen component={HealthLibraryScreen} name="healthLibrary" />
      <Stack.Screen
        component={ArticlesScreen}
        options={({ route }) => ({
          headerShown: true,
          title: "Articles",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
            height: 50,
          },
          headerBackTitleStyle: {
            fontSize: 15,
            fontFamily: "Poppins_400Regular",
          },
          headerBackTitle: "Back",
          headerTintColor: COLORS.primary.text,
          headerTitleAlign: "center",
        })}
        name="articlesScreen"
      />
      <Stack.Screen
        component={ArticleDetailsScreen}
        name="articleDetails"
        options={({ route }) => ({
          headerShown: true,
          title: route.params.title,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
            height: 50,
          },
          headerBackTitleStyle: {
            fontSize: 15,
            fontFamily: "Poppins_400Regular",
          },
          headerBackTitle: "Back",
          headerTintColor: COLORS.primary.text,
          headerTitleAlign: "center",
        })}
      />
      {/* <Stack.Screen component={MedicineReminderScreen} name="reminder" /> */}
    </Stack.Navigator>
  );
}
