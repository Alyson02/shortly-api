import { Router } from "express";
import {
  accessUrl,
  getUrl,
  ranking,
  removeUrl,
  shorten,
  userUrls,
} from "../controllers/urlController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import validationMiddleware from "../middlewares/validationMiddleware.js";
import schemas from "../models/schemas.js";

const urlRouter = Router();

urlRouter.post(
  "/urls/shorten",
  authMiddleware,
  validationMiddleware(schemas.urlPOST),
  shorten
);

urlRouter.get("/urls/:id", getUrl);

urlRouter.get("/urls/open/:shortUrl", accessUrl);

urlRouter.get("/ranking", ranking);

urlRouter.delete("/urls/:id", authMiddleware, removeUrl);

urlRouter.get("/users/me", authMiddleware, userUrls);

export default urlRouter;
