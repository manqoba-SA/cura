import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import CustomButton from "../CustomButtons/CustomButton";

export default function RegisterSuccess({ firstName, onPress }) {
  const successImage = require("../../assets/images/illustrations/success.png");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={successImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.WelcomeText}>Welcome to Cura {firstName}!</Text>
        <Text style={styles.subtitle}>
          You can now start using the app.{"\n"}You can always change your
          preferences in the settings.
        </Text>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={onPress} text="Start" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    // flex: 1,
    alignItems: "center",
  },
  textContainer: {
    marginTop: 10,
    // flex: 2,
    backgroundColor: "#fff",
    marginHorizontal: 15,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  WelcomeText: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Poppins_600SemiBold",
    color: "#666666",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    marginTop: 5,
    color: "#666666",
  },
  buttonContainer: {
    marginTop: 20,
    // marginHorizontal: 15,
  },
});
