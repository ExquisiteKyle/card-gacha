import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { handleAddCard } from "@/services/services";
import {
  customAlert,
  genericAlertActions,
  responseHandler,
} from "@/util/helper";
import { CardProps } from "@/types/types";

const AddCard = () => {
  const [cardData, setCardData] = useState<CardProps>({
    name: "",
    description: "",
    rarity: 0,
    attack: 0,
    defense: 0,
    image_url: "",
  });

  const handleOnAddCard = () =>
    handleAddCard(cardData).then((response) =>
      responseHandler(response, () =>
        customAlert("Success", "Card has been added", genericAlertActions)
      )
    );

  const getTextField = (key: keyof CardProps, isNumeric: boolean = false) => (
    <ThemedView style={styles.inputRow}>
      <ThemedText style={styles.label}>{key}</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={(value) =>
          setCardData({
            ...cardData,
            [key]: !isNumeric ? value : Number(value),
          })
        }
        value={
          !isNumeric ? (cardData[key] as string) : cardData[key].toString()
        }
        keyboardType={!isNumeric ? "default" : "numeric"}
      />
    </ThemedView>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ThemedView style={styles.wrapper}>
          <ThemedView>
            <ThemedText type="title">Add Card</ThemedText>
            <ThemedView style={styles.form}>
              {getTextField("name")}
              {getTextField("description")}
              {getTextField("rarity", true)}
              {getTextField("attack", true)}
              {getTextField("defense", true)}
              {getTextField("image_url")}
              <TouchableOpacity onPress={handleOnAddCard}>
                <ThemedText style={styles.submit}>Submit</ThemedText>
              </TouchableOpacity>
            </ThemedView>
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
  form: {
    padding: 24,
  },
  label: {
    textTransform: "capitalize",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  submit: {
    padding: 8,
    marginTop: 12,
    marginLeft: "auto",
    backgroundColor: "#841584",
  },
});

export default AddCard;
