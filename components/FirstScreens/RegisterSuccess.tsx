import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function RegisterSuccess() {
  const successImage = require("../../assets/images/illustrations/success.png");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={successImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.WelcomeText}>
          Welcome to Cura!{"\n"}
          {"\n"}You can now start using the app✌️.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    marginTop: 10,
    flex: 2,
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
});
