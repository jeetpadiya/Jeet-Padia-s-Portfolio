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

function getDeviceType(userAgent = "", mobileHint) {
  if (mobileHint === "?1") {
    return "mobile";
  }

  if (/tablet|ipad/i.test(userAgent)) {
    return "tablet";
  }

  if (/mobi|android|iphone|ipod/i.test(userAgent)) {
    return "mobile";
  }

  return "desktop";
}

function getOperatingSystem(userAgent = "", platformHint) {
  if (platformHint) {
    return platformHint.replace(/"/g, "");
  }

  if (/windows/i.test(userAgent)) {
    return "Windows";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iphone|ipad|ipod/i.test(userAgent)) {
    return "iOS";
  }

  if (/mac os|macintosh/i.test(userAgent)) {
    return "macOS";
  }

  if (/linux/i.test(userAgent)) {
    return "Linux";
  }

  return "Unknown";
}

function getBrowser(userAgent = "") {
  if (/edg/i.test(userAgent)) {
    return "Edge";
  }

  if (/opr|opera/i.test(userAgent)) {
    return "Opera";
  }

  if (/chrome|crios/i.test(userAgent)) {
    return "Chrome";
  }

  if (/firefox|fxios/i.test(userAgent)) {
    return "Firefox";
  }

  if (/safari/i.test(userAgent) && !/chrome|crios|android/i.test(userAgent)) {
    return "Safari";
  }

  return "Unknown";
}

export function buildVisitorDocument(request, body = {}) {
  const userAgent = readHeader(request, "user-agent") || "unknown";
  const mobileHint = readHeader(request, "sec-ch-ua-mobile");
  const platformHint = readHeader(request, "sec-ch-ua-platform");

  return {
    ip: getClientIp(request),
    path: typeof body.path === "string" ? body.path : "/",
    referer: readHeader(request, "referer") || "direct",
    host: readHeader(request, "host") || "unknown",
    origin: readHeader(request, "origin") || "unknown",
    userAgent,
    browser: getBrowser(userAgent),
    operatingSystem: getOperatingSystem(userAgent, platformHint),
    deviceType: getDeviceType(userAgent, mobileHint),
    location: {
      continent: readHeader(request, "x-vercel-ip-continent") || "unknown",
      country: readHeader(request, "x-vercel-ip-country") || "unknown",
      region: readHeader(request, "x-vercel-ip-country-region") || "unknown",
      city: readHeader(request, "x-vercel-ip-city") || "unknown",
      postalCode: readHeader(request, "x-vercel-ip-postal-code") || "unknown",
      timezone: readHeader(request, "x-vercel-ip-timezone") || "unknown",
      latitude: readHeader(request, "x-vercel-ip-latitude") || "unknown",
      longitude: readHeader(request, "x-vercel-ip-longitude") || "unknown",
    },
    visitedAt: new Date(),
  };
}
