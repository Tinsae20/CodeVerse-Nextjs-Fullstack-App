import posthog from "posthog-js"

const isProduction = process.env.NODE_ENV === "production"
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "/ingest"

// Initialize PostHog only in production to avoid dev-server proxy failures
if (isProduction && key) {
  posthog.init(key, {
    api_host: host,
    ui_host: "https://us.posthog.com",
    defaults: '2025-05-24',
    capture_exceptions: true,
    debug: false,
  })
}

export default posthog