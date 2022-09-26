import { Alert, FormControl, KeyboardAvoidingView } from "native-base";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../components/CustomButtons/CustomButton";
import CustomInput from "../../components/CustomInputs/CustomInput";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";
import { FirebaseError } from "firebase/app";
import COLORS from "../../constants/COLORS";
import * as Progress from "react-native-progress";
import navigationTheme from "../../navigation/navigationTheme";
import { mapAuthCodeToMessage } from "./authFunctions/firebaseAuthMessages";
import CustomAlert from "../../components/FirstScreens/CustomAlert";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    // e.preventDefault();
    setLoading(true);
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        // setEmail("");
        setSent(true);
        setLoading(false);
        console.log("Password reset email sent!");
      })
      .catch(function (error) {
        let errorMessage = mapAuthCodeToMessage(error.code);
        setError(errorMessage);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Reset Password</Text>
        <Text style={styles.descriptionText}>
          Enter your email address to reset your password
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
              {sent ? (
                <CustomAlert
                  header={"Reset Link Sent"}
                  message={`Please check ${email} to proceed with password reset.`}
                />
              ) : null}
              <FormControl w="100%">
                <FormControl.Label>Email Address</FormControl.Label>
                <CustomInput
                  placeholder={"Email Address"}
                  value={email}
                  setValue={(newText) => setEmail(newText)}
                  secureTextEntry={false}
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
            <CustomButton text="Submit" onPress={onSubmit} />
          </View>
        </View>
      </View>
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
