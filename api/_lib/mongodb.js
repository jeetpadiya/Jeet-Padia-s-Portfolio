import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB_NAME || "portfolio_analytics";

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable.");
}

let cachedClient;
let cachedClientPromise;

export function getDatabaseName() {
  return databaseName;
}

export async function getDatabase() {
  if (cachedClient) {
    return cachedClient.db(databaseName);
  }

  if (!cachedClientPromise) {
    const client = new MongoClient(uri);
    cachedClientPromise = client.connect();
  }

  cachedClient = await cachedClientPromise;

  return cachedClient.db(databaseName);
}
