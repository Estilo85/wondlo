package com.wondlo.backend.controller;

import com.wondlo.backend.service.CloudflareAIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "*")
public class AIController {

    @Autowired
    private CloudflareAIService cloudflareAIService;

    @PostMapping("/analyze-report")
    public AIResponse analyzeReport(@RequestBody Map<String, String> request) {
        String reportData = request.get("reportData");
        String analysis = cloudflareAIService.analyzeSafetyReport(reportData);
        
        AIResponse response = new AIResponse();
        response.setSuccess(true);
        response.setAnalysis(analysis);
        return response;
    }

    @PostMapping("/recommend")
    public AIResponse getRecommendation(@RequestBody Map<String, String> request) {
        String preferences = request.get("preferences");
        String recommendation = cloudflareAIService.generateAdventureRecommendation(preferences);
        
        AIResponse response = new AIResponse();
        response.setSuccess(true);
        response.setRecommendation(recommendation);
        return response;
    }

    public static class AIResponse {
        private boolean success;
        private String analysis;
        private String recommendation;
        private String error;

        public boolean isSuccess() { return success; }
        public void setSuccess(boolean success) { this.success = success; }

        public String getAnalysis() { return analysis; }
        public void setAnalysis(String analysis) { this.analysis = analysis; }

        public String getRecommendation() { return recommendation; }
        public void setRecommendation(String recommendation) { this.recommendation = recommendation; }

        public String getError() { return error; }
        public void setError(String error) { this.error = error; }
    }
}