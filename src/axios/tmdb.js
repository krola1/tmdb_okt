import axios from "axios";

// first set up axios base function, this handles authorization
// use create method, set baseURL to the correct address
// assign headers in an object, use correct headers according to API docs
const api_tmdb = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
});

// when fetching, use async function.
// get data by using await, and on the axios instance invoke ".get" method,
// the argument is the endpoint you are trying to access
export const fetchTrending = async () => {
  const res = await api_tmdb.get("trending/all/week");
  return res.data;
};

// same function written as a regular function declaration instead of an arrow function
// async function fetchTrending() {
//   const res = await api_tmdb.get("trending/all/week");
//   return res.data;
// }
