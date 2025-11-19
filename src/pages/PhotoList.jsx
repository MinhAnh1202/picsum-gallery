import { useEffect, useRef, useState } from "react";
import { fetchPhotos } from "../api";
import PhotoCard from "../../components/PhotoCard";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";

const PAGE_LIMIT = 20;

function PhotoList() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loaderRef = useRef(null);

  // Load ảnh mỗi khi page thay đổi
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchPhotos(page, PAGE_LIMIT);
        if (cancelled) return;

        setPhotos((prev) => [...prev, ...data]);
        if (data.length < PAGE_LIMIT) {
          setHasMore(false); // hết ảnh
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Failed to load photos");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [page]);

  // Infinite scroll bằng IntersectionObserver
  useEffect(() => {
    if (!hasMore) return;
    const target = loaderRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !isLoading && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [isLoading, hasMore]);

  const handleRetry = () => {
    // Retry lại page hiện tại
    setError(null);
    setPage((p) => p); // trigger lại useEffect? -> cách đơn giản là set lại state
    // Hoặc bạn có thể clear dữ liệu và load từ đầu:
    // setPhotos([]);
    // setPage(1);
    // setHasMore(true);
  };

  return (
    <div className="container">
      <h1 className="page-title">Photos</h1>

      {photos.length === 0 && isLoading && <Spinner />}

      {error && photos.length === 0 && (
        <ErrorMessage message={error} onRetry={handleRetry} />
      )}

      <div className="photo-grid">
        {photos.map((p) => (
          <PhotoCard key={p.id + "-" + p.download_url} photo={p} />
        ))}
      </div>

      {/* Loading indicator dưới cùng */}
      {isLoading && photos.length > 0 && <Spinner />}

      {/* Div sentinel cho IntersectionObserver */}
      {hasMore && !isLoading && (
        <div ref={loaderRef} className="scroll-sentinel">
          <span>Scroll xuống để tải thêm...</span>
        </div>
      )}

      {!hasMore && (
        <p className="end-message">Bạn đã xem hết danh sách ảnh 🚀</p>
      )}
    </div>
  );
}

export default PhotoList;
