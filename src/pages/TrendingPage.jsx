import { useTrending } from "../hooks/useTanstack";
import MovieCard from "../components/MovieCard";
import MovieList from "../components/MovieList";

export default function TrendingPage() {
  // uses the useTrending hook to return the data object and other keys
  const { data, isLoading, isError, error } = useTrending();

  // conditionals to create a loading effect, and show an error if the fetch fails
  if (isLoading) return <h1>loading.....</h1>;
  if (isError) return <h1>An error occurred {error.message}</h1>;

  // log the data so you can see what the API sends back
  console.log(data);
  // map over the results array, render one MovieCard per movie
  // spread operator (...movie) sends every key in the movie object as a prop
  // the key prop must be on the outermost element returned from map
  return (
    <>
      <header>Trending</header>
      <MovieList movieArray={data.results} />
    </>
  );
}
