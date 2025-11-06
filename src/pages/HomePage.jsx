import MovieCard from "../components/MovieCard";
import axios from "axios";
import {useState, useEffect} from "react";
import { useGlobal } from "../context/ContextGlobal"

const HomePage = () => {

  const { setIsLoading } = useGlobal();
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    setIsLoading(true);
    axios
    .get("http://localhost:3000/api/movie")
    .then((res) => setMovies(res.data))
    .catch((err) => console.error(err))
    .finally(() => { setIsLoading(false) })
  };

  useEffect(fetchMovies, []);

  return (
    <div className="text-center">
      <h1 className="mb-2">Home Page</h1>
      <h5 className="text-muted mb-4">
        Home Page del sito
      </h5>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col d-flex"> 
          <MovieCard  movieProp={movie}/>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default HomePage;