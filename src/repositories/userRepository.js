import connectDB from "../db.js";
const db = await connectDB();

export async function insertUser(user) {
  await db.query("INSERT INTO users VALUES(DEFAULT, $1, $2, $3)", [
    user.name,
    user.email,
    user.password,
  ]);
}

export async function getUserByEmail(email) {
  return (await db.query("SELECT * FROM users WHERE email = $1", [email]))
    .rows[0];
}
