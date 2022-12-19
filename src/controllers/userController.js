import { createUser, userByEmail } from "../services/userService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
  try {
    const body = req.body;

    const hasUserWithEmail = (await userByEmail(body.email).length) > 0;
    if (hasUserWithEmail) return res.sendStatus(409);

    await createUser(body);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erro interno");
  }
}

export async function signin(req, res) {
  try {
    const body = req.body;

    const user = await userByEmail(body.email);
    if (!user) {
      res.sendStatus(401);
    }

    const passwordCorrect = bcrypt.compareSync(body.password, user.password);
    if (!passwordCorrect) {
      res.sendStatus(401);
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.SECRET,
      { expiresIn: 86400 }
    );

    res.send({ token, name: user.name });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erro interno");
  }
}
