const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const username = process.env.MONGOUN;
const password = process.env.MONGOPW;
console.log(username, password);
// Replace the uri string with your connection string.
const uri = `mongodb+srv://${username}:${password}@snap-up.xjdaagl.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("snap-up");
    const abilities = database.collection("abilities");
    // Query for a movie that has the title 'Back to the Future'
    const query = { num: 1 };
    const ability = await abilities.findOne(query);
    console.log(ability);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
