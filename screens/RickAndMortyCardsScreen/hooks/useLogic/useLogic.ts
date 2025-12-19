import { QUERY_KEYS } from "@/constants/query-keys";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { getCharacters } from "../../api";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { CARD_HEIGHT, SPACING } from "../../constants";

export const useLogic = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEYS.RICK_AND_MORTY_CARDS],
      queryFn: getCharacters,
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => lastPage.info.next,
      select: (data) => data.pages.flatMap((page) => page.results),
    });

  const onEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const listRef = useRef<Animated.FlatList>(null);

  const scrollToCard = (index: number) => {
    const offset = index * (CARD_HEIGHT + SPACING);
    listRef?.current?.scrollToOffset({ offset, animated: true });
  };

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return { data, onEndReached, listRef, scrollY, scrollToCard, scrollHandler };
};
