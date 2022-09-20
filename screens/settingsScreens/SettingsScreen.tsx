import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { ScrollView } from "native-base";
import CustomButton from "../../components/CustomButtons/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/userSlice";
import { auth } from "../../firebase/firebase";

const Item = ({ title, description }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 12,
        marginVertical: 7,
      }}
    >
      <View>
        <Text style={{ fontSize: 16, fontFamily: "Poppins_400Regular" }}>
          {title}
        </Text>
        <Text
          style={{
            color: "#9B9B9B",
            fontSize: 13,
            fontFamily: "Poppins_400Regular",
          }}
        >
          {description}
        </Text>
      </View>
      <AntDesign name="right" size={15} color="#9B9B9B" />
    </TouchableOpacity>
  );
};

export default function SettingsScreen({ navigation }) {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
  };

  // const user = useSelector(selectUser);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstWrap}>
        <Text style={styles.categotyText}>Account Settings</Text>
        <View style={styles.secondWrap}>
          <Item title={"My Profile"} description="Edit Your Profile" />
          <Item title={"Privacy and notification"} description="Legally" />
          <Item title={"Language"} description="Change app language" />
        </View>
        <Text style={styles.categotyText}>Support</Text>
        <View style={styles.secondWrap}>
          <Item title={"Feedback"} description="Let’s hear from you" />
          <Item title={"About curaHelth"} description="About Us" />
          <Item title={"Rate curaHelth"} description="Rate our app" />
        </View>
        <CustomButton text={"Log Out"} onPress={logoutOfApp} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#E5E5E5", flex: 1.0 },
  firstWrap: { marginTop: 10, marginHorizontal: 15 },
  secondWrap: { marginTop: 10 },
  categotyText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    marginTop: 20,
  },
});
