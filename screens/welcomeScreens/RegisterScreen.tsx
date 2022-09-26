import { FormControl, KeyboardAvoidingView } from "native-base";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../components/CustomButtons/CustomButton";
import CustomInput from "../../components/CustomInputs/CustomInput";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";
import { FirebaseError } from "firebase/app";
import COLORS from "../../constants/COLORS";
import * as Progress from "react-native-progress";
import navigationTheme from "../../navigation/navigationTheme";
import { mapAuthCodeToMessage } from "./authFunctions/firebaseAuthMessages";
import KeyboardAvoidingWrapper from "../../components/common/KeyboardAvoidingWrapper";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    setLoading(true);
    if (password !== password2) {
      setError("Passwords do not match");
      setLoading(false);
    } else {
      // Create a new user with Firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
          // Dispatch the user information for persistence in the redux state
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
            })
          );
          setLoading(false);
          navigation.navigate("RegisterWelcomeScreen");
        })
        .catch((error) => {
          let errorMessage = mapAuthCodeToMessage(error.code);
          setError(errorMessage);
          setLoading(false);
        });
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingWrapper>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>Create your account</Text>
          <Text style={styles.descriptionText}>
            Register an account to access best digital health services
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
                <FormControl w="100%">
                  <FormControl.Label>Confirm Password</FormControl.Label>
                  <CustomInput
                    placeholder={"Confirm Password"}
                    value={password2}
                    setValue={(newText) => setPassword2(newText)}
                    secureTextEntry={true}
                  />
                </FormControl>
                {error ? (
                  <View style={styles.errorTextWrap}>
                    <Text style={styles.errorText}>{error}</Text>
                  </View>
                ) : null}
              </View>
            )}
            <View style={styles.btnWrapper}>
              <CustomButton text="Sign Up" onPress={register} />
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
      </KeyboardAvoidingWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1.0,
  },
  contentContainer: {
    marginHorizontal: 25,
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
    flex: 1.0,
  },
  errorTextWrap: { marginTop: 5, alignItems: "center" },
  errorText: {
    color: "red",
    fontFamily: "Poppins_400Regular",
  },
  btnWrapper: {
    marginTop: 70,
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
