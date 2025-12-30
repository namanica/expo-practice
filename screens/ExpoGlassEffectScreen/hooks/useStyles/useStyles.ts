import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        warning: {
          color: "white",
          margin: 24,
        },
        wrapper: {
          backgroundColor: "black",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        row: {
          flexDirection: "row",
        },
        square: {
          width: 100,
          height: 100,
          borderRadius: 8,
          // backgroundColor: isLiquidGlassAvailable() ? undefined : color,
        },
      }),
    []
  );

  return { styles };
};
