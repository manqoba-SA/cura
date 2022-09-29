import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigator from "./TabsNavigator";
import { useSelector } from "react-redux";
import { firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import RegisterWelcomeScreen from "../screens/welcomeScreens/RegisterWelcomeScreen";
import Loading from "../components/common/Loading";

interface TabBarIconProps {
  color: string;
  size: number;
}

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const currentUser = useSelector((state: any) => state.user);
  const getUserdetails = async () => {
    const docRef = doc(firestore, "users", currentUser.user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUser(docSnap.data());
      setLoading(false);
    } else {
      console.log("No such document!");
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserdetails();
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user?.firstName === "" &&
        user?.lastName === "" &&
        user?.age === 0 &&
        !user?.gender ? (
          <Stack.Screen
            component={RegisterWelcomeScreen}
            name="RegisterWelcomeScreen"
          />
        ) : (
          <Stack.Screen name="tabs" component={TabsNavigator} />
        )}
      </Stack.Navigator>
    );
  }
}
