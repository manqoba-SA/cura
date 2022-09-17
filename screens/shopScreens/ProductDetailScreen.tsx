import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import products from "../../constants/dummyData/products";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
} from "@expo-google-fonts/poppins";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "native-base";
import CustomButton from "../../components/CustomButtons/CustomButton";

const { height } = Dimensions.get("window");
export default function ProductDetailScreen({ route }) {
  const data = products.find((o) => o.id === route.params.id);
  const starsArray = Array(5).fill(0);
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={data?.image}></Image>
        </View>
      </View>
      <View style={styles.below}>
        <ScrollView style={styles.belowContent}>
          <View style={styles.productInfoFirst}>
            <View>
              <Text>Herb</Text>
              <Text style={styles.productText}>{data?.name}</Text>
              <View style={styles.starRatings}>
                {starsArray.map((_, index) => {
                  return (
                    <Entypo
                      style={styles.stars}
                      name="star"
                      size={20}
                      color={data?.rating ?? 4 > index ? "#DADADA" : "#FCDD8D"}
                    />
                  );
                })}
                <Text style={styles.starRatingsText}>({data?.rating})</Text>
              </View>
            </View>
            <Text style={styles.productPrice}>48.00</Text>
          </View>
          <View style={styles.productQuantityAndShare}>
            <View style={styles.productQuantityWrap}>
              <Entypo name="minus" size={20} color="black" />
              <Text style={styles.quantityCount}>0</Text>
              <Entypo name="plus" size={20} color="black" />
            </View>
            <View style={styles.shareButtonWrap}>
              <Ionicons name="share-outline" size={24} color="black" />
            </View>
          </View>
          <View style={styles.productDescriptionWrap}>
            <Text style={styles.TextHeader}>DESCRIPTION</Text>
            <Text style={styles.descriptionText}>{data?.description}</Text>
          </View>
          {data?.sizes.length > 0 ? (
            <View style={styles.productDescriptionWrap}>
              <Text style={styles.TextHeader}>SELECT SIZE</Text>
              <View style={styles.productSizes}>
                {data?.sizes?.map((size) => {
                  <View key={size.id}>
                    <Text>{size.name}</Text>
                  </View>;
                })}
              </View>
            </View>
          ) : null}

          <CustomButton
            text={"ADD TO CART"}
            onPress={() => console.log("Add Product To Cart")}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1.0, backgroundColor: "#E5E5E5" },
  upper: {
    flex: 1.0,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  below: {
    flex: 2.0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  imageWrapper: {
    backgroundColor: "#fff",
    // padding: 20,
    // marginTop: 30,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "cover",
  },

  productInfoFirst: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  belowContent: {
    marginHorizontal: 25,
    marginTop: 15,
  },
  productText: {
    fontSize: 25,
    fontFamily: "Poppins_600SemiBold",
  },
  productPrice: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
  },
  starRatings: {
    flexDirection: "row",
    alignItems: "center",
  },
  stars: {
    marginHorizontal: 3,
  },
  starRatingsText: {
    color: "#C4C4C4",
    marginLeft: 10,
  },
  productQuantityAndShare: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  productQuantityWrap: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityCount: {
    marginHorizontal: 12,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
  },
  shareButtonWrap: {
    backgroundColor: "#E5E5E5",
    borderRadius: 50,
    padding: 10,
  },
  productDescriptionWrap: {
    marginTop: 20,
  },
  TextHeader: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 17,
  },
  descriptionText: {
    color: "#A1A1A1",
    fontFamily: "Poppins_400Regular",
  },
  productSizes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
