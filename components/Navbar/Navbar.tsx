import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { PAGE } from "@/types/types";

type NavBarProp = {
  pageCallback: (page: PAGE) => void;
  page: PAGE;
};

const Navbar = ({ pageCallback, page }: NavBarProp) => {
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
  return (
    <ThemedView style={styles.wrapper}>
      {getButton(PAGE.HOME, "Home")}
      {getButton(PAGE.ADMIN, "Admin")}
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
});

export default Navbar;
