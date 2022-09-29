import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Dimensions, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { extendTheme, NativeBaseProvider } from "native-base";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { login, logout, selectUser } from "./redux/features/userSlice";
import * as Progress from "react-native-progress";
import COLORS from "./constants/COLORS";
const Stack = createNativeStackNavigator();

export default function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#409849",
      },
      secondary: {
        50: "#A1A3AB",
      },
      tertiary: {
        50: "#F8F8F6",
      },

      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: "#d97706",
      },
    },
  });

  // check at page load if a user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
        setIsReady(true);
      } else {
        dispatch(logout());
        setIsReady(true);
      }
    });
  }, []);

  if (!fontsLoaded || !isReady) {
    return (
      <View style={styles.container}>
        <Progress.Circle
          thickness={5}
          indeterminate={true}
          color={COLORS.primary.text}
        />
      </View>
    );
  } else {
    return (
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer theme={navigationTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
