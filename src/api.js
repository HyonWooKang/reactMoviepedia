// const server = "https://learn.codeit.kr";
// const port = "/3299";
// https://learn.codeit.kr/3299/film-reviews

export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  // const response = await fetch(server + port + `/film-reviews?${query}`);
  const response = await fetch(
    `https://learn.codeit.kr/3299/film-reviews?${query}`
  );
  const body = await response.json();

  console.log(`response = ${response}`);
  console.log(`body = ${body}`);

  return body;
}
