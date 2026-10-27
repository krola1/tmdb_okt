import { imageHandler } from "../config/imageHandler";

export default function MovieCard({ poster_path, title }) {
  const img = imageHandler(poster_path);
  return (
    <>
      <h1>{title}</h1>
      <img src={img} alt="" />
    </>
  );
}
