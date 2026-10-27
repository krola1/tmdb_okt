import { useQuery } from "@tanstack/react-query";
import { fetchTrending } from "../axios/tmdb.js";

// useQuery takes in an object, the two most important keys in this object are queryKey and queryFn
// queryKey is an array with a unique identifier
// queryFn is the function we want to run
export const useTrending = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrending,
  });
};
