package com.wondlo.backend.controller;

import com.wondlo.backend.model.Operator;
import com.wondlo.backend.model.Report;
import com.wondlo.backend.repository.OperatorRepository;
import com.wondlo.backend.repository.ReportRepository;
import com.wondlo.backend.service.CloudflareAIService;
import com.wondlo.backend.service.ScoringService;
import com.wondlo.backend.service.ScrapingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/analyze")
@CrossOrigin(origins = "*")
public class AnalyzeController {

    @Autowired
    private OperatorRepository operatorRepository;

    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private ScrapingService scrapingService;

    @Autowired
    private ScoringService scoringService;

    @Autowired
    private CloudflareAIService cloudflareAIService;

    @GetMapping("/adventure-types")
    public List<String> getAdventureTypes() {
        return Arrays.asList(
            "Parasailing", "Snowboarding", "Trekking",
            "Kayaking", "ATV", "Skiing", "Skydiving",
            "Hiking", "Climbing", "Whitewater Rafting",
            "Scuba Diving", "Mountaineering", "Bungee Jumping",
            "Zip-lining", "Caving", "Surfing"
        );
    }

    @PostMapping
    public AnalyzeResponse analyze(@RequestBody AnalyzeRequest request) {
        if (request.getOperatorName() == null && 
            request.getWebsite() == null && 
            request.getSocialHandle() == null) {
            throw new RuntimeException("Please provide at least one search field");
        }

        Operator operator = null;
        String searchTerm = request.getOperatorName() != null ? 
                           request.getOperatorName() : 
                           (request.getWebsite() != null ? request.getWebsite() : request.getSocialHandle());

        if (request.getWebsite() != null && !request.getWebsite().isEmpty()) {
            List<Operator> results = operatorRepository.findByNameContainingIgnoreCaseOrWebsiteContainingIgnoreCaseOrSocialHandleContainingIgnoreCase(
                request.getWebsite(), request.getWebsite(), request.getWebsite()
            );
            if (!results.isEmpty()) operator = results.get(0);
        }

        if (operator == null && request.getSocialHandle() != null && !request.getSocialHandle().isEmpty()) {
            List<Operator> results = operatorRepository.findByNameContainingIgnoreCaseOrWebsiteContainingIgnoreCaseOrSocialHandleContainingIgnoreCase(
                request.getSocialHandle(), request.getSocialHandle(), request.getSocialHandle()
            );
            if (!results.isEmpty()) operator = results.get(0);
        }

        if (operator == null && request.getOperatorName() != null && !request.getOperatorName().isEmpty()) {
            List<Operator> results = operatorRepository.findByNameContainingIgnoreCaseOrWebsiteContainingIgnoreCaseOrSocialHandleContainingIgnoreCase(
                request.getOperatorName(), request.getOperatorName(), request.getOperatorName()
            );
            if (!results.isEmpty()) operator = results.get(0);
        }

        if (operator == null) {
            ScrapingService.ScrapedData scrapedData = null;
            if (request.getWebsite() != null && !request.getWebsite().isEmpty()) {
                scrapedData = scrapingService.scrapeWebsite(request.getWebsite());
            }

            operator = new Operator();
            operator.setName(request.getOperatorName() != null ? request.getOperatorName() : searchTerm);
            operator.setWebsite(request.getWebsite() != null ? request.getWebsite() : "");
            operator.setSocialHandle(request.getSocialHandle() != null ? request.getSocialHandle() : "");
            operator.setAdventureType(request.getAdventureType());
            operator.setCreatedAt(LocalDateTime.now());

            if (scrapedData != null) {
                operator.setCertifications(scrapedData.getCertifications());
                operator.setHasSafetyPage(scrapedData.isHasSafetyPage());
                operator.setHasAboutPage(scrapedData.isHasAboutPage());
            }

            operator = operatorRepository.save(operator);
        }

        ScoringService.SafetyResult scoreResult = scoringService.calculateSafetyScore(operator);
        operator.setSafetyScore(scoreResult.getTotal());
        operator.setRiskLevel(scoreResult.getRiskLevel());
        operator.setIncidentHistory(scoreResult.getIncidentHistory());
        operator.setEquipmentMaintenance(scoreResult.getEquipmentMaintenance());
        operator.setOperationalTransparency(scoreResult.getOperationalTransparency());
        operator = operatorRepository.save(operator);

        String aiSummary = cloudflareAIService.generateSafetySummary(
            operator.getName(),
            operator.getSafetyScore(),
            operator.getRiskLevel()
        );

        Report report = new Report();
        report.setOperatorId(operator.getId());
        report.setOperatorName(operator.getName());
        report.setSafetyScore(scoreResult.getTotal());
        report.setRiskLevel(scoreResult.getRiskLevel());
        report.setCreatedAt(LocalDateTime.now());

        List<String> timeline = new ArrayList<>();
        timeline.add("No incidents reported");
        report.setIncidentTimeline(timeline);

        List<String> sources = new ArrayList<>();
        if (operator.getWebsite() != null && !operator.getWebsite().isEmpty()) {
            sources.add("Website: " + operator.getWebsite());
        }
        if (operator.getSocialHandle() != null && !operator.getSocialHandle().isEmpty()) {
            sources.add("Social Media: " + operator.getSocialHandle());
        }
        sources.add("Safety Framework Analysis");
        report.setEvidenceSources(sources);

        List<String> documents = new ArrayList<>();
        documents.add("Safety Policy");
        documents.add("Insurance Certificate");
        documents.add("Equipment Inspection Records");
        documents.add("Guide Certifications");
        documents.add("Emergency Procedures");
        report.setRecommendedDocuments(documents);

        report = reportRepository.save(report);

        AnalyzeResponse response = new AnalyzeResponse();
        response.setSuccess(true);
        response.setMessage("Analysis complete");
        response.setAiSummary(aiSummary);

        OperatorResponse opResponse = new OperatorResponse();
        opResponse.setId(operator.getId());
        opResponse.setName(operator.getName());
        opResponse.setWebsite(operator.getWebsite());
        opResponse.setSocialHandle(operator.getSocialHandle());
        opResponse.setSafetyScore(operator.getSafetyScore());
        opResponse.setRiskLevel(operator.getRiskLevel());
        opResponse.setIncidentHistory(operator.getIncidentHistory());
        opResponse.setEquipmentMaintenance(operator.getEquipmentMaintenance());
        opResponse.setOperationalTransparency(operator.getOperationalTransparency());
        opResponse.setAdventureType(operator.getAdventureType());
        opResponse.setCertifications(operator.getCertifications());
        response.setOperator(opResponse);

        ReportResponse reportResponse = new ReportResponse();
        reportResponse.setId(report.getId());
        reportResponse.setCreatedAt(report.getCreatedAt());
        reportResponse.setIncidentTimeline(report.getIncidentTimeline());
        reportResponse.setEvidenceSources(report.getEvidenceSources());
        reportResponse.setRecommendedDocuments(report.getRecommendedDocuments());
        response.setReport(reportResponse);

        return response;
    }

