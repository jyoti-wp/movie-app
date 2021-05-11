const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0751e69a62186f2f025ba222c867b38c&%page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=0751e69a62186f2f025ba222c867b38c&%query=''";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

// get movies function

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
}
