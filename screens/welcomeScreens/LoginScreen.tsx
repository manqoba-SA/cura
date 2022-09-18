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

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onSignInPress = () => {
    console.warn("Sign In");
  };
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
              setValue={setEmail}
              secureTextEntry={false}
            />
          </FormControl>
          <FormControl w="100%">
            <FormControl.Label>Password</FormControl.Label>
            <CustomInput
              placeholder={"Password"}
              value={email}
              setValue={setEmail}
              secureTextEntry={false}
            />
          </FormControl>
        </View>
        <View style={styles.btnWrapper}>
          <CustomButton
            text="Sign In"
            onPress={() => console.log("Make Account")}
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
