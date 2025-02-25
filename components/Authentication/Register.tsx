import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { handleRegister } from "@/services/services";
import { IndexProp } from "@/types/types";
import {
  customAlert,
  genericAlertActions,
  responseHandler,
} from "@/util/helper";

const Register = ({ navigation }: IndexProp) => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleOnRegister = () =>
    handleRegister({ email, username, password })?.then(
      (response) =>
        responseHandler(response) &&
        customAlert("Success", "Registration completed.", genericAlertActions)
    );

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ThemedView style={styles.centerBox}>
          <ThemedView style={styles.inputRow}>
            <ThemedText type="default">Email</ThemedText>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="JohnSmith@gmail.com"
            />
          </ThemedView>

          <ThemedView style={styles.inputRow}>
            <ThemedText type="default">Username</ThemedText>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="John Smith"
            />
          </ThemedView>

          <ThemedView style={styles.inputRow}>
            <ThemedText type="default">Password</ThemedText>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              textContentType="password"
              secureTextEntry={true}
            />
          </ThemedView>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleOnRegister}
          >
            <ThemedText style={styles.loginText} type="defaultSemiBold">
              Register
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centerBox: {
    padding: 16,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 8,
    gap: "8px",
    color: "#FFFFFF",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  registerButton: {
    padding: 8,
    margin: 12,
    backgroundColor: "#841584",
  },
  loginText: {
    textAlign: "center",
  },
});

export default Register;
