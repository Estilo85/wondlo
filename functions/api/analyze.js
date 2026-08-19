export async function onRequest(context) {
  const { request } = context;

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { companyName, website, socialHandle } = await request.json();

    if (!companyName && !website && !socialHandle) {
      return new Response(JSON.stringify({ error: 'Please provide at least one search criteria' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Mock analysis response
    const analysis = {
      riskScore: Math.floor(Math.random() * 40) + 60,
      checklist: [
        { item: 'Company registered', passed: Math.random() > 0.2 },
        { item: 'Valid website', passed: Math.random() > 0.15 },
        { item: 'Social media presence', passed: Math.random() > 0.3 },
        { item: 'Positive reviews', passed: Math.random() > 0.35 },
        { item: 'Contact information available', passed: Math.random() > 0.2 },
        { item: 'Insurance verified', passed: Math.random() > 0.4 },
        { item: 'Safety certifications', passed: Math.random() > 0.5 },
      ],
      recommendations: [
        'Check for recent customer reviews',
        'Verify contact details before booking',
        'Look for safety certifications on their website',
      ].slice(0, Math.floor(Math.random() * 3) + 1),
    };

    return new Response(JSON.stringify(analysis), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to analyze' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}