import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import Login from "@/components/Authentication/Login";
import { IndexProp } from "@/types/types";
import { useState } from "react";
import Register from "@/components/Authentication/Register";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const IndexScreen = ({ navigation, route }: IndexProp) => {
  const [isRegister, setRegister] = useState<boolean>(false);
  const image = { uri: "https://i.imgur.com/Ydk6JZ0.jpeg" };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ThemedView>
          {!isRegister && <Login navigation={navigation} route={route} />}
          {isRegister && <Register navigation={navigation} route={route} />}
          <TouchableOpacity onPress={() => setRegister(!isRegister)}>
            <ThemedText style={styles.registerText} type="defaultSemiBold">
              {!isRegister ? "Not registered yet?" : "Already registered?"}
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  centerBox: {
    backgroundColor: "#FFFFFF",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 12,
  },
  registerText: {
    marginLeft: 16,
    marginBottom: 16,
  },
});

export default IndexScreen;
