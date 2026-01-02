import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        },
        typo: {
          color: "white",
        },
        blackBlock: {
          width: 200,
          height: 50,
          backgroundColor: "black",
        },
      }),
    []
  );

  return { styles };
};
