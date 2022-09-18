import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { FormControl, KeyboardAvoidingView } from "native-base";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../components/CustomButtons/CustomButton";
import CustomInput from "../../components/CustomInputs/CustomInput";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { AvoidSoftInput } from "react-native-avoid-softinput";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      {/* <KeyboardAvoidingView behavior="position"> */}
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Create your account</Text>
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
          <FormControl w="100%">
            <FormControl.Label>Confirm Password</FormControl.Label>
            <CustomInput
              placeholder={"Confirm Password"}
              value={email}
              setValue={setEmail}
              secureTextEntry={false}
            />
          </FormControl>
        </View>
        <View style={styles.btnWrapper}>
          <CustomButton
            text="Sign Up"
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
  },
  btnWrapper: {
    marginTop: 20,
    // flex: 1,
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
