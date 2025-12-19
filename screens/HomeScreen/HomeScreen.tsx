import { useRouter } from "expo-router";
import { Button, View } from "react-native";
import { useStyles } from "./hooks";

export const HomeScreen = () => {
  const { push } = useRouter();

  const { styles } = useStyles();

  return (
    <View style={styles.wrapper}>
      <Button title="Open modal" onPress={() => push("/modal")} />
      <Button title="Open demo" onPress={() => push("/(stack)/ram-cards")} />
    </View>
  );
};
