const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchPopularMovies = async () => {
  const today = new Date();
  const sixYearsAgo = new Date(today);
  sixYearsAgo.setFullYear(today.getFullYear() - 6);

  const params = new URLSearchParams({
    api_key: API_KEY,
    sort_by: "popularity.desc",
    "primary_release_date.gte": sixYearsAgo.toISOString().slice(0, 10),
    "primary_release_date.lte": today.toISOString().slice(0, 10),
  });

  try {
    const response = await fetch(`${BASE_URL}/discover/movie?${params}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};