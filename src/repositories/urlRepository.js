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

export async function getUrlById(id) {
  return (
    await db.query(`SELECT id, "shortUrl", url FROM urls WHERE id = $1`, [id])
  ).rows[0];
}

export async function selectUrlByShortUrl(shortUrl) {
  return (
    await db.query(`SELECT * FROM urls WHERE "shortUrl" = $1`, [shortUrl])
  ).rows[0];
}

export async function updateView(id, views) {
  await db.query(`UPDATE urls SET views = $1 WHERE id = $2`, [views, id]);
}

export async function selectRanking() {
  return (await db.query(`
  SELECT u.id, u.name, COUNT(u.id) as "linksCount", SUM(urls.views) as "visitCount"
    FROM public.urls 
    JOIN users u on u.id = urls."userId"
    GROUP BY u.id
    ORDER BY "visitCount" DESC
    LIMIT 10;`)).rows;
}
