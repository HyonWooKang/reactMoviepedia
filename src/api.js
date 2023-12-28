// const server = "https://learn.codeit.kr";
// const port = "/3299";
// https://learn.codeit.kr/3299/film-reviews

const BASE_URL = "https://learn.codeit.kr/4433";

export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(`${BASE_URL}/film-reviews?${query}`);
  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다."); // 에러 처리
  }
  const body = await response.json();
  return body;
}

export async function createReviews(formData) {
  const response = await fetch(`${BASE_URL}/film-reviews?}`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("리뷰를 생성하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
