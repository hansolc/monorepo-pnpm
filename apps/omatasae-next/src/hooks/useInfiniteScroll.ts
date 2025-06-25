import { useInfiniteQuery } from "@tanstack/react-query";

type UseInfiniteScrollProps<T> = {
  apiCall: (params: { skip: number; limit: number }) => Promise<T[]>;
  initialData: T[];
  key: string;
  limit: number;
  skip: number;
};

function useInfiniteScroll<T>({
  apiCall,
  initialData,
  key,
  limit,
  skip,
}: UseInfiniteScrollProps<T>) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<T[], Error>({
      queryKey: [key],
      queryFn: async ({ pageParam = skip }) => {
        const currentSkip = typeof pageParam === "number" ? pageParam : skip;
        return await apiCall({ limit, skip: currentSkip });
      },
      initialPageParam: skip,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length < limit ? undefined : allPages.length * limit;
      },
      initialData: {
        pages: [initialData],
        pageParams: [skip],
      },
    });

  return {
    data: data?.pages.flat() ?? [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}

export default useInfiniteScroll;
