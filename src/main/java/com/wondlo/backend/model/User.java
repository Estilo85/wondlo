package com.wondlo.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String firebaseUid;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    private UserStatus status = UserStatus.ACTIVE;

    private Integer freeSearchesRemaining = 3;

    @ElementCollection
    private List<String> searchHistory = new ArrayList<>();

    private Boolean isPaidUser = false;

    private String planType = "free";

    private LocalDateTime createdAt;

    public enum UserStatus {
        PENDING, ACTIVE
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFirebaseUid() { return firebaseUid; }
    public void setFirebaseUid(String firebaseUid) { this.firebaseUid = firebaseUid; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public UserStatus getStatus() { return status; }
    public void setStatus(UserStatus status) { this.status = status; }

    public Integer getFreeSearchesRemaining() { return freeSearchesRemaining; }
    public void setFreeSearchesRemaining(Integer freeSearchesRemaining) { this.freeSearchesRemaining = freeSearchesRemaining; }

    public List<String> getSearchHistory() { return searchHistory; }
    public void setSearchHistory(List<String> searchHistory) { this.searchHistory = searchHistory; }

    public Boolean getIsPaidUser() { return isPaidUser; }
    public void setIsPaidUser(Boolean isPaidUser) { this.isPaidUser = isPaidUser; }

    public String getPlanType() { return planType; }
    public void setPlanType(String planType) { this.planType = planType; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}