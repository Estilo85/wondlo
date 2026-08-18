export async function onRequest(context) {
  return new Response(JSON.stringify({
    status: 'OK',
    message: 'Wondlo API is running on Cloudflare Workers!',
    timestamp: new Date().toISOString(),
    environment: 'production'
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}