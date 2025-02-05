import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Navbar from "@/components/Navbar/Navbar";
import Gachapon from "@/components/Home/Gachapon";
import Admin from "@/components/Admin/Admin";
import { PAGE } from "@/types/types";

const HomeScreen = () => {
  const [page, setPage] = useState<PAGE>(PAGE.HOME);
  const isGachaponPage = page === PAGE.HOME;
  return (
    <ThemedView style={styles.wrapper}>
      <ThemedView style={styles.navBar}>
        <Navbar page={page} pageCallback={setPage} />
      </ThemedView>
      <ThemedView style={styles.container}>
        {isGachaponPage && <Gachapon />}
        {!isGachaponPage && <Admin />}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    padding: 12,
  },
  navBar: {
    marginTop: 12,
    marginBottom: 12,
  },
  container: {
    flexGrow: 1,
  },
});

export default HomeScreen;