    // ===== DTOs =====

    public static class AnalyzeRequest {
        private String operatorName;
        private String website;
        private String socialHandle;
        private String adventureType;

        public String getOperatorName() { return operatorName; }
        public void setOperatorName(String operatorName) { this.operatorName = operatorName; }

        public String getWebsite() { return website; }
        public void setWebsite(String website) { this.website = website; }

        public String getSocialHandle() { return socialHandle; }
        public void setSocialHandle(String socialHandle) { this.socialHandle = socialHandle; }

        public String getAdventureType() { return adventureType; }
        public void setAdventureType(String adventureType) { this.adventureType = adventureType; }
    }

    public static class AnalyzeResponse {
        private boolean success;
        private String message;
        private String aiSummary;
        private OperatorResponse operator;
        private ReportResponse report;

        public boolean isSuccess() { return success; }
        public void setSuccess(boolean success) { this.success = success; }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }

        public String getAiSummary() { return aiSummary; }
        public void setAiSummary(String aiSummary) { this.aiSummary = aiSummary; }

        public OperatorResponse getOperator() { return operator; }
        public void setOperator(OperatorResponse operator) { this.operator = operator; }

        public ReportResponse getReport() { return report; }
        public void setReport(ReportResponse report) { this.report = report; }
    }

    public static class OperatorResponse {
        private Long id;
        private String name;
        private String website;
        private String socialHandle;
        private Integer safetyScore;
        private String riskLevel;
        private String incidentHistory;
        private String equipmentMaintenance;
        private String operationalTransparency;
        private String adventureType;
        private List<String> certifications;

        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getWebsite() { return website; }
        public void setWebsite(String website) { this.website = website; }

        public String getSocialHandle() { return socialHandle; }
        public void setSocialHandle(String socialHandle) { this.socialHandle = socialHandle; }

        public Integer getSafetyScore() { return safetyScore; }
        public void setSafetyScore(Integer safetyScore) { this.safetyScore = safetyScore; }

        public String getRiskLevel() { return riskLevel; }
        public void setRiskLevel(String riskLevel) { this.riskLevel = riskLevel; }

        public String getIncidentHistory() { return incidentHistory; }
        public void setIncidentHistory(String incidentHistory) { this.incidentHistory = incidentHistory; }

        public String getEquipmentMaintenance() { return equipmentMaintenance; }
        public void setEquipmentMaintenance(String equipmentMaintenance) { this.equipmentMaintenance = equipmentMaintenance; }

        public String getOperationalTransparency() { return operationalTransparency; }
        public void setOperationalTransparency(String operationalTransparency) { this.operationalTransparency = operationalTransparency; }

        public String getAdventureType() { return adventureType; }
        public void setAdventureType(String adventureType) { this.adventureType = adventureType; }

        public List<String> getCertifications() { return certifications; }
        public void setCertifications(List<String> certifications) { this.certifications = certifications; }
    }

    public static class ReportResponse {
        private Long id;
        private LocalDateTime createdAt;
        private List<String> incidentTimeline;
        private List<String> evidenceSources;
        private List<String> recommendedDocuments;

        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }

        public LocalDateTime getCreatedAt() { return createdAt; }
        public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

        public List<String> getIncidentTimeline() { return incidentTimeline; }
        public void setIncidentTimeline(List<String> incidentTimeline) { this.incidentTimeline = incidentTimeline; }

        public List<String> getEvidenceSources() { return evidenceSources; }
        public void setEvidenceSources(List<String> evidenceSources) { this.evidenceSources = evidenceSources; }

        public List<String> getRecommendedDocuments() { return recommendedDocuments; }
        public void setRecommendedDocuments(List<String> recommendedDocuments) { this.recommendedDocuments = recommendedDocuments; }
    }
    
}