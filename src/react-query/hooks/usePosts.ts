import {
  InfiniteData,
  QueryFunction,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) =>
  useInfiniteQuery<InfiniteData<Post[], Error>>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: pageParam,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
    getNextPageParam(lastPage, allPages) {
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });

export default usePosts;
