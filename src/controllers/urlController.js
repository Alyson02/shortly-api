import { nanoid } from "nanoid";
import { createUrl, sGetUrl } from "../services/urlService.js";

export async function shorten(req, res) {
  try {
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
  } catch (error) {
    res.status(500).send("Erro interno");
  }
}

export async function getUrl(req, res) {
  try {
    const { id } = req.params;
    const url = await sGetUrl(id);

    if (!url) res.sendStatus(404);

    res.send(url);
  } catch (error) {
    res.status(500).send("Erro interno");
  }
}
