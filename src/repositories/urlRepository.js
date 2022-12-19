import connectDB from "../db.js";

const db = await connectDB();

export async function insertUrl(url) {
  await db.query("INSERT INTO urls VALUES(DEFAULT, $1, $2, $3, $4)", [
    url.shortUrl,
    url.url,
    0,
    url.userId,
  ]);
}