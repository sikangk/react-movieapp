import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, lgposter, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          id,
          year,
          title,
          summary,
          poster,
          lgposter,
          genres,
        },
      }}
    >
      <div className="movies_movie">
        <img src={poster} alt={title} title={title} />
        <div className="movies_data">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <ul className="movie_genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="genres_genre">
                  {genre}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  //잘못된 속성으로 보낼때 오류를 확실히 잡기위해 isRequired
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
