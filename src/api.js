const server = "https://learn.codeit.kr";
const port = "/3299";

export async function getReviews(order = "createdAt") {
  const query = `order=${order}`;
  const response = await fetch(server + port + `/film-reviews?${query}`);
  const body = await response.json();

  console.log(`response = ${response}`);
  console.log(`body = ${body}`);

  return body;
}
