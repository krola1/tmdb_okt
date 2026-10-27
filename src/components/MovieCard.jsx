import { imageHandler } from "../config/imageHandler";

// destructure the props we need straight from the movie object
export default function MovieCard({ poster_path, title }) {
  // poster_path is only the end of the url, imageHandler builds the full image url
  const img = imageHandler(poster_path);
  return (
    <>
      <h1>{title}</h1>
      <img src={img} alt="" />
    </>
  );
}
