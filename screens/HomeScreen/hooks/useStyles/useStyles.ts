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
        },
      }),
    []
  );

  return { styles };
};
