import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Colors from "../style/Colors";
import GlobalStyles from "../style/GlobalStyles";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HeyAPP</Text>
      <View style={styles.inputView}>
        <TextInput
          style={[GlobalStyles.textInput, GlobalStyles.roundFormat]}
          placeholder="Email"
          placeholderTextColor={Colors.placeholder}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={[GlobalStyles.textInput, GlobalStyles.roundFormat]}
          placeholder="Password"
          placeholderTextColor={Colors.placeholder}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.doubleButtonContainer}>
        <TouchableOpacity style={[GlobalStyles.submitBtn, GlobalStyles.roundFormat]}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[GlobalStyles.cancelBtn, GlobalStyles.roundFormat]}>
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: Colors.primary,
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    marginBottom: 20,
  },
  forgot: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 50,
  },
  loginText: {
    fontWeight: 600,
  },
  doubleButtonContainer: {
    justifyContent: "center",
    width: "30%",
    flexDirection: "row",
  },
});
