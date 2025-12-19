import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View, Text, Image } from "react-native";
import Animated from "react-native-reanimated";
import { useAnimatedStyles, useStyles } from "./hooks";
import { useMemo } from "react";
import { Props } from "./types";
import { SPACING } from "../../constants";

export const Card = ({ item, index, scrollY, onPress }: Props) => {
  const { styles } = useStyles();

  const { cardAnimatedStyle, backgroundAnimatedStyle } = useAnimatedStyles({
    index,
    scrollY,
  });

  const statusColor = useMemo(
    () =>
      item.status === "Alive"
        ? "#10b981"
        : item.status === "Dead"
        ? "#ef4444"
        : "#6b7280",
    [item.status]
  );

  return (
    <Pressable onPress={() => onPress(index)} style={{ marginBottom: SPACING }}>
      <Animated.View style={[styles.wrapper, cardAnimatedStyle]}>
        <View style={styles.card}>
          <Image
            source={{ uri: item.image }}
            style={styles.cardImage}
            resizeMode="cover"
          />

          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.7)", "rgba(0,0,0,0.95)"]}
            style={styles.gradient}
          />

          <Animated.View style={[styles.cardContent, backgroundAnimatedStyle]}>
            <View style={styles.statusBadge}>
              <View
                style={[styles.statusDot, { backgroundColor: statusColor }]}
              />
              <Text style={styles.statusText}>{item.status}</Text>
            </View>

            <Text style={styles.characterName} numberOfLines={1}>
              {item.name}
            </Text>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Species:</Text>
              <Text style={styles.infoValue}>{item.species}</Text>
            </View>

            {item.origin?.name && (
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Origin:</Text>
                <Text style={styles.infoValue} numberOfLines={1}>
                  {item.origin.name}
                </Text>
              </View>
            )}
          </Animated.View>
        </View>
      </Animated.View>
    </Pressable>
  );
};
