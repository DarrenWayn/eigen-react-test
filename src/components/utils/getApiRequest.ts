import { useQuery } from "react-query";
import { fetcher } from "./fetcher";

const _fetchAllNews = (query: string) => {
  const { isLoading, error, data } = useQuery("getAllNews", () =>
    fetcher(query)
  );
  return { isLoading, error, data };
};

export { _fetchAllNews };
