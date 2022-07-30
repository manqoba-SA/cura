import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function CustomInput({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#e8e8e8",
    padding: 10,
    marginVertical: 7,
  },
  input: {},
});
