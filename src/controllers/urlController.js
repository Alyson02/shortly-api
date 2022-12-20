import { nanoid } from "nanoid";
import {
  createUrl,
  GetUrlByShortUrl,
  getUrlsUser,
  getUserCountVisits,
  increaseView,
  listRanking,
  sGetUrl,
  sRemoveUrl,
} from "../services/urlService.js";

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

    res.send({ id: url.id, shortUrl: url.shortUrl, url: url.url });
  } catch (error) {
    res.status(500).send("Erro interno");
  }
}

export async function accessUrl(req, res) {
  try {
    const { shortUrl } = req.params;
    const url = await GetUrlByShortUrl(shortUrl);

    if (!url) res.sendStatus(404);

    await increaseView(url.id, url.views);

    res.redirect(url.url);
  } catch (error) {
    res.status(500).send("Erro interno");
  }
}

export async function ranking(req, res) {
  try {
    const ranking = await listRanking();
    res.send(ranking);
  } catch (error) {
    res.status(500).send("Erro interno");
  }
}

export async function removeUrl(req, res) {
  try {
    const { user } = res.locals;
    const { id } = req.params;

    const url = await sGetUrl(id);
    console.log(url);
    console.log(user);

    if (!url) return res.sendStatus(404);
    if (url.userId !== user.id) return res.sendStatus(401);

    await sRemoveUrl(id);

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("Erro interno");
  }
}

export async function userUrls(req, res) {
  try {
    const { user } = res.locals;
    const shortenedUrls = (await getUrlsUser(user.id)).map((u) => {
      return {
        id: u.id,
        shortUrl: u.shortUrl,
        url: u.url,
        visitCount: u.views,
      };
    });
    const visitCount = Number(await getUserCountVisits(user.id));

    res.send({ id: user.id, name: user.name, visitCount, shortenedUrls });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro interno");
  }
}
