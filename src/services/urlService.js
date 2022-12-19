import { getUrlById, insertUrl } from "../repositories/urlRepository.js";

export async function createUrl(url) {
  await insertUrl(url);
}

export async function sGetUrl(id) {
  return await getUrlById(id);
}
