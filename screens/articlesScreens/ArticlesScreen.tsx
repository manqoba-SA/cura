import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { Information } from "../../constants/dummyData/information";
import ArticlesItem from "../../components/ArticlesComponents/Lists/ArticlesItem";

export default function ArticlesScreen({ navigation }) {
  const [data, setData] = useState(Information);
  const renderItem = ({ item }) => (
    <ArticlesItem
      title={item.title}
      description={item.description}
      id={item.id}
      navigation={navigation}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1.0 },
  wrap: { marginTop: 5 },
});
