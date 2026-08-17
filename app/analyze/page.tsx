'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface AnalysisResult {
  riskScore: number;
  checklist: {
    item: string;
    passed: boolean;
  }[];
  recommendations: string[];
}

export default function AnalyzePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    socialHandle: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Analysis failed');

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Wondlo
          </Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
            Dashboard
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Analyze Adventure</h1>
        <p className="text-center text-gray-600 mb-8">
          Know if an adventure is safe by company name, website, or social media handle
        </p>

        <div className="max-w-2xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. Adventure Tours Ltd"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. https://adventuretours.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Social Media Handle
                </label>
                <input
                  type="text"
                  value={formData.socialHandle}
                  onChange={(e) => setFormData({ ...formData, socialHandle: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. @adventure_tours"
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  🔍 Free safety checks: You have <strong>3</strong> remaining
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-lg"
              >
                {loading ? 'Analyzing...' : 'Analyze Adventure'}
              </button>
            </div>
          </form>

          {/* Error */}
          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Safety Analysis Results</h2>
              
              {/* Risk Score */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold text-blue-600">
                  {result.riskScore}%
                </div>
                <div>
                  <p className="font-semibold">Risk Score</p>
                  <p className="text-sm text-gray-600">
                    {result.riskScore < 30 ? 'Low risk - Safe!' : 
                     result.riskScore < 60 ? 'Medium risk - Caution advised' : 
                     'High risk - Not recommended'}
                  </p>
                </div>
              </div>

              {/* Checklist */}
              <h3 className="font-semibold text-lg mb-3">Safety Checklist</h3>
              <div className="space-y-2 mb-6">
                {result.checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.passed ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-red-500" />
                    )}
                    <span className={item.passed ? 'text-gray-700' : 'text-red-600'}>
                      {item.item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              {result.recommendations.length > 0 && (
                <>
                  <h3 className="font-semibold text-lg mb-3">Recommendations</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {result.recommendations.map((rec, i) => (
                      <li key={i}>{rec}</li>
                    ))}
                  </ul>
                </>
              )}

              <Link href="/redirect" className="block text-center mt-6 text-blue-600 hover:underline">
                Join our Telegram community for more insights →
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}