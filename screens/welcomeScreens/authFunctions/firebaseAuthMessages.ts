export function mapAuthCodeToMessage(authCode) {
  switch (authCode) {
    case "auth/invalid-password":
      return "Password provided is not corrected";

    case "auth/invalid-email":
      return "Email provided is invalid";

    case "auth/user-not-found":
      return "User not found";

    case "auth/email-already-exists":
      return "Email already exists";

    default:
      return "";
  }
}
