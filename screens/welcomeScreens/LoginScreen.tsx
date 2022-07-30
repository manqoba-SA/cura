import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Logo from "../../assets/images/illustrations/undraw_doctors_hwty.png";
import CustomButton from "../../components/CustomButtons/CustomButton";
import CustomInput from "../../components/CustomInputs/CustomInput";
import COLORS from "../../constants/COLORS";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onSignInPress = () => {
    console.warn("Sign In");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder={"Email Address"}
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder={"Password"}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={onSignInPress} text="Login" />
        <CustomButton
          onPress={onSignInPress}
          text="I forgot my password"
          type="tertiary"
        />
        <Text style={{ marginHorizontal: 10 }}>or continue with</Text>
        <CustomButton
          onPress={onSignInPress}
          text="Sign In with Facebook"
          bgColor={"#E7EAF4"}
          fgColor={"#4765A9"}
        />
        <CustomButton
          onPress={onSignInPress}
          text="Sign In with Google"
          bgColor={"#FAE9EA"}
          fgColor={"#DD4D44"}
        />
        <CustomButton
          onPress={onSignInPress}
          text="Sign In with Apple"
          bgColor={"#e3e3e3"}
          fgColor={"#363636"}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.light.background,
    marginVertical: 10,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});
