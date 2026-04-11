import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB_NAME || "portfolio_analytics";

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable.");
}

let cachedClient;
let cachedClientPromise;
let visitorIndexesPromise;

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

export async function ensureVisitorIndexes(collectionName) {
  const database = await getDatabase();
  const collection = database.collection(collectionName);

  if (!visitorIndexesPromise) {
    visitorIndexesPromise = Promise.all([
      collection.createIndex({ visitedAt: -1 }),
      collection.createIndex({ ip: 1 }),
      collection.createIndex({ path: 1 }),
      collection.createIndex({ browser: 1 }),
      collection.createIndex({ operatingSystem: 1 }),
      collection.createIndex({ deviceType: 1 }),
      collection.createIndex({ "location.country": 1 }),
      collection.createIndex({ "location.city": 1 }),
    ]);
  }

  await visitorIndexesPromise;
}
