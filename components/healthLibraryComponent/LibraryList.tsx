import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/COLORS";
import { Poppins_300Light } from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, description, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text
        numberOfLines={1}
        style={{ color: COLORS.primary.text, fontFamily: "Poppins_400Regular" }}
      >
        {description}
      </Text>
    </View>
    <View>
      <Ionicons name="md-enter-outline" size={35} color="black" />
    </View>
  </TouchableOpacity>
);

export default function LibraryList({
  searchPhrase,
  setCLicked,
  data,
  onPress,
}) {
  // const navigation = useNavigation();
  const renderItem = ({ item, section: { title } }) => {
    // when no input, show all
    if (searchPhrase === "") {
      //filter by category
      if (item.category === title) {
        return (
          <Item
            name={item.name}
            description={item.description}
            onPress={onPress}
          />
        );
      } else {
        return null;
      }
    }
    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <Item
          name={item.name}
          description={item.description}
          onPress={onPress}
        />
      );
    }
    // filter of the description
    if (
      item.description
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <Item
          name={item.name}
          description={item.description}
          onPress={onPress}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setCLicked(false);
        }}
      >
        <SectionList
          sections={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                marginHorizontal: 20,
                marginVertical: 15,
                fontFamily: "Poppins_400Regular",
                fontSize: 15,
              }}
            >
              {title}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list__container: {
    width: "100%",
  },
  item: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
  },
});
