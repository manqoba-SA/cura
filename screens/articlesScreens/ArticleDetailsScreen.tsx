import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Avatar, CheckIcon, Image, Select } from "native-base";
import {
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function ArticleDetailsScreen() {
  let [language, setLanguage] = React.useState("");
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          // width: "50%",
          justifyContent: "space-between",
          // alignItems: "flex-end",
          // backgroundColor: "#ccc",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar
            bg="indigo.500"
            alignSelf="flex-start"
            size="md"
            source={{
              uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          >
            RS
          </Avatar>
          <Text
            style={{
              fontFamily: "Poppins_300Light",
              color: "#ccc",
              marginLeft: 5,
            }}
          >
            Manqoba
          </Text>
        </View>
        <Select
          style={{ backgroundColor: "#fff" }}
          selectedValue={language}
          minWidth="200"
          accessibilityLabel="Choose Language"
          placeholder="Choose Language"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </View>
      <View>
        <Text style={styles.title}>Dealing With Covid</Text>
        <View style={styles.timePosted}>
          <Text style={styles.timePostedFont}>
            Published on August 17, 2022, 12:00 AM
          </Text>
          <Text style={styles.timePostedFont}>4 min read</Text>
        </View>
        <View>
          {/* <Image source={require("../../../cura/assets/images/")} */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 30,
    textAlign: "center",
    marginHorizontal: 15,
    marginTop: 10,
  },
  timePosted: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  timePostedFont: {
    fontFamily: "Poppins_300Light",
  },
});
