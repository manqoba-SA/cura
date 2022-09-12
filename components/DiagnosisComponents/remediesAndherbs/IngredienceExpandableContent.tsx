import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../../constants/COLORS";
import { Fontisto } from "@expo/vector-icons";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function IngredienceExpandableContent({ item }) {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Here are the Ingrediens for this home remedy
      </Text>
      {item.subcategory.map((item, key) => (
        <View key={key}>
          {item.val.map((ingredient, key2) => (
            <View key={key2}>
              <Text style={styles.ingredientName}>
                {ingredient.id}. {ingredient.name}
              </Text>
              <Image source={ingredient.image} style={styles.ingredientImage} />
            </View>
          ))}
        </View>
      ))}
      <View style={styles.lastContent}>
        <Text style={styles.text}>
          If you want any of this ingredients, check in our shop
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Fontisto name="shopping-store" size={20} color="#fff" />
          <Text style={styles.btnText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#E5E5E5",
  },
  text: {
    fontSize: 16,
    color: "#606070",
    padding: 5,
    lineHeight: 20,
    fontFamily: "Poppins_400Regular",
    textAlign: "justify",
  },
  ingredientName: {
    color: COLORS.primary.text,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
    padding: 5,
    lineHeight: 20,
  },
  ingredientImage: {
    borderRadius: 14,
    width: 326.76,
    height: 85.92,
    resizeMode: "cover",
  },
  lastContent: {
    marginTop: 20,
    alignItems: "center",
  },
  btn: {
    backgroundColor: COLORS.primary.text,
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    marginLeft: 10,
  },
});
