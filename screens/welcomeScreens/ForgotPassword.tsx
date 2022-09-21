// import React from 'react'
// import { Text, View } from 'react-native'

// export default function ForgotPassword() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.contentContainer}>
//         <Text style={styles.headerText}>Create your account</Text>
//         <Text style={styles.descriptionText}>
//           Register an account to access best digital health services
//         </Text>
//         <View style={styles.formsWrapper}>
//           {loading ? (
//             <View
//               style={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 flex: 1.0,
//               }}
//             >
//               <Progress.Circle
//                 thickness={5}
//                 indeterminate={true}
//                 color={COLORS.primary.text}
//               />
//             </View>
//           ) : (
//             <View>
//               <FormControl w="100%">
//                 <FormControl.Label>Email Address</FormControl.Label>
//                 <CustomInput
//                   placeholder={"Email Address"}
//                   value={email}
//                   setValue={(newText) => setEmail(newText)}
//                   secureTextEntry={false}
//                 />
//               </FormControl>
//               <FormControl w="100%">
//                 <FormControl.Label>Password</FormControl.Label>
//                 <CustomInput
//                   placeholder={"Password"}
//                   value={password}
//                   setValue={(newText) => setPassword(newText)}
//                   secureTextEntry={true}
//                 />
//               </FormControl>
//               <FormControl w="100%">
//                 <FormControl.Label>Confirm Password</FormControl.Label>
//                 <CustomInput
//                   placeholder={"Confirm Password"}
//                   value={password2}
//                   setValue={(newText) => setPassword2(newText)}
//                   secureTextEntry={true}
//                 />
//               </FormControl>
//               {error ? (
//                 <View style={styles.errorTextWrap}>
//                   <Text style={styles.errorText}>{error}</Text>
//                 </View>
//               ) : null}
//             </View>
//           )}
//           <View style={styles.btnWrapper}>
//             <CustomButton text="Sign Up" onPress={register} />
//             <View style={styles.orTextWrapper}>
//               <Text style={styles.descriptionText}>or sign up with</Text>
//             </View>
//             <View style={styles.socialsWrapper}>
//               <TouchableOpacity style={styles.socialIcon}>
//                 <MaterialIcons name="facebook" size={34} color="#18ACFE" />
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.socialIcon}>
//                 <AntDesign name="apple1" size={30} color="#283544" />
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.socialIcon}>
//                 <AntDesign name="google" size={30} color="#EB4335" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       {/* </View> */}
//     </View>
//   )
// }
