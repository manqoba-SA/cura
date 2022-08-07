import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HealthLibraryScreen from "../screens/healthLibraryScreens/HealthLibraryScreen";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import SicknessDetailScreen from "../screens/healthLibraryScreens/SicknessDetailScreen";

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
      <Stack.Screen component={SicknessDetailScreen} name="sicknessDetail" />
    </Stack.Navigator>
  );
}
