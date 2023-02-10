import useSWR from "swr";

export const useActors = () => {
  const { data, error, isLoading } = useSWR("/api/user", fetch);

  return {
    actors: data,
    isLoading,
    error,
  };
};
