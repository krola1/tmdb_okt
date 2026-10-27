// TMDB only gives us the end of the image path, so we add the base url and size in front
// size has a default value (w342), check the API docs for other sizes
// path from TMDB already starts with "/", so we don't add one after size
export const imageHandler = (path, size = "w342") => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
