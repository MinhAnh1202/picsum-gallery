import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPhotoDetail, buildImageUrl } from "../api";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";

function PhotoDetail() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadDetail() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchPhotoDetail(id);
        if (!cancelled) {
          setPhoto(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Failed to load photo detail");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadDetail();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (isLoading) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <ErrorMessage message={error} />
        <Link to="/photos" className="btn" style={{ marginTop: "1rem" }}>
          Back to list
        </Link>
      </div>
    );
  }

  if (!photo) {
    return (
      <div className="container">
        <p>Photo not found</p>
        <Link to="/photos" className="btn" style={{ marginTop: "1rem" }}>
          Back to list
        </Link>
      </div>
    );
  }

  // Picsum không có title/description -> dùng placeholder
  const title = `Beautiful photo #${photo.id}`;
  const description =
    "This is a sample description for this photo from Lorem Picsum. The actual API does not provide description, so this is placeholder text for UI.";

  return (
    <div className="container">
      <Link to="/photos" className="back-link">
        ← Back to Photos
      </Link>

      <div className="detail-layout">
        <div className="detail-image-wrapper">
          <img
            src={buildImageUrl(photo.id, 800, 600)}
            alt={title}
            className="detail-image"
          />
        </div>
        <div className="detail-info">
          <h1 className="detail-title">{title}</h1>
          <p className="detail-author">
            <strong>Author:</strong> {photo.author}
          </p>
          <p className="detail-description">
            <strong>Description:</strong> {description}
          </p>
          <p className="detail-meta">
            <strong>Original size:</strong> {photo.width} x {photo.height}
          </p>
          <a
            href={photo.download_url}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View original
          </a>
        </div>
      </div>
    </div>
  );
}

export default PhotoDetail;
