import { FaShieldAlt, FaClock, FaTools, FaBuilding, FaCheckCircle } from 'react-icons/fa';

export default function SafetyCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#EDE7FB] p-6 max-w-sm ml-auto">
      <div className="flex items-center gap-2 mb-4">
        <FaShieldAlt className="text-[#C7B5F5]" />
        <span className="font-semibold text-[#282740]">Safety Card</span>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-500">Safety Score</p>
        <p className="text-sm font-medium text-[#282740]">Summit Trails Expeditions</p>
      </div>

      <div className="flex items-end gap-2 mb-2">
        <span className="text-5xl font-bold text-[#282740]">85</span>
        <span className="text-xl text-gray-400">/100</span>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <FaCheckCircle className="text-[#00C853]" />
        <span className="text-[#00C853] font-medium text-sm">Good</span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#EDE7FB] rounded-full flex items-center justify-center">
            <FaClock className="text-[#7E6BB3] text-sm" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#282740]">Incident History</p>
            <p className="text-xs text-gray-500">✓ No recent incidents</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#EDE7FB] rounded-full flex items-center justify-center">
            <FaTools className="text-[#7E6BB3] text-sm" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#282740]">Equipment Maintenance</p>
            <p className="text-xs text-gray-500">✓ Inspection Every 6 Months</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#EDE7FB] rounded-full flex items-center justify-center">
            <FaBuilding className="text-[#7E6BB3] text-sm" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#282740]">Operational Transparency</p>
            <p className="text-xs text-gray-500">✓ Registered & Licensed</p>
          </div>
        </div>
      </div>
    </div>
  );
}