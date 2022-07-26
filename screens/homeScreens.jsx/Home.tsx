import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CustomBox from "../../components/homePageComponents/CustomBox";
import { Information } from "../../constants/dummyData/information";
const { width } = Dimensions.get("window");

export default function Home({ navigation }) {
  const renderItem = ({ item, index }) => {
    return (
      <>
        {item.id === 4 ? (
          <CustomBox
            title={"See All Articles"}
            subtitle={""}
            type="swiper"
            onPress={() => navigation.navigate("articlesScreen")}
            image={"../../../cura/assets/images/illustrations/reminder.png"}
          />
        ) : (
          <CustomBox
            title={item.title}
            subtitle={item.description}
            type="medium"
            onPress={() =>
              navigation.navigate("articleDetails", {
                id: item.id,
                title: item.title,
              })
            }
            image={""}
          />
        )}
      </>
    );
  };
  const { width, height } = Dimensions.get("window");
  const images = {
    diagnose: require("../../../cura/assets/images/illustrations/undraw_doctors_hwty.png"),
    healthLibrary: require("../../../cura/assets/images/illustrations/library.png"),
    medicineReminder: require("../../../cura/assets/images/illustrations/reminder.png"),
  };
  return (
    <View style={styles.container}>
      <View style={styles.diagnoseBoxWrap}>
        <CustomBox
          title={"Diagnose"}
          subtitle="Hi Oratile, I can help you learn more about your sysmptoms"
          onPress={() => navigation.navigate("diagnosis")}
          image={images.diagnose}
        />
        <View style={styles.healthLibraryAndReminderBoxWrap}>
          <CustomBox
            onPress={() =>
              navigation.navigate("Library", { screen: "healthLibrary" })
            }
            title={"Health\nLibrary"}
            type="half"
            subtitle={""}
            image={images.healthLibrary}
          />
          <CustomBox
            onPress={() =>
              navigation.navigate("Reminder", { screen: "reminder" })
            }
            title={"Medicine\nReminder"}
            type="half"
            subtitle={""}
            image={images.medicineReminder}
          />
        </View>
        <View style={styles.articlesWrap}>
          <Text style={styles.atrticlesHeaderText}>
            Check latest Health Articles
          </Text>
          <Carousel
            // ref={(c) => { this._carousel = c; }}
            data={Information}
            renderItem={renderItem}
            sliderWidth={width + 100}
            itemWidth={width - 100}
            activeSlideAlignment={"start"}
            inactiveSlideScale={0.9}
            inactiveSlideOpacity={0.7}
          />
        </View>
      </View>
    </View>
  );
}
// T&Cs41&2

const styles = StyleSheet.create({
  container: { backgroundColor: "#E5E5E5", flex: 1.0 },
  diagnoseBoxWrap: { flex: 1.0 },
  healthLibraryAndReminderBoxWrap: { flexDirection: "row", width: width * 0.8 },
  articlesWrap: { margin: 20 },
  atrticlesHeaderText: { fontFamily: "Poppins_400Regular", fontSize: 20 },
});
