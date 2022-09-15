import { ScrollView, Image } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomSearchBar from "../../components/CustomSearchBar/CustomSearchBar";
import products from "../../constants/dummyData/products";
import { MaterialIcons } from "@expo/vector-icons";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";

export default function ShopScreen({ navigation }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <CustomSearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setCLicked={setClicked}
        placeholder="Search Product"
      />

      <View style={styles.content}>
        <View style={styles.productsWrapper}>
          {products.map((product) => (
            <View style={{ width: "45%" }}>
              <TouchableOpacity
                key={product.id}
                style={styles.box}
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", { id: product.id })
                }
              >
                <View style={styles.favouriteIcon}>
                  <MaterialIcons
                    name="favorite-outline"
                    size={28}
                    color="black"
                  />
                </View>
                <View style={styles.ProductImageWrapper}>
                  <Image
                    source={product.image}
                    style={styles.ProductImage}
                    alt={product.name}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.productTextWrapper}>
                <Text style={styles.productNameText}>{product.name}</Text>
                <Text style={styles.productPriceText}>R{product.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    flex: 1.0,
  },
  content: { marginHorizontal: 15 },
  productsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  box: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#fff",
    width: "100%",
    marginVertical: 10,
  },
  favouriteIcon: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  ProductImageWrapper: {
    alignItems: "center",
    marginBottom: 5,
  },
  ProductImage: {
    borderRadius: 14,
    width: 139,
    height: 141,
  },
  productTextWrapper: {
    alignItems: "center",
  },
  productNameText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
  },
  productPriceText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 17,
    color: "#A1A1A1",
  },
});
