export const runtime = "nodejs";

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("x-vercel-forwarded-for") ||
    "unknown"
  );
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  let body = {};

  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const visitor = {
    ip: getClientIp(request),
    path: typeof body.path === "string" ? body.path : "/",
    referer: request.headers.get("referer") || "direct",
    userAgent: request.headers.get("user-agent") || "unknown",
    visitedAt: new Date().toISOString(),
  };

  console.log("Portfolio visitor", JSON.stringify(visitor));

  return Response.json({
    ok: true,
  });
}
