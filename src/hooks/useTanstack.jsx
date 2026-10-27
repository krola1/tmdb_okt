import { useQuery } from "@tanstack/react-query";
import { fetchTrending } from "../axios/tmdb.js";

// usequery takes in an object, the two most important keys in this object is queryKey and queryFn
//querykey is an array with uniqe indetifier
//quertyfn is the function we want to run
export const useTrending = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrending,
  });
};
