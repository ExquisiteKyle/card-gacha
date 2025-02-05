import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { handleLogin } from "@/services/services";
import { IndexProp } from "@/types/types";
import { responseHandler } from "@/util/helper";

const Login = ({ navigation }: IndexProp) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleOnLogin = () =>
    handleLogin({ email, password })?.then((result) =>
      responseHandler(result, () => navigation.navigate("Home"))
    );

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ThemedView style={styles.centerBox}>
          <ThemedView style={styles.inputRow}>
            <ThemedText type="default">Username</ThemedText>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="JohnSmith@gmail.com"
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
          <TouchableOpacity style={styles.loginButton} onPress={handleOnLogin}>
            <ThemedText style={styles.loginText} type="defaultSemiBold">
              Login
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
  loginButton: {
    padding: 8,
    margin: 12,
    backgroundColor: "#841584",
  },
  loginText: {
    textAlign: "center",
  },
});

export default Login;
