const server = "https://learn.codeit.kr";
const port = "/3299";

export async function getReviews() {
  const response = await fetch(server + port + "/film-reviews");
  const body = await response.json();

  console.log(`response = ${response}`);
  console.log(`body = ${body}`);

  return body;
}
