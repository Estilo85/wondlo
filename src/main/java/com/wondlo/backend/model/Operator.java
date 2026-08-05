package com.wondlo.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "operators")
public class Operator {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String website;
    private String socialHandle;
    private Integer safetyScore;
    private String riskLevel;
    private String incidentHistory;
    private String equipmentMaintenance;
    private String operationalTransparency;
    private String adventureType;

    @ElementCollection
    private List<String> certifications = new ArrayList<>();

    private Boolean hasSafetyPage;
    private Boolean hasAboutPage;
    private LocalDateTime createdAt;

    // Getters and Setters
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

    public Boolean getHasSafetyPage() { return hasSafetyPage; }
    public void setHasSafetyPage(Boolean hasSafetyPage) { this.hasSafetyPage = hasSafetyPage; }

    public Boolean getHasAboutPage() { return hasAboutPage; }
    public void setHasAboutPage(Boolean hasAboutPage) { this.hasAboutPage = hasAboutPage; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}