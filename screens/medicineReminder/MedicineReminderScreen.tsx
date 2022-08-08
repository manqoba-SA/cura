import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Plans from "../../constants/dummyData/plans";
import ReminderItem from "../../components/ReminderComponents/Lists/ReminderItem";
import ReminderBox from "../../components/ReminderComponents/Box/ReminderBox";
import ReminderAddButton from "../../components/ReminderComponents/Buttons/ReminderAddButton";

export default function MedicineReminderScreen() {
  const renderItem = ({ item }) => (
    <ReminderItem name={item.title} status={item.status} time={item.time} />
  );
  const [data, setData] = useState(Plans);
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
          <ReminderAddButton />
        </View>
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
