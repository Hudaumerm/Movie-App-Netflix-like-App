export const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";
const imageUrl = "https://image.tmdb.org/t/p/original";

const requests = {
  AllMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
  Originals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  LatestMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,

  PopularMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  UpcomingMovies:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  NowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  TopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
   //tv shows api
   TrendingTvShows:`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`,
   AiringToday:`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
   TopRatedShows:`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  //genre api
  Action:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Adventure:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
  Animation:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  Comedy:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Crime:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
  Documentary:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
  Drama:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
  Family:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  Fantasy:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`,
  History:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`,
  Horror:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Mystery:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  Romance:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  TvMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  ScienceFiction:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  Thriller:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`,
  War:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752`,

  };

const yVideos={
  trailers:`movie/{id}/videos?api_key=${API_KEY}&language=en-US`
}
const footerData = [{
    id: 1,
    link: "FAQ",
  },
  {
    id: 2,
    link: "Investor Relations",
  },
  {
    id: 3,
    link: "Privacy",
  },
  {
    id: 4,
    link: "Speed Test",
  },
  {
    id: 5,
    link: "Help Center",
  },
  {
    id: 6,
    link: "Jobs",
  },
  {
    id: 7,
    link: "Cookie Preferences",
  },
  {
    id: 8,
    link: "Legal Notices",
  },
  {
    id: 9,
    link: "Account",
  },
  {
    id: 10,
    link: "Ways to Watch",
  },
  {
    id: 11,
    link: "Coorporate Information",
  },
  {
    id: 12,
    link: "Only on Netflix",
  },
  {
    id: 13,
    link: "Media Center",
  },
  {
    id: 14,
    link: "Terms of use",
  },
  {
    id: 15,
    link: "Contact US",
  },
];

export { imageUrl,footerData,yVideos };
export default requests;
