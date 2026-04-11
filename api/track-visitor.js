function readHeader(request, headerName) {
  if (!request || !request.headers) {
    return undefined;
  }

  if (typeof request.headers.get === "function") {
    return request.headers.get(headerName) || undefined;
  }

  const lowerCaseHeaderName = headerName.toLowerCase();

  return request.headers[lowerCaseHeaderName] || request.headers[headerName];
}

function getClientIp(request) {
  const forwardedFor = readHeader(request, "x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return (
    readHeader(request, "x-real-ip") ||
    readHeader(request, "x-vercel-forwarded-for") ||
    "unknown"
  );
}

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

  const visitor = {
    ip: getClientIp(request),
    path: typeof body.path === "string" ? body.path : "/",
    referer: readHeader(request, "referer") || "direct",
    userAgent: readHeader(request, "user-agent") || "unknown",
    visitedAt: new Date().toISOString(),
  };

  console.log("Portfolio visitor", JSON.stringify(visitor));

  return response.status(200).json({
    ok: true,
  });
}
