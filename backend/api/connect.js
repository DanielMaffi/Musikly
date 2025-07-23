import { MongoClient } from "mongodb";

const URI = URI_DB

const client = new MongoClient(URI);

export const db = client.db("MusiklyAula");
