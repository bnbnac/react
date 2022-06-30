import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

function Movie({ id, medium_cover_image, title, summary, rating, key }) {
  return (
    <div key={key}>
      <h2>
        <Link to={`/movie/${id}`}>
          {title}({rating})
        </Link>
      </h2>
      <p>{summary}</p>
      <img alt={title} src={medium_cover_image}></img>
    </div>
  );
}
export default Movie;
