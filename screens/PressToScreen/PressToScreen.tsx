import {
  createAnimatedPressable,
  PressableOpacity,
  PressableScale,
} from "pressto";
import { FC, PropsWithChildren, useMemo } from "react";
import { View, Text } from "react-native";
import { useStyles } from "./hooks";

const TestBlock: FC<PropsWithChildren> = ({ children }) => {
  const { styles } = useStyles();

  const modifiedChildren = useMemo(
    () =>
      typeof children === "string" ? (
        <View style={styles.wrapper}>
          <Text style={styles.typo}>{children}</Text>
        </View>
      ) : (
        children
      ),
    [children, styles.typo, styles.wrapper]
  );

  return <View style={styles.blackBlock}>{modifiedChildren}</View>;
};

// custom animated pressable
const PressableRotate = createAnimatedPressable((progress) => {
  "worklet";
  return {
    transform: [{ rotate: `${progress * 15}deg` }],
  };
});

export const PressToScreen = () => {
  const { styles } = useStyles();

  return (
    <View style={styles.wrapper}>
      <PressableScale>
        <TestBlock>Scale inside</TestBlock>
      </PressableScale>

      <PressableOpacity>
        <TestBlock>Change opacity</TestBlock>
      </PressableOpacity>

      <PressableRotate>
        <TestBlock>Rotate me</TestBlock>
      </PressableRotate>
    </View>
  );
};
