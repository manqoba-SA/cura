import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ShopScreen from "../screens/shopScreens/ShopScreen";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import ProductDetailScreen from "../screens/shopScreens/ProductDetailScreen";
import ShopScreen from "../screens/shopScreens/shopScreen";

export default function ShopNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={ShopScreen}
        options={{
          headerShown: true,
          header: (props) => (
            <CustomHeader
              title={"Shop Products/Herbs"}
              navigation={""}
              type={"shop"}
              {...props}
            />
          ),
        }}
        name="shopScreen"
      />
      <Stack.Screen
        component={ProductDetailScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#E5E5E5",
          },
        }}
        name="ProductDetailScreen"
      />
    </Stack.Navigator>
  );
}
