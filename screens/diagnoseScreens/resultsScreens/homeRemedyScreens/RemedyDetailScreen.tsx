import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  Dimensions,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import COLORS from "../../../../constants/COLORS";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import remedies from "../../../../constants/dummyData/remedies";
import RemedyHerbExpandables from "../../../../components/DiagnosisComponents/remediesAndherbs/RemedyHerbExpandables";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "native-base";

export default function RemedyDetailScreen({ route }) {
  const teaImage = require("../../../../../cura/assets/images/honeyTea.jpg");
  const data = remedies.find((o) => o.id === route.params.id);
  const CONTENT = [
    {
      isExpanded: false,
      icon: (
        <MaterialCommunityIcons name="food-variant" size={24} color="#409849" />
      ),
      category_name: "Ingrediens",
      subcategory: [
        {
          id: 1,
          val: data?.ingrediens,
        },
      ],
    },
    {
      isExpanded: false,
      category_name: "Steps/Instructions",
      icon: <AntDesign name="carryout" size={24} color="#409849" />,
      subcategory: [{ id: 1, val: data?.steps }],
    },
    {
      isExpanded: false,
      category_name: "Who should not use this remedy",
      icon: (
        <MaterialIcons name="cancel-presentation" size={24} color="#409849" />
      ),
      subcategory: [
        {
          id: 1,
          val: data?.shouldNotUse,
        },
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
    <ScrollView style={styles.container}>
      <Image source={teaImage} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.headerText}>Try Honey Tea</Text>
        <Text style={styles.lighterText}>
          Researchers in one 2007 studyTrusted Source found evidence to suggest
          that buckwheat honey may be more effective than traditional medication
          at relieving cough
        </Text>
        <View style={styles.expandablesWrap}>
          <Text style={[styles.headerText, { textAlign: "center" }]}>
            Get to know more
          </Text>
          {listDataSource.map((item, key) => (
            <RemedyHerbExpandables
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { backgroundColor: "#E5E5E5", flex: 1.0 },
  image: {
    width,
    height: (height * 40) / 100,
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 15,
  },
  headerText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },
  lighterText: {
    color: "#666666",
    fontFamily: "Poppins_400Regular",
  },
  expandablesWrap: {
    marginTop: 15,
  },
});
