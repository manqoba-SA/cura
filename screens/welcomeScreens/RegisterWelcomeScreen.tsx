import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FormControl, Icon } from "native-base";
import CustomInput from "../../components/CustomInputs/CustomInput";
import KeyboardAvoidingWrapper from "../../components/common/KeyboardAvoidingWrapper";
import RadioButton from "../../components/common/RadioButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../constants/COLORS";
import CustomButton from "../../components/CustomButtons/CustomButton";
import { Slider } from "@miblanchard/react-native-slider";
import Loading from "../../components/common/Loading";
import { firestore } from "../../firebase/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import RegisterSuccess from "../../components/FirstScreens/RegisterSuccess";

export default function RegisterWelcomeScreen() {
  const welcomeImage = require("../../assets/images/illustrations/welcome.png");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(null);
  const [isSmoker, setIsSmoker] = useState(null);
  const [age, setAge] = React.useState(18);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const Genderdata = [{ value: "Male" }, { value: "Female" }];
  const Smokedata = [{ value: "No" }, { value: "Yes" }];

  const currentUser = useSelector((state: any) => state.user);

  const onSubmit = async () => {
    setLoading(true);
    setError(null);
    var pattern = /[a-zA-Z]+[(@!#\$%\^\&*\)\(+=._-]{1,}/;
    if (
      firstName === "" &&
      lastName === "" &&
      gender === null &&
      isSmoker === null
    ) {
      setError("Please fill all the fields");
      setLoading(false);
    } else if (pattern.test(firstName)) {
      setError("Please enter a valid first name");
      setLoading(false);
    } else if (pattern.test(lastName)) {
      setError("Please enter a valid last name");
      setLoading(false);
    } else {
      const docRef = doc(firestore, "users", currentUser.user.uid);
      const data = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        isSmoker: isSmoker,
      };
      await updateDoc(docRef, data).then(() => {
        setShowSuccess(true);
        setLoading(false);
      });
    }
  };

  if (showSuccess) {
    return <RegisterSuccess />;
  } else
    return (
      <View style={styles.container}>
        <KeyboardAvoidingWrapper>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={welcomeImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Welcome to Cura</Text>
              <Text style={styles.subtitle}>
                One more step to get started with Cura. Please fill in the
                details below to create your account.
              </Text>
              <View>
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    <FormControl w="100%">
                      <FormControl.Label>First Name</FormControl.Label>
                      <CustomInput
                        placeholder={"First Name"}
                        value={firstName}
                        setValue={(newText) => setFirstName(newText)}
                        secureTextEntry={false}
                      />
                    </FormControl>
                    <FormControl w="100%" marginTop={5}>
                      <FormControl.Label>Last Name</FormControl.Label>
                      <CustomInput
                        placeholder={"Last Name"}
                        value={lastName}
                        setValue={(newText) => setLastName(newText)}
                        secureTextEntry={false}
                      />
                    </FormControl>
                    <FormControl w="100%" marginTop={5}>
                      <FormControl.Label>What is your gender</FormControl.Label>
                      <View style={styles.radioInputWrap}>
                        <RadioButton
                          data={Genderdata}
                          onSelect={(value) => setGender(value)}
                        />
                      </View>
                    </FormControl>
                    <FormControl w="100%" marginTop={5}>
                      <FormControl.Label>Your Age</FormControl.Label>
                      <View>
                        <Text style={styles.ageText}>{age} years old</Text>
                        <Slider
                          value={age}
                          minimumValue={18}
                          maximumValue={100}
                          step={1}
                          minimumTrackTintColor={COLORS.primary.text}
                          onValueChange={(value) => setAge(value)}
                        />
                      </View>
                    </FormControl>
                    <FormControl w="75%" marginTop={5}>
                      <FormControl.Label>Do you smoke?</FormControl.Label>
                      <View style={styles.radioInputWrap}>
                        <RadioButton
                          data={Smokedata}
                          onSelect={(value) => setIsSmoker(value)}
                        />
                      </View>
                    </FormControl>
                  </>
                )}
              </View>
              <View style={styles.buttonContainer}>
                {error && <Text style={styles.error}>{error}</Text>}
                <CustomButton
                  text="Submit"
                  onPress={onSubmit}
                  disabled={loading}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingWrapper>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    marginTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 15,
  },
  image: {
    width: 350,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Poppins_600SemiBold",
    color: "#666666",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    marginTop: 5,
    color: "#666666",
  },
  radioInputWrap: {
    marginTop: 5,
  },
  ageText: {
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    color: COLORS.primary.text,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Poppins_400Regular",
  },
});
