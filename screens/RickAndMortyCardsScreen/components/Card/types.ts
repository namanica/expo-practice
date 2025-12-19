import { SharedValue } from "react-native-reanimated";
import { Character } from "../../types";

export interface Props {
  item: Character;
  index: number;
  scrollY: SharedValue<number>;
  onPress: (index: number) => void;
}
