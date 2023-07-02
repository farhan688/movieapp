import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../api";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "./Button";

const MovieContainer = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = popularMovies.slice(firstIndex, lastIndex);
  const npage = Math.ceil(popularMovies.length / recordsPerPage);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 2) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const PopularMovieList = () => {
    return records.map((movie, i) => {
      return (
        <div className="movie-wrapper">
          <div className="movie-konten" key={i}>
            <div className="movie-title">{movie.title}</div>
            <img className="movie-image" alt="foto" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
            <div className="movie-date">Release date: {movie.release_date}</div>
            <div className="movie-rate">
              <AiFillStar className="star" />
              {movie.vote_average}
            </div>
          </div>

          <div className="movie-overview">
            <div className="overview">{movie.overview}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="body-wrapper">
      <input placeholder="Search (min: 3 letters) ...." className="movie-input" onChange={({ target }) => search(target.value)} />
      <div className="pagination ">
        <Button icons={<IoIosArrowBack />} onClick={prevPage} />
        <Button icons={<IoIosArrowForward />} onClick={nextPage} />
      </div>
      <div className="movie-container">
        <PopularMovieList popularMovies={currentPage} />;
      </div>
    </div>
  );
};

export default MovieContainer;