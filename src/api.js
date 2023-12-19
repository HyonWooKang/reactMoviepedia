// const server = "https://learn.codeit.kr";
// const port = "/3299";
// https://learn.codeit.kr/3299/film-reviews

export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  // throw new Error("버그가 아니라 기능입니다."); // 테스트용 에러
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  // const response = await fetch(server + port + `/film-reviews?${query}`);
  const response = await fetch(
    `https://learn.codeit.kr/4433/film-reviews?${query}`
  );
  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다."); // 에러 처리
  }
  const body = await response.json();

  return body;
}
