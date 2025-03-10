import { ImageBackground, StyleSheet, View } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { CardProps, SET_ACTION } from "@/types/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import CardRarity from "./CardRarity";
import Checkbox from "expo-checkbox";

interface AdminProps {
  deleteList?: Set<Number>;
  handleOnAction?: (id: number, action: SET_ACTION) => void;
}

type CardProp = CardProps & AdminProps;

const Card = ({
  id,
  name,
  description,
  rarity,
  attack,
  defense,
  image_url,
  deleteList,
  handleOnAction,
}: CardProp) => {
  if (!id) return <ThemedText>Invalid entry.</ThemedText>;

  const isChecked = deleteList?.has(id);
  const handleOnCheckValueChange = () =>
    handleOnAction &&
    handleOnAction(id, !isChecked ? SET_ACTION.ADD : SET_ACTION.DELETE);

  return (
    <ThemedView style={styles.card}>
      {handleOnAction && (
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={handleOnCheckValueChange}
        />
      )}
      <ImageBackground
        source={{ uri: image_url }}
        style={styles.pokemonImage}
      />
      <ThemedText style={styles.pokemonName}>{name}</ThemedText>
      <ThemedText style={styles.pokemonType}>{description}</ThemedText>
      <View style={styles.attacksContainer}>
        <View style={styles.modifier}>
          <MaterialCommunityIcons name="sword" size={24} color="black" />
          <ThemedText>{attack}</ThemedText>
        </View>
        <View style={styles.modifier}>
          <Ionicons name="shield" size={24} color="black" />
          <ThemedText>{defense}</ThemedText>
        </View>
        <View style={styles.modifier}>
          <CardRarity rarity={rarity} />
        </View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    borderWidth: 4,
    borderColor: "#FFFF00",
    padding: 10,
    margin: 10,
  },
  pokemonImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  pokemonType: {
    fontSize: 14,
    textAlign: "center",
  },
  attacksContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "auto",
  },
  modifier: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  attackTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  attack: {
    fontSize: 14,
    marginVertical: 2,
  },
  checkbox: {
    position: "absolute",
    zIndex: 1,
  },
});

export default Card;
