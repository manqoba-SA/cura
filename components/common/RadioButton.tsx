import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ColorPicker } from "react-native-btr";
import COLORS from "../../constants/COLORS";

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View style={styles.radioInputWrap}>
      {data.map((item) => {
        return (
          <TouchableOpacity
            style={[
              styles.radioBtn,
              item.value === userOption ? styles.selected : null,
            ]}
            onPress={() => selectHandler(item.value)}
          >
            <Text
              style={[
                styles.text,
                item.value === userOption ? styles.selected : null,
              ]}
            >
              {item.value}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  radioInputWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  radioBtn: {
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#F8F8F6",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    color: "#A1A3AB",
  },
  selected: {
    backgroundColor: COLORS.primary.text,
    color: "#fff",
  },
});
