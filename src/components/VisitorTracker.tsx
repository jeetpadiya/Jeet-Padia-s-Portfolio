import { useEffect, useRef } from "react";

const VISITOR_TRACKED_KEY = "portfolio-visitor-tracked";
const TRACKING_ENDPOINT = "/api/track-visitor";

function VisitorTracker() {
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    // Vite's local dev server does not execute Vercel serverless functions.
    if (import.meta.env.DEV) {
      return;
    }

    if (hasTrackedRef.current) {
      return;
    }

    if (sessionStorage.getItem(VISITOR_TRACKED_KEY) === "true") {
      hasTrackedRef.current = true;
      return;
    }

    hasTrackedRef.current = true;

    void fetch(TRACKING_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: window.location.pathname,
      }),
      keepalive: true,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Tracking request failed with ${response.status}`);
        }

        sessionStorage.setItem(VISITOR_TRACKED_KEY, "true");
      })
      .catch((error) => {
        console.error("Visitor tracking failed", error);
        hasTrackedRef.current = false;
      });
  }, []);

  return null;
}

export default VisitorTracker;
