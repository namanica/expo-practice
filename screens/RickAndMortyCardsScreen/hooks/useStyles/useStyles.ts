import { CARD_HEIGHT } from "@/screens/RickAndMortyCardsScreen/constants";
import { useMemo } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

export const useStyles = () => {
  const { height: screenHeight } = useWindowDimensions();

  const inset = (screenHeight - CARD_HEIGHT) / 2;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        background: {
          backgroundColor: "#0f172a",
        },
        contentStyle: {
          paddingTop: inset,
          paddingBottom: inset,
        },
      }),
    [inset]
  );

  return { styles };
};
