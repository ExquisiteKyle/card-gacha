import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { useEffect, useState } from "react";
import { handleDeleteCards, handleGetAllCards } from "@/services/services";
import {
  customAlert,
  genericAlertActions,
  responseHandler,
} from "@/util/helper";
import { CardProps, SET_ACTION } from "@/types/types";
import Card from "../Card/Card";

const ManageCards = () => {
  const [deleteList, setDeleteList] = useState<Set<number>>(new Set());
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    refreshCardsData();
  }, []);

  const refreshCardsData = () =>
    handleGetAllCards()
      .then((response) => responseHandler(response)?.json())
      ?.then((cardData) => setCards(cardData));

  const updateSet = (item: number, action: SET_ACTION) => {
    const updatedList = new Set(deleteList);
    action === SET_ACTION.ADD
      ? updatedList.add(item)
      : updatedList.delete(item);
    setDeleteList(updatedList);
  };

  const handleOnAction = (id: number, action: SET_ACTION) =>
    updateSet(id, action);

  const handleOnSelectAll = () =>
    setDeleteList(
      new Set(
        cards.reduce<number[]>(
          (acc, card) => (card.id ? [...acc, card.id] : acc),
          []
        )
      )
    );

  const handleOnDelete = () =>
    handleDeleteCards([...deleteList])
      .then((response) => responseHandler(response))
      ?.then(() =>
        customAlert(
          "Success",
          "Deleted the selected cards.",
          genericAlertActions
        )
      )
      .finally(() => refreshCardsData());

  return (
    <ThemedView style={styles.wrapper}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">View all cards</ThemedText>
        <ThemedView style={styles.actions}>
          <TouchableOpacity onPress={handleOnSelectAll}>
            <ThemedText style={styles.actionBtn}>Select All</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOnDelete}>
            <ThemedText style={styles.actionBtn}>Delete selected</ThemedText>
          </TouchableOpacity>
        </ThemedView>
        <ThemedView style={styles.cards}>
          {cards.map((card) => (
            <Card
              {...card}
              deleteList={deleteList}
              handleOnAction={handleOnAction}
            />
          ))}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  cards: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  actionBtn: {
    padding: 8,
    margin: 12,
    marginLeft: "auto",
    backgroundColor: "#841584",
  },
});

export default ManageCards;
