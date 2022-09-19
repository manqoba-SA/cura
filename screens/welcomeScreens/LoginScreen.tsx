import { FormControl } from "native-base";
import React, { useState } from "react";
import {
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { login } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";

export default function LoginScreen({ navihation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onSignInPress = (e) => {
    e.preventDefault();

    // Sign in an existing user with Firebase
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
        navihation.navigate("home");
      })
      // display the error if any
      .catch((err) => {
        alert(err);
      });
  };
  // };

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Log In Your Account</Text>
        <Text style={styles.descriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <View style={styles.formsWrapper}>
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
              secureTextEntry={false}
            />
          </FormControl>
        </View>
        <View style={styles.btnWrapper}>
          <CustomButton text="Sign In" onPress={onSignInPress} />
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
  },
  btnWrapper: {
    marginTop: 20,
    right: 15,
    left: 15,
    position: "absolute",
    bottom: 75,
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
