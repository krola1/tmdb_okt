import { useQuery } from "@tanstack/react-query";
import { fetchTrending } from "./axios/tmdb";
import { useTrending } from "./hooks/useTanstack";
import MovieCard from "./components/MovieCard";

export default function App() {
  // uses useTrending hiook to return data object and other keys
  const { data, isLoading, isError, error } = useTrending();

  //conditonals to vcreat loading effect
  if (isLoading) return <h1>loading.....</h1>;
  if (isError) return <h1>An arror occured {error.message}</h1>;

  console.log(data);

  return (
    <>
      {data.results.map((movie) => (
        <>
          <MovieCard key={movie.id} {...movie} />
        </>
      ))}
    </>
  );
}
