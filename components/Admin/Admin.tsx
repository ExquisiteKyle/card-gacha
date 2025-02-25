import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { useState } from "react";
import AddCard from "./AddCard";
import ManageCards from "./ManageCards";

enum AdminPage {
  ADD = "addCard",
  VIEW = "viewAllCards",
  MANAGE = "manageCards",
}

const getButton = (
  text: string,
  pageCallback: (page: AdminPage) => void,
  page: AdminPage,
  currentPage: AdminPage
) => {
  return (
    <TouchableOpacity onPress={() => pageCallback(page)}>
      <ThemedText
        style={[styles.navButton, page === currentPage && styles.selected]}
        type="defaultSemiBold"
      >
        {text}
      </ThemedText>
    </TouchableOpacity>
  );
};

const Admin = () => {
  const [page, setPage] = useState<AdminPage>(AdminPage.VIEW);
  return (
    <ThemedView style={styles.wrapper}>
      <ThemedView style={styles.sideNav}>
        {getButton("Manage cards", setPage, AdminPage.MANAGE, page)}
        {getButton("Add card", setPage, AdminPage.ADD, page)}
      </ThemedView>
      <ThemedView style={styles.container}>
        {page === AdminPage.ADD && <AddCard />}
        {page === AdminPage.MANAGE && <ManageCards />}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 16,
    margin: 24,
  },
  sideNav: {
    flexDirection: "column",
    gap: 16,
  },
  navButton: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    textAlign: "center",
  },
  container: {
    flexGrow: 1,
  },
  selected: {
    backgroundColor: "#841584",
    color: "#FFFFFF",
  },
});

export default Admin;
