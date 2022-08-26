import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Plans from "../../constants/dummyData/plans";
import ReminderItem from "../../components/ReminderComponents/Lists/ReminderItem";
import ReminderBox from "../../components/ReminderComponents/Box/ReminderBox";
import ReminderAddButton from "../../components/ReminderComponents/Buttons/ReminderAddButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DatePicker from "react-native-date-picker";
import {
  Actionsheet,
  Box,
  CheckIcon,
  FormControl,
  Icon,
  Input,
  Select,
  useDisclose,
} from "native-base";

import ReminderInputForm from "../../components/ReminderComponents/Forms/ReminderInputForm";
import ReminderSelectInput from "../../components/ReminderComponents/Forms/ReminderSelectInput";
import DropDownPicker from "react-native-dropdown-picker";
import ReminderActionSheet from "../../components/ReminderComponents/ActionSheet/ReminderActionSheet";

export default function MedicineReminderScreen() {
  const renderItem = ({ item }) => (
    <ReminderItem name={item.title} status={item.status} time={item.time} />
  );
  const [data, setData] = useState(Plans);
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <ReminderBox />
        <View style={styles.plansWrap}>
          <Text style={styles.plansHeaderText}>Daily Review</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.addButtonWrap}>
          <ReminderAddButton onPress={onOpen} />
        </View>
        <ReminderActionSheet isOpen={isOpen} onClose={onClose} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#E5E5E5", flex: 1 },
  wrap: {
    flex: 1.0,
    justifyContent: "space-around",
    alignItems: "center",
  },
  plansHeaderText: { fontSize: 15, fontFamily: "Poppins_600SemiBold" },
  plansWrap: { flex: 2.0, width: "80%" },
  addButtonWrap: { flex: 1.0, alignItems: "center", justifyContent: "center" },
});
