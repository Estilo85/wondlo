import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { companyName, website, socialHandle } = await req.json();

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

    return NextResponse.json(analysis);

  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze' },
      { status: 500 }
    );
  }
}