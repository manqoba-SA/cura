import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const ReminderItem = ({ name, time, status }) => (
  <View style={styles.container}>
    <View>
      <Fontisto name="pills" size={24} color="#9B9B9B" />
    </View>
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subTitle}>
        {time} . {status}
      </Text>
    </View>
    <View>
      <AntDesign name="right" size={20} color="#9B9B9B" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F8F8F6",
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    padding: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
  },
  title: { fontFamily: "Poppins_600SemiBold" },
  subTitle: { color: "#9B9B9B", fontFamily: "Poppins_600SemiBold" },
});

export default ReminderItem;
