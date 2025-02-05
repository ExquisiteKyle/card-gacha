import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

const Gachapon = () => {
  return (
    <ThemedView style={styles.wrapper}>
      <ThemedText>Gachapon Page</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 16,
    margin: 24,
  },
});

export default Gachapon;
