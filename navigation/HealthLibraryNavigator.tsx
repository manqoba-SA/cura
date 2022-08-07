import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HealthLibraryScreen from "../screens/healthLibraryScreens/HealthLibraryScreen";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import SicknessDetailScreen from "../screens/healthLibraryScreens/SicknessDetailScreen";
import COLORS from "../constants/COLORS";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function HealthLibraryNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={HealthLibraryScreen}
        options={{
          headerShown: true,
          header: (props) => (
            <CustomHeader
              title={"Health Library"}
              navigation={""}
              type={"library"}
              {...props}
            />
          ),
        }}
        name="healthLibrary"
      />
      <Stack.Screen
        component={SicknessDetailScreen}
        name="sicknessDetail"
        options={({ route }) => ({
          headerShown: true,
          title: route.params.id,
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
    </Stack.Navigator>
  );
}
