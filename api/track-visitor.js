import { ensureVisitorIndexes, getDatabase } from "./_lib/mongodb.js";
import { buildVisitorDocument } from "./_lib/visitor-details.js";

export default async function handler(request, response) {
  if (request.method === "GET") {
    return response.status(200).json({
      ok: true,
      message: "Visitor tracking endpoint is running.",
    });
  }

  if (request.method !== "POST") {
    return response.status(405).json({
      error: "Method not allowed",
    });
  }

  const body =
    request.body && typeof request.body === "object" ? request.body : {};

  try {
    const visitor = buildVisitorDocument(request, body);
    const database = await getDatabase();
    const collectionName =
      process.env.MONGODB_VISITORS_COLLECTION || "visitors";
    await ensureVisitorIndexes(collectionName);
    const result = await database
      .collection(collectionName)
      .insertOne(visitor);

    return response.status(200).json({
      ok: true,
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Failed to store visitor", error);

    return response.status(500).json({
      ok: false,
      error: "Failed to store visitor",
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
