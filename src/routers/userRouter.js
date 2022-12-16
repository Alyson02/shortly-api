import { Router } from "express";
import { signin, signup } from "../controllers/userController.js";
import validationMiddleware from "../middlewares/validationMiddleware.js";
import schemas from "../models/schemas.js";

const userRouter = Router();

userRouter.post("/signup", validationMiddleware(schemas.signupPOST), signup);
userRouter.post("/signin", validationMiddleware(schemas.signinPOST), signin);

export default userRouter;
