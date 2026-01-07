// ABOUTME: Hono app entry point for Sinuous Development website
// ABOUTME: Serves static files from the public directory on Cloudflare Workers

import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import manifest from '__STATIC_CONTENT_MANIFEST'

const app = new Hono()

app.get('/*', serveStatic({
  manifest,
  rewriteRequestPath: (path) => {
    return path === '/' ? '/index.html' : path
  }
}))

export default app
