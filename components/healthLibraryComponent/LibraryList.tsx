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
import SearchableSectionList from "./SearchableSectionList";

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
  navigation,
}) {
  const renderItem = ({ item, section: { title } }) => {
    if (item.category === title) {
      return (
        <Item
          name={item.name}
          description={item.description}
          onPress={() =>
            navigation.navigate("sicknessDetail", {
              id: item.id,
              title: item.name,
            })
          }
        />
      );
    } else {
      return null;
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
          sections={
            searchPhrase !== ""
              ? data.map((element) => {
                  return {
                    ...element,
                    data: element.data.filter((subElement) =>
                      subElement.name
                        .toUpperCase()
                        .includes(
                          searchPhrase.toUpperCase().trim().replace(/\s/g, "")
                        )
                    ),
                  };
                })
              : data
          }
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => {
            if (searchPhrase === "") {
              return (
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
              );
            } else {
              return null;
            }
          }}
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
