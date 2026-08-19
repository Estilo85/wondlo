export async function onRequest(context) {
  return new Response(JSON.stringify({
    status: 'OK',
    message: 'Wondlo API is running on Cloudflare!',
    timestamp: new Date().toISOString()
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}