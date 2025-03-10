import { StyleSheet, ImageBackground } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

interface PackProps {
  title: string;
  imageUrl: string;
  subtitle: string;
}

const Pack = ({ title, imageUrl, subtitle }: PackProps) => {
  return (
    <ThemedView style={styles.pack}>
      <ImageBackground
        source={{ uri: imageUrl }}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ThemedText style={styles.titleText}>{title}</ThemedText>
        <ThemedText style={styles.subtitleText}>{subtitle}</ThemedText>
      </ImageBackground>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  pack: {
    flex: 1,
    width: "20%",
    userSelect: "none",
    overflow: "hidden",
  },
  backgroundImage: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 60,
  },
  titleText: {
    fontSize: 60,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#F2C120",
    letterSpacing: 2,
  },
  subtitleText: {
    fontSize: 40,
    fontWeight: "500",
    color: "#FFFFFF",
    letterSpacing: 1.5,
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
  },
});

export default Pack;
