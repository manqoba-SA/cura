import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import doctors from "../../../../constants/dummyData/doctors";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomButton from "../../../../components/CustomButtons/CustomButton";

export default function DoctorDetailsScreen({ route }) {
  const data = doctors.find((o) => o.id === route.params.id);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperDetails}>
        <Image source={data?.image} style={styles.doctorImage} />
        <Text style={styles.doctorName}>Dr. {data?.name}</Text>
        <Text style={styles.doctorTitle}>{data?.title}</Text>
        <View style={styles.boxDetailsWrapper}>
          <View style={styles.detailBox}>
            <View style={styles.iconWrapper}>
              <Ionicons name="people-outline" size={30} color="#409849" />
            </View>
            <Text style={styles.doctorName}>{data?.customers}+</Text>
            <Text style={styles.doctorTitle}>Patients</Text>
          </View>
          <View style={styles.detailBox}>
            <View style={styles.iconWrapper}>
              <Feather name="award" size={30} color="#409849" />
            </View>
            <Text style={styles.doctorName}>10 Yrs</Text>
            <Text style={styles.doctorTitle}>Experience</Text>
          </View>
        </View>
      </View>
      <View style={styles.belowDetails}>
        <View>
          <Text style={styles.doctorName}>About Doctor</Text>
          <Text style={styles.doctorTitle}>
            Dr. Bellamy Nicholas is a top specialist at London Bridge Hospital
            at London. He has achieved several awards and recognition for is
            contribution and service in his own field. He is available for
            private consultation.{" "}
          </Text>
        </View>
        <View>
          <Text style={styles.doctorName}>Working Time</Text>
          <Text style={styles.doctorTitle}>Mon - Sat (08:30 - 16:00)</Text>
        </View>

        <View>
          <Text style={styles.doctorName}>Charges</Text>
          <View style={styles.chargesWrap}>
            <FontAwesome5 name="money-check-alt" size={30} color="#409849" />
            <View style={styles.chargesRightSide}>
              <Text style={styles.chargesText}>R500 per hour</Text>
              <Text style={styles.chargesSmallText}>charges R500 per hour</Text>
              <View style={styles.chargesChildWrap}>
                <FontAwesome5
                  name="hand-holding-medical"
                  size={30}
                  color="black"
                />
                <Text style={styles.chargesText}>Accepts Medical Aid</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btnWrap}>
          <CustomButton
            text={"Book Appointment"}
            onPress={() => console.log("cs")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#E5E5E5", flex: 1 },
  upperDetails: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  doctorImage: {
    width: 110,
    height: 110,
    borderRadius: 50,
  },
  doctorName: {
    marginTop: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
    color: "#0A0909",
  },
  doctorTitle: {
    color: "#666666",
    fontFamily: "Poppins_400Regular",
  },
  boxDetailsWrapper: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  detailBox: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    borderRadius: 19,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    width: "35%",
  },
  iconWrapper: {
    backgroundColor: "#E5E5E5",
    padding: 5,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
  },
  belowDetails: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  chargesWrap: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
  },
  chargesRightSide: {
    marginLeft: 20,
  },
  chargesText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 17,
  },
  chargesSmallText: {
    color: "#666666",
    fontFamily: "Poppins_400Regular",
  },
  chargesChildWrap: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  btnWrap: {
    marginTop: 12,
  },
});
