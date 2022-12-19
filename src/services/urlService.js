import { insertUrl } from "../repositories/urlRepository.js";

export async function createUrl(url) {
  await insertUrl(url);
}
