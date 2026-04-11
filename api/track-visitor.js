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

export async function POST(request) {
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

export function GET() {
  return Response.json({
    ok: true,
    message: "Visitor tracking endpoint is running.",
  });
}
