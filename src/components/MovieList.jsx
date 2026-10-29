import MovieCard from "../components/MovieCard.jsx";

export default function MovieList({ movieArray }) {
  return (
    <>
      {movieArray.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </>
  );
}
