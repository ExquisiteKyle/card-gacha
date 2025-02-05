import { StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

const ViewCard = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ThemedView style={styles.wrapper}>
          <ThemedView>
            <ThemedText type="title">View all cards</ThemedText>
          </ThemedView>
        </ThemedView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ViewCard;
