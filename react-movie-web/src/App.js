import { useEffect, useState } from "react";

function App() {
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
            <div key={movie.id}>
              <h2>
                {movie.title}({movie.rating})
              </h2>
              <p>{movie.summary}</p>
              <img alt="cover" src={movie.medium_cover_image}></img>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
