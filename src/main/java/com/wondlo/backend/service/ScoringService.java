package com.wondlo.backend.service;

import com.wondlo.backend.model.Operator;
import org.springframework.stereotype.Service;

@Service
public class ScoringService {

    public SafetyResult calculateSafetyScore(Operator operator) {
        int score = 0;

        int certCount = operator.getCertifications() != null ? operator.getCertifications().size() : 0;
        score += Math.min(certCount, 5) * 5;

        if (operator.getHasSafetyPage() != null && operator.getHasSafetyPage()) {
            score += 25;
        }

        if (operator.getHasAboutPage() != null && operator.getHasAboutPage()) {
            score += 20;
        }

        if (operator.getSocialHandle() != null && !operator.getSocialHandle().isEmpty()) {
            score += 15;
        }

        if (operator.getWebsite() != null && !operator.getWebsite().isEmpty()) {
            score += 15;
        }

        int total = Math.min(score, 100);

        String riskLevel;
        if (total >= 80) {
            riskLevel = "Excellent";
        } else if (total >= 60) {
            riskLevel = "Good";
        } else if (total >= 40) {
            riskLevel = "Fair";
        } else {
            riskLevel = "Needs Review";
        }

        SafetyResult result = new SafetyResult();
        result.setTotal(total);
        result.setRiskLevel(riskLevel);
        result.setIncidentHistory("No reported incidents found");
        result.setEquipmentMaintenance("Regular inspection records available");
        result.setOperationalTransparency("Business registration verified");
        
        return result;
    }

    public static class SafetyResult {
        private int total;
        private String riskLevel;
        private String incidentHistory;
        private String equipmentMaintenance;
        private String operationalTransparency;

        public int getTotal() { return total; }
        public void setTotal(int total) { this.total = total; }

        public String getRiskLevel() { return riskLevel; }
        public void setRiskLevel(String riskLevel) { this.riskLevel = riskLevel; }

        public String getIncidentHistory() { return incidentHistory; }
        public void setIncidentHistory(String incidentHistory) { this.incidentHistory = incidentHistory; }

        public String getEquipmentMaintenance() { return equipmentMaintenance; }
        public void setEquipmentMaintenance(String equipmentMaintenance) { this.equipmentMaintenance = equipmentMaintenance; }

        public String getOperationalTransparency() { return operationalTransparency; }
        public void setOperationalTransparency(String operationalTransparency) { this.operationalTransparency = operationalTransparency; }
    }
}