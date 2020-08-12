const db = require("../server/knex.js");
require("dotenv").config();

let name = "Scott";
let user_id = 1;
async function seedData() {
  await db("user").insert({ name });
  await db("art").insert({ user_id });
  await db("art").insert({ user_id });
  await db("art").insert({ user_id });
  await db("art").insert({ user_id });
  await db("art").insert({ user_id });
}

seedData();
