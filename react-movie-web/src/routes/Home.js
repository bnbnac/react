import Movie from "../components/Movie";
import { useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies((current) => json.data.movies);
    setLoading((current) => false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              rating={movie.rating}
              key={movie.id}
              id={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
