import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres, date_uploaded, synopsis}) {
  return (
    <div className="movie">
      <Link to={{ pathname: '/movie-detail', state: { year, title, summary, poster, genres, date_uploaded, synopsis } }}>
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__date_uploaded">{date_uploaded}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movie__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <h4>summary:</h4>
          <p className="movie__summary">{summary.slice(0, 40)}...</p>
          <h4>synopsis:</h4>
          <p className="movie__synopsis">{synopsis.slice(0, 40)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  date_uploaded: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
