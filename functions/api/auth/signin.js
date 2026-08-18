export async function onRequest(context) {
  const { request } = context;

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { idToken } = await request.json();

    if (!idToken) {
      return new Response(JSON.stringify({ error: 'ID token is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Here you would:
    // 1. Verify Firebase ID token
    // 2. Get user from Firebase
    // 3. Return user data

    return new Response(JSON.stringify({
      success: true,
      message: 'Sign in successful',
      user: {
        id: '123',
        name: 'User',
        email: 'user@example.com'
      }
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}