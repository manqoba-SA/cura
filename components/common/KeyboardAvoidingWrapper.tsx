import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from "react-native";
import React from "react";
import { KeyboardAvoidingView } from "native-base";

export default function KeyboardAvoidingWrapper({ children }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
