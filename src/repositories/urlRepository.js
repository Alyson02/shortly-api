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
  return (await db.query(`SELECT * FROM urls WHERE id = $1`, [id])).rows[0];
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
  return (
    await db.query(`
  SELECT u.id, u.name, COUNT(urls.id) as "linksCount", COALESCE(SUM(urls.views), 0) as "visitCount"
    FROM public.urls 
    RIGHT JOIN users u on u.id = urls."userId"
    GROUP BY u.id
    ORDER BY "visitCount" DESC
    LIMIT 10;`)
  ).rows;
}

export async function deleteUrl(id) {
  await db.query(`DELETE FROM urls WHERE id = $1`, [id]);
}

export async function getUrlsByUserId(userId) {
  return (await db.query(`SELECT * FROM urls WHERE "userId" = $1`, [userId]))
    .rows;
}

export async function getSumVisitsUser(userId) {
  return (
    await db.query(
      `SELECT SUM(views) as "visitCount" FROM urls where "userId" = $1;`,
      [userId]
    )
  ).rows[0].visitCount;
}
