import React, { useEffect, useState } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
// import { SearchBar } from "react-native-screens";
import { Ionicons } from "@expo/vector-icons";
import Sicknesses from "../../constants/dummyData/sicknesses";
import LibraryList from "../../components/healthLibraryComponent/LibraryList";
import CustomSearchBar from "../../components/CustomSearchBar/CustomSearchBar";

export default function HealthLibraryScreen() {
  // const [search, setSearch] = useState("")
  // const GetSectionListItem = (item) => {
  //   // Alert.alert(item);

  //   this.state = { search: "" };

  //   const updateSearch = (search) => {
  //     this.setState({ search });
  //   };
  // };
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1.0 }}>
      <View style={styles.container}>
        {/* {!clicked && <Text style={styles.title}></Text>} */}
        <CustomSearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setCLicked={setClicked}
        />

        <LibraryList
          searchPhrase={searchPhrase}
          data={fakeData}
          setCLicked={setClicked}
        />

        {/* )} */}

        {/* <SearchBar
          // style={styles.SectionListItemS}
          placeholder="Search Topic or Condition"
        />

        <SectionList
          sections={Sicknesses}
          renderSectionHeader={({ section }) => (
            <Text style={styles.SectionHeader}> {section.title} </Text>
          )}
          renderItem={({ item }) => (
            <Text
              style={styles.SectionListItemS}
              // onPress={this.GetSectionListItem.bind(this, item)}
            >
              {" "}
              {item}
              <Ionicons
                name="enter-outline"
                size={24}
                color="black"
                style={styles.iconpos}
              />
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        /> */}
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
