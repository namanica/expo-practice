import { View, Text } from "react-native";
import {
  GlassContainer,
  GlassView,
  isLiquidGlassAvailable,
} from "expo-glass-effect";
import { useStyles } from "./hooks";
import { GRADIENTS, SPACING } from "./constants";
import { useMemo } from "react";

const LiquidGlassCheck = () => {
  const { styles } = useStyles();

  const warning = useMemo(
    () =>
      isLiquidGlassAvailable()
        ? "Liquid Glass effect is available"
        : "Liquid Glass effect is not available",
    []
  );

  return <Text style={styles.warning}>{warning}</Text>;
};

export const ExpoGlassEffectScreen = () => {
  const { styles } = useStyles();

  return (
    <View style={styles.wrapper}>
      <LiquidGlassCheck />
      <View>
        {GRADIENTS.map((gradient) => (
          <GlassContainer
            key={gradient.id}
            spacing={SPACING}
            style={styles.row}
          >
            {gradient.colors.map((color, index) => {
              const backgroundColor = isLiquidGlassAvailable()
                ? undefined
                : color;

              return (
                <GlassView
                  key={index}
                  style={{
                    ...styles.square,
                    backgroundColor,
                  }}
                  tintColor={color}
                  glassEffectStyle="clear"
                  isInteractive
                />
              );
            })}
          </GlassContainer>
        ))}
      </View>
    </View>
  );
};
