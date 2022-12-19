import { nanoid } from "nanoid";
import { createUrl } from "../services/urlService.js";

export async function shorten(req, res) {
  const body = req.body;
  const userId = res.locals.user.id;
  const shortUrl = nanoid().substring(0, 7).toLowerCase();
  const obj = {
    ...body,
    userId,
    shortUrl,
  };

  await createUrl(obj);

  res.status(201).send({ shortUrl });
}
