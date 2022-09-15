import React, { useEffect, useState } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
// import { SearchBar } from "react-native-screens";
import { Ionicons } from "@expo/vector-icons";
import Sicknesses from "../../constants/dummyData/sicknesses";
import LibraryList from "../../components/healthLibraryComponent/LibraryList";
import CustomSearchBar from "../../components/CustomSearchBar/CustomSearchBar";
import { Articles } from "../../constants/dummyData/Article";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function HealthLibraryScreen({ navigation }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState([]);
  // console.log(searchPhrase);

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const data = Sicknesses;
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1.0 }}>
      <View style={styles.container}>
        <CustomSearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setCLicked={setClicked}
          placeholder="Seach topic or Condition"
        />

        <LibraryList
          searchPhrase={searchPhrase}
          data={fakeData}
          setCLicked={setClicked}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  SectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  SectionListItemS: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    flexDirection: "row",
    margin: 5,
    backgroundColor: "white",
    fontWeight: "bold",
  },
  iconpos: {
    //marginLeft: 250,
    position: "absolute",
    right: 30,
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
