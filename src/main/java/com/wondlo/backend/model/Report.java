package com.wondlo.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long operatorId;
    private String operatorName;
    private Integer safetyScore;
    private String riskLevel;

    @ElementCollection
    private List<String> incidentTimeline = new ArrayList<>();

    @ElementCollection
    private List<String> evidenceSources = new ArrayList<>();

    @ElementCollection
    private List<String> recommendedDocuments = new ArrayList<>();

    private LocalDateTime createdAt;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getOperatorId() { return operatorId; }
    public void setOperatorId(Long operatorId) { this.operatorId = operatorId; }

    public String getOperatorName() { return operatorName; }
    public void setOperatorName(String operatorName) { this.operatorName = operatorName; }

    public Integer getSafetyScore() { return safetyScore; }
    public void setSafetyScore(Integer safetyScore) { this.safetyScore = safetyScore; }

    public String getRiskLevel() { return riskLevel; }
    public void setRiskLevel(String riskLevel) { this.riskLevel = riskLevel; }

    public List<String> getIncidentTimeline() { return incidentTimeline; }
    public void setIncidentTimeline(List<String> incidentTimeline) { this.incidentTimeline = incidentTimeline; }

    public List<String> getEvidenceSources() { return evidenceSources; }
    public void setEvidenceSources(List<String> evidenceSources) { this.evidenceSources = evidenceSources; }

    public List<String> getRecommendedDocuments() { return recommendedDocuments; }
    public void setRecommendedDocuments(List<String> recommendedDocuments) { this.recommendedDocuments = recommendedDocuments; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}