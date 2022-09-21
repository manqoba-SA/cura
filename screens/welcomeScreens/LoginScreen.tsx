import { FormControl, KeyboardAvoidingView } from "native-base";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import CustomButton from "../../components/CustomButtons/CustomButton";
import CustomInput from "../../components/CustomInputs/CustomInput";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { login } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import COLORS from "../../constants/COLORS";
import * as Progress from "react-native-progress";
import { InvalidEmailError } from "./LoginError";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSignInPress = (e) => {
    e.preventDefault();

    // Sign in an existing user with Firebase
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      // returns  an auth object after a successful authentication
      // userAuth.user contains all our user details
      .then((userAuth) => {
        // store the user's information in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
        setLoading(false);
        navigation.navigate("home");
      })
      // display function(error)the error if any
      .catch(function (error) {
        // alert(err);
        // setError(error.message);
        setLoading(false);
        setError("Incorrect email or password");
      });
  };
  // };

  return (
    <>
      <View style={styles.container} showsVerticalScrollIndicator={false}>
        {/* <KeyboardAwareScrollView> */}
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>Log In Your Account</Text>
          <Text style={styles.descriptionText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <View style={styles.formsWrapper}>
            {loading ? (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1.0,
                }}
              >
                <Progress.Circle
                  thickness={5}
                  indeterminate={true}
                  color={COLORS.primary.text}
                />
              </View>
            ) : (
              <View>
                <FormControl w="100%">
                  <FormControl.Label>Email Address</FormControl.Label>
                  <CustomInput
                    placeholder={"Email Address"}
                    value={email}
                    setValue={(newText) => setEmail(newText)}
                    secureTextEntry={false}
                  />
                </FormControl>
                <FormControl w="100%">
                  <FormControl.Label>Password</FormControl.Label>
                  <CustomInput
                    placeholder={"Password"}
                    value={password}
                    setValue={(newText) => setPassword(newText)}
                    secureTextEntry={true}
                  />
                </FormControl>
                <TouchableOpacity style={styles.forgotPasswordWrap}>
                  <Text style={styles.forgotPasswordText}>
                    I forgot my password
                  </Text>
                </TouchableOpacity>
                {error ? (
                  <View style={styles.errorTextWrap}>
                    <Text style={styles.errorText}>{error}</Text>
                  </View>
                ) : null}
              </View>
            )}

            <View style={styles.btnWrapper}>
              <CustomButton
                text="Sign In"
                onPress={onSignInPress}
                disabled={loading}
              />
              <View style={styles.orTextWrapper}>
                <Text style={styles.descriptionText}>or sign up with</Text>
              </View>
              <View style={styles.socialsWrapper}>
                <TouchableOpacity style={styles.socialIcon}>
                  <MaterialIcons name="facebook" size={34} color="#18ACFE" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                  <AntDesign name="apple1" size={30} color="#283544" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                  <AntDesign name="google" size={30} color="#EB4335" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1.0,
  },
  contentContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    flex: 1.0,
  },
  headerText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },
  descriptionText: {
    color: "#5B5B5B",
    fontSize: 15,
  },
  formsWrapper: {
    marginTop: 20,
    flex: 3.0,
  },
  forgotPasswordWrap: { marginTop: 5 },
  forgotPasswordText: {
    color: COLORS.primary.text,
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
  },
  errorTextWrap: { marginTop: 5, alignItems: "center" },
  errorText: {
    color: "red",
    fontFamily: "Poppins_400Regular",
  },
  btnWrapper: {
    marginTop: 100,
  },
  orTextWrapper: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  socialsWrapper: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: {
    marginHorizontal: 5,
  },
});
