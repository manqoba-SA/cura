import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Avatar, CheckIcon, Image, Select } from "native-base";
import {
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { Information } from "../../constants/dummyData/information";

export default function ArticleDetailsScreen({ route }) {
  let [language, setLanguage] = React.useState("");
  const data = Information.find((item) => item.id === route.params.id);
  return (
    <View style={styles.container}>
      <View style={styles.avatarAndSelectWrap}>
        <View style={styles.avatarWrap}>
          <Avatar
            bg="indigo.500"
            alignSelf="flex-start"
            size="md"
            source={{
              uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          >
            RS
          </Avatar>
          <Text style={styles.writerName}>{data?.writer}</Text>
        </View>
        <Select
          style={{ backgroundColor: "#fff" }}
          selectedValue={language}
          minWidth="200"
          accessibilityLabel="Choose Language"
          placeholder="Choose Language"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Select.Item label="English" value="ux" />
          <Select.Item label="Sotho" value="web" />
          <Select.Item label="Xitsonga" value="cross" />
          <Select.Item label="Venda" value="ui" />
          <Select.Item label="Zulu" value="backend" />
        </Select>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.title}>{data?.title}</Text>
          <View style={styles.defaultMargin}>
            <Text style={styles.timePostedFont}>
              Published on {data?.timePublished}
            </Text>
            <Text style={styles.timePostedFont}>{data?.readTime} read</Text>
          </View>
          <View style={styles.defaultMargin}>
            <Image
              source={data?.pictures.pic1}
              alt={data?.title}
              width={500}
              height={250}
              borderRadius={10}
            />
          </View>
          <View style={styles.defaultMargin}>
            <Text>{data?.paragraph}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    backgroundColor: "#fff",
  },
  avatarAndSelectWrap: {
    marginTop: 10,
    marginHorizontal: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  avatarWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  writerName: {
    fontFamily: "Poppins_300Light",
    color: "#ccc",
    marginLeft: 5,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 30,
    textAlign: "center",
    marginHorizontal: 15,
    marginTop: 10,
  },
  defaultMargin: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  timePostedFont: {
    fontFamily: "Poppins_300Light",
  },
});
