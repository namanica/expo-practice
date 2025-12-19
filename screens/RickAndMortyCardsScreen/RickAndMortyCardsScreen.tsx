import { ListRenderItem } from "react-native";
import Animated from "react-native-reanimated";
import { CARD_HEIGHT, SPACING } from "./constants";
import { Card } from "./components";
import { useLogic, useStyles } from "./hooks";
import { Character } from "./types";

export const RickAndMortyCardsScreen = () => {
  const { styles } = useStyles();

  const { data, onEndReached, listRef, scrollToCard, scrollHandler, scrollY } =
    useLogic();

  const renderItem: ListRenderItem<Character> = ({ item, index }) => (
    <Card item={item} index={index} scrollY={scrollY} onPress={scrollToCard} />
  );

  return (
    <Animated.FlatList
      ref={listRef}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={onEndReached}
      onScroll={scrollHandler}
      decelerationRate="fast"
      onEndReachedThreshold={0.5}
      snapToInterval={CARD_HEIGHT + SPACING}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentStyle}
      style={styles.background}
      renderItem={renderItem}
    />
  );
};
