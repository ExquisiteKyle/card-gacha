import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import TopNavbar from "@/components/Navbar/TopNavbar";
import Gachapon from "@/components/Home/Gachapon";
import Admin from "@/components/Admin/Admin";
import { HomeProp, PAGE } from "@/types/types";

const HomeScreen = ({ navigation, route }: HomeProp) => {
  const [page, setPage] = useState<PAGE>(PAGE.HOME);
  const isGachaponPage = page === PAGE.HOME;
  return (
    <ThemedView style={styles.wrapper}>
      <ThemedView style={styles.navBar}>
        <TopNavbar
          page={page}
          navigation={navigation}
          route={route}
          pageCallback={setPage}
        />
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
