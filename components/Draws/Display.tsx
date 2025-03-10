import { Modal, Pressable, StyleSheet } from "react-native";
import { CardProps } from "@/types/types";
import { ThemedView } from "../ThemedView";
import AntDesign from "@expo/vector-icons/AntDesign";
import Card from "../Card/Card";

interface DisplayProps {
  isVisible: boolean;
  pokemonDraws: CardProps[];
  handleOnClose: () => void;
}

const Display = ({ isVisible, pokemonDraws, handleOnClose }: DisplayProps) => {
  const CardContent = pokemonDraws.map((draw) => <Card {...draw} />);

  return (
    <ThemedView>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <ThemedView style={styles.modalContent}>
          <ThemedView style={styles.titleContainer}>
            <Pressable onPress={handleOnClose}>
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
          </ThemedView>
          <ThemedView style={styles.cardContent}>{CardContent}</ThemedView>
        </ThemedView>
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignItems: "flex-end",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "16%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
  },
  cardContent: {
    flexDirection: "row",
    width: "100%",
    overflowX: "scroll",
  },
});

export default Display;
