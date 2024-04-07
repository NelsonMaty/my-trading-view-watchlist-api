import { MongoClient } from "mongodb";

const uri = process.env.MONGO_DB_URI;
const client = new MongoClient(uri);

export { client };
