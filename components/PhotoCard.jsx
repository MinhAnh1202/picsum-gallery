import { Link } from "react-router-dom";
import { buildImageUrl } from "../src/api";

function PhotoCard({ photo }) {
  const { id, author } = photo;

  return (
    <Link to={`/photos/${id}`} className="photo-card">
      <div className="photo-thumb-wrapper">
        <img
          src={buildImageUrl(id, 400, 300)}
          alt={`Photo by ${author}`}
          className="photo-thumb"
          loading="lazy"
        />
      </div>
      <div className="photo-info">
        <p className="photo-author">{author}</p>
      </div>
    </Link>
  );
}

export default PhotoCard;
