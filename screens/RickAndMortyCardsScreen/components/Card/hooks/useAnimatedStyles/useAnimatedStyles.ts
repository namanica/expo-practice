import {
  CARD_HEIGHT,
  SPACING,
} from "@/screens/RickAndMortyCardsScreen/constants";
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { AnimationReturn, Props } from "./types";

export const useAnimatedStyles = ({
  index,
  scrollY,
}: Props): AnimationReturn => {
  const cardAnimatedStyle = useAnimatedStyle(() => {
    const position = index * (CARD_HEIGHT + SPACING);
    const diff = scrollY.value - position;
    const inputRange = [-CARD_HEIGHT - SPACING, 0, CARD_HEIGHT + SPACING];

    const scale = interpolate(
      diff,
      inputRange,
      [0.9, 1, 0.9],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      diff,
      inputRange,
      [0.3, 1, 0.3],
      Extrapolation.CLAMP
    );

    const translateY = interpolate(
      diff,
      inputRange,
      [SPACING * 2, 0, -SPACING * 2],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ perspective: 1000 }, { scale }, { translateY }],
      opacity,
    };
  });

  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    const position = index * (CARD_HEIGHT + SPACING);
    const diff = scrollY.value - position;

    return {
      opacity: interpolate(
        diff,
        [0, CARD_HEIGHT / 2, CARD_HEIGHT],
        [1, 0.8, 0.4],
        Extrapolation.CLAMP
      ),
    };
  });

  return { cardAnimatedStyle, backgroundAnimatedStyle };
};
