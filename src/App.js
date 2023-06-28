import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

const App = () => {
const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
          <div className="movie-wrapper" key={i}>
            <div className="movie-title">{movie.title}</div>
            <img className="movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="Movie" />
            <div className="movie-date">{movie.release_date}</div>
            <div className="movie-rate">{movie.vote_average}</div>
          </div>
      )
    })
  }

  const search = async(q) => {
    if(q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nonton Apa Nich</h1>
        <input
          placeholder="Search Movie..."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  )
}

export default App;
