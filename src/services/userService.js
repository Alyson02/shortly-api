import { getUserByEmail, insertUser } from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

export async function createUser(user) {
  const passwordHash = bcrypt.hashSync(user.password, 10);
  await insertUser({ ...user, password: passwordHash });
}

export async function userByEmail(email) {
  return await getUserByEmail(email);
}
