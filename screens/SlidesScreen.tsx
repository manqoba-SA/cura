import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");
const COLORS = { primary: "#409849", secondary: "#D9D9D9" };

const slides = [
  {
    key: 1,
    title: "Self\nDiagnose",
    text: "Learn more about your symptoms😷",
    image: require("../../cura/assets/images/illustrations/undraw_medicine_b1ol.png"),
  },
  {
    key: 2,
    title: "Health Library from\nProfessionals",
    text: "Get Health Education All In Your Phone🧑🏽‍⚕️",
    image: require("../../cura/assets/images/illustrations/undraw_medicine_b1ol.png"),
  },
  {
    key: 3,
    title: "Herb\nPrescription",
    text: "Learn More About Herbs In Health Care🌿",
    image: require("../../cura/assets/images/illustrations/undraw_medicine_b1ol.png"),
  },
];

import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";

const Slide = ({ item }) => {
  return (
    <View>
      <Image
        source={item.image}
        style={{
          height: "70%",
          width,
          marginTop: 10,
          resizeMode: "contain",
        }}
      />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle} numberOfLines={10}>
          {item.text}
        </Text>
      </View>
    </View>
  );
};
export default function SlidesScreen({ navigation }) {
  const [currentSlider, setCurrentSlider] = useState(0);
  const ref = useRef(null);
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlider === index && {
                  backgroundColor: COLORS.primary,
                  width: 25,
                },
              ]}
            ></View>
          ))}
        </View>
        <View style={{ marginBottom: 20 }}>
          {currentSlider == slides.length - 1 ? (
            <View style={{ height: 100 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("TermsAndConditionsScreen")}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}
                >
                  Create Account
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    marginTop: 10,
                    borderWidth: 1.5,
                    borderColor: COLORS.primary,
                    backgroundColor: "transparent",
                  },
                ]}
                onPress={() => navigation.navigate("Login")}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: "transparent" }]}
                onPress={skipSlides}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Skip
                </Text>
                <View style={{ width: 15 }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={goNextSlide}>
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}
                >
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };
  const updateCurrentSlide = (e) => {
    const conteOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(conteOffsetX / width);
    setCurrentSlider(currentIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlider + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlider(nextSlideIndex);
    }
  };
  const skipSlides = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlider(lastSlideIndex);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlide}
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        pagingEnabled
      />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textWrap: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 0,
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: 15,
    marginTop: 0,
    color: "grey",
    lineHeight: 23,
  },
  indicator: {
    height: 5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
