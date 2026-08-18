// This is a minimal worker to satisfy Wrangler
export default {
  async fetch(request, env, ctx) {
    // This will be handled by Cloudflare Pages
    return new Response('Hello from Wondlo Worker!', {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};