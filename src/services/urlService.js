import {
  getUrlById,
  insertUrl,
  selectRanking,
  selectUrlByShortUrl,
  updateView,
} from "../repositories/urlRepository.js";

export async function createUrl(url) {
  await insertUrl(url);
}

export async function sGetUrl(id) {
  return await getUrlById(id);
}

export async function GetUrlByShortUrl(shortUrl) {
  return await selectUrlByShortUrl(shortUrl);
}

export async function increaseView(idUrl, views) {
  views += 1;
  await updateView(idUrl, views);
}

export async function listRanking() {
  return await selectRanking();
}
