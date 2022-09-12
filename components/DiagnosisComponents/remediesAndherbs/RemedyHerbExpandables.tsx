import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../../constants/COLORS";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import IngredienceExpandableContent from "./IngredienceExpandableContent";

export default function RemedyHerbExpandables({ item, onClickFunction }) {
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);
  return (
    <View style={{ marginVertical: 15 }}>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}
      >
        <>{item.icon}</>
        <Text style={styles.headerText}>{item.category_name}</Text>
        {item.isExpanded ? (
          <AntDesign name="caretup" size={24} color="#9AD7A0" />
        ) : (
          <AntDesign name="caretdown" size={24} color="#409849" />
        )}
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        {/*Content under the header of the Expandable List Item*/}

        {item.category_name === "Ingrediens" ? (
          <IngredienceExpandableContent item={item} />
        ) : (
          item.subcategory.map((item, key) => (
            <View key={key} style={styles.content}>
              <Text style={styles.text}>{item.val}</Text>
              {/* <View style={styles.separator} /> */}
            </View>
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: COLORS.primary.text,
  },
  separator: {
    height: 0.5,
    backgroundColor: "#E5E5E5",
    width: "95%",
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: "#606070",
    padding: 5,
    lineHeight: 20,
    fontFamily: "Poppins_400Regular",
    textAlign: "justify",
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#E5E5E5",
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
});
