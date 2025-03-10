import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import Pack from "../Pack/Pack";
import {
  handleGachaponDrawMulti,
  handleGachaponDrawSingle,
} from "@/services/services";
import { responseHandler } from "@/util/helper";
import { useState } from "react";
import { CardProps } from "@/types/types";
import Display from "../Draws/Display";

enum DRAW_TYPE {
  SINGLE = 0,
  MULTI = 1,
}

const Gachapon = () => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const [gachaponDraw, setGachaponDraw] = useState<CardProps[]>([]);
  // Migrate to server for multipacks, optional.
  const demoPack = {
    title: "Pokemon",
    imageUrl: "https://i.imgur.com/j6QziiO.png",
    subtitle: "Moonlight Shadow",
  };

  const handleOnDrawResult = (result: CardProps | CardProps[]) => {
    setGachaponDraw(Array.isArray(result) ? result : [result]);
    setShowResult(true);
  };

  const handleOnDraw = (drawType: DRAW_TYPE) =>
    (drawType === DRAW_TYPE.SINGLE
      ? handleGachaponDrawSingle()
      : handleGachaponDrawMulti()
    )
      .then((response) => responseHandler(response)?.json())
      ?.then((response) => handleOnDrawResult(response));

  return (
    <ThemedView style={styles.wrapper}>
      <ThemedText type="title">Attempt Your Draws!</ThemedText>
      <Pack {...demoPack} />
      <ThemedView style={styles.actions}>
        <TouchableOpacity
          style={styles.drawOnce}
          onPress={() => handleOnDraw(DRAW_TYPE.SINGLE)}
        >
          <ThemedText style={styles.drawText} type="defaultSemiBold">
            Draw 1x
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawTen}
          onPress={() => handleOnDraw(DRAW_TYPE.MULTI)}
        >
          <ThemedText style={styles.drawText} type="defaultSemiBold">
            Draw 10x
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <Display
        isVisible={showResult}
        pokemonDraws={gachaponDraw}
        handleOnClose={() => setShowResult(false)}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    margin: 24,
  },
  actions: {
    flexDirection: "row",
  },
  drawOnce: {
    padding: 8,
    margin: 12,
    backgroundColor: "#841584",
  },
  drawTen: {
    padding: 8,
    margin: 12,
    backgroundColor: "#841584",
  },
  drawText: {
    textAlign: "center",
  },
});

export default Gachapon;
