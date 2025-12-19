import { ViewStyle } from "react-native";
import { SharedValue } from "react-native-reanimated";

export interface Props {
  index: number;
  scrollY: SharedValue<number>;
}

export type AnimationReturn = {
  cardAnimatedStyle: ViewStyle;
  backgroundAnimatedStyle: ViewStyle;
};
