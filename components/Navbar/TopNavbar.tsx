import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { HomeProp, PAGE } from "@/types/types";
import { handleLogOut } from "@/services/services";

type MiniNavProp = {
  pageCallback: (page: PAGE) => void;
  page: PAGE;
};

type NavBarProp = MiniNavProp & HomeProp;

const TopNavbar = ({ pageCallback, page, navigation, route }: NavBarProp) => {
  const getButton = (destinationPage: PAGE, text: string) => {
    const selectedCssObject = page === destinationPage && styles.selected;
    return (
      <TouchableOpacity
        style={[styles.button, selectedCssObject]}
        onPress={() => pageCallback(destinationPage)}
      >
        <ThemedText
          style={[styles.buttonText, selectedCssObject]}
          type="defaultSemiBold"
        >
          {text}
        </ThemedText>
      </TouchableOpacity>
    );
  };

  const handleOnLogOut = () =>
    handleLogOut().then(() => navigation.navigate("Index"));

  return (
    <ThemedView style={styles.wrapper}>
      {getButton(PAGE.HOME, "Home")}
      {getButton(PAGE.ADMIN, "Admin")}
      <TouchableOpacity
        style={[styles.button, styles.logOutBtn]}
        onPress={handleOnLogOut}
      >
        <ThemedText style={styles.logOutBtnText} type="defaultSemiBold">
          Log out
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 16,
    margin: 24,
  },
  button: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    transform: "skew(15deg)",
  },
  buttonText: {
    transform: "skew(-15deg)",
    color: "#000000",
  },
  selected: {
    backgroundColor: "#841584",
    color: "#FFFFFF",
  },
  logOutBtn: {
    backgroundColor: "#880808",
  },
  logOutBtnText: {
    transform: "skew(-15deg)",
    color: "#FFFFFF",
  },
});

export default TopNavbar;
