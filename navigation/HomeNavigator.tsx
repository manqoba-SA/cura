import React, { useEffect, useState } from "react";
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
import AddSymptomsScreen from "../screens/diagnoseScreens/AddSymptomsScreen";
import AssessmentScreen from "../screens/diagnoseScreens/AssessmentScreen";
import NoticeScreen from "../screens/diagnoseScreens/NoticeScreen";
import ReportScreen from "../screens/diagnoseScreens/resultsScreens/ReportScreen";
import HerbsScreen from "../screens/diagnoseScreens/resultsScreens/herbsScreens/HerbsScreen";
import HomeRemediesScreen from "../screens/diagnoseScreens/resultsScreens/homeRemedyScreens/HomeRemediesScreen";
import DoctorsScreen from "../screens/diagnoseScreens/resultsScreens/doctorScreens/DoctorsScreen";
import CauseScreen from "../screens/diagnoseScreens/resultsScreens/CauseScreen";
import RemedyDetailScreen from "../screens/diagnoseScreens/resultsScreens/homeRemedyScreens/RemedyDetailScreen";
import DoctorDetailsScreen from "../screens/diagnoseScreens/resultsScreens/doctorScreens/DoctorDetailsScreen";
import HerbDetailsScreen from "../screens/diagnoseScreens/resultsScreens/herbsScreens/HerbDetailsScreen";
import { firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import RegisterWelcomeScreen from "../screens/welcomeScreens/RegisterWelcomeScreen";
import SicknessesAssessment from "../screens/diagnoseScreens/SicknessesAssessment";

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
        component={AddSymptomsScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="AddSymptoms"
      />
      <Stack.Screen
        component={AssessmentScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="AssessmentScreen"
      />
      <Stack.Screen
        component={SicknessesAssessment}
        name="SicknessesAssessment"
      />
      <Stack.Screen component={NoticeScreen} name="NoticeScreen" />
      <Stack.Screen component={ReportScreen} name="ReportScreen" />
      <Stack.Screen
        component={CauseScreen}
        options={{
          headerShown: true,
          title: "Influenza Flu",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="CauseScreen"
      />
      <Stack.Screen
        component={HomeRemediesScreen}
        options={{
          headerShown: true,
          title: "Home Remedies",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="HomeRemediesScreen"
      />
      <Stack.Screen
        component={HerbsScreen}
        options={{
          headerShown: true,
          title: "Herbs",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="HerbsScreen"
      />
      <Stack.Screen
        component={RemedyDetailScreen}
        options={{
          headerShown: true,
          title: "Honey Tea",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="RemedyDetailScreen"
      />
      <Stack.Screen
        component={HerbDetailsScreen}
        options={{
          headerShown: true,
          title: "Honey Tea",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="HerbDetailsScreen"
      />
      <Stack.Screen
        component={DoctorsScreen}
        options={{
          headerShown: true,
          title: "Doctors",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="DoctorsScreen"
      />
      <Stack.Screen
        component={DoctorDetailsScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="DoctorDetailsScreen"
      />

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
