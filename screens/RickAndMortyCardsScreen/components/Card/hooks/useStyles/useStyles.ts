import { CARD_HEIGHT } from "@/screens/RickAndMortyCardsScreen/constants";
import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useStyles = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          width: "100%",
          height: CARD_HEIGHT,
        },
        card: {
          flex: 1,
          borderRadius: 24,
          overflow: "hidden",
          backgroundColor: "#1e293b",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 20 },
          shadowOpacity: 0.4,
          shadowRadius: 30,
          elevation: 10,
        },
        cardImage: {
          width: "100%",
          height: "100%",
          position: "absolute",
        },
        gradient: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "60%",
        },
        cardContent: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 24,
        },
        statusBadge: {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 20,
          alignSelf: "flex-start",
          marginBottom: 12,
          backdropFilter: "blur(10px)",
        },
        statusDot: {
          width: 8,
          height: 8,
          borderRadius: 4,
          marginRight: 6,
        },
        statusText: {
          color: "#fff",
          fontSize: 12,
          fontWeight: "600",
        },
        characterName: {
          fontSize: 32,
          fontWeight: "bold",
          color: "#fff",
          marginBottom: 12,
          textShadowColor: "rgba(0, 0, 0, 0.75)",
          textShadowOffset: { width: 0, height: 2 },
          textShadowRadius: 10,
        },
        infoRow: {
          flexDirection: "row",
          marginBottom: 6,
        },
        infoLabel: {
          color: "#94a3b8",
          fontSize: 14,
          marginRight: 8,
          fontWeight: "600",
        },
        infoValue: {
          color: "#e2e8f0",
          fontSize: 14,
          flex: 1,
        },
      }),
    []
  );

  return { styles };
};
