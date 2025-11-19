const API_BASE = "https://picsum.photos";

// Lấy list ảnh (dùng cho trang /photos)
export async function fetchPhotos(page = 1, limit = 20) {
  const res = await fetch(`${API_BASE}/v2/list?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }
  return res.json();
}

// Lấy thông tin chi tiết một ảnh (dùng cho /photos/:id)
export async function fetchPhotoDetail(id) {
  const res = await fetch(`${API_BASE}/id/${id}/info`);
  if (!res.ok) {
    throw new Error("Failed to fetch photo detail");
  }
  return res.json();
}

// Helper tạo URL ảnh kích thước mong muốn
export function buildImageUrl(id, width, height) {
  return `${API_BASE}/id/${id}/${width}/${height}`;
}
