import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import COLORS from "../../constants/COLORS";
import { Articles } from "../../constants/dummyData/Article";

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}
      >
        <Text style={styles.headerText}>{item.category_name}</Text>
        <AntDesign name="caretdown" size={24} color="#fff" />
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <View key={key} style={styles.content}>
            <Text style={styles.text}>{item.val}</Text>
            {/* <View style={styles.separator} /> */}
          </View>
        ))}
      </View>
    </View>
  );
};

export default function SicknessDetailScreen({ route }) {
  const data = Articles.find((o) => o.id === route.params.id);
  const CONTENT = [
    {
      isExpanded: false,
      category_name: "Risks",
      subcategory: [{ id: 1, val: "Eish" }],
    },
    {
      isExpanded: false,
      category_name: "Diagnosis",
      subcategory: [
        { id: 4, val: "Sub Cat 4" },
        { id: 5, val: "Sub Cat 5" },
      ],
    },
  ];
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]["isExpanded"] = !array[index]["isExpanded"];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
          : (array[placeindex]["isExpanded"] = false)
      );
    }
    setListDataSource(array);
  };
  return (
    <View style={{ backgroundColor: "#E5E5E5", flex: 1.0 }}>
      <View
        style={{
          flex: 1.0,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 11,
        }}
      >
        <Text style={{ fontSize: 24, fontFamily: "Poppins_600SemiBold" }}>
          Overview
        </Text>
        <Text style={{ color: "#979797", fontSize: 15 }}>
          A spectacular visual journey through 40 years of haute couture from
          one of the best-known and most trend-setting brands in fashion.A
          spectacular visual journey through 40 years of haute couture from one
          of the best-known and most trend-setting brands in fashion.
        </Text>
      </View>
      <View
        style={{
          flex: 2.0,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ScrollView
          style={{
            width: "100%",
          }}
        >
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: COLORS.primary.text,
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: "#fff",
    marginLeft: "25%",
    // textAlign: "center",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "95%",
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: "#606070",
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
});
