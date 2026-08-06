package com.wondlo.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

@Service
public class CloudflareAIService {

    @Value("${cloudflare.account-id}")
    private String accountId;

    @Value("${cloudflare.api-token}")
    private String apiToken;

    @Value("${cloudflare.ai-model}")
    private String aiModel;

    private final HttpClient httpClient = HttpClient.newHttpClient();

    public String generateSafetySummary(String operatorName, int safetyScore, String riskLevel) {
        try {
            String prompt = """
                    Generate a concise 2-sentence safety summary for a tour operator:
                    Operator: %s
                    Safety Score: %d/100
                    Risk Level: %s
                    
                    Focus on: safety certifications, incident history, and equipment maintenance.
                    Keep it professional and informative.
                    """.formatted(operatorName, safetyScore, riskLevel);

            String json = """
                    {
                        "messages": [
                            {"role": "system", "content": "You are a safety expert for adventure travel. Provide clear, actionable safety advice."},
                            {"role": "user", "content": "%s"}
                        ],
                        "max_tokens": 200,
                        "temperature": 0.7
                    }
                    """.formatted(prompt.replace("\"", "\\\"").replace("\n", " "));

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.cloudflare.com/client/v4/accounts/" + accountId + "/ai/run/" + aiModel))
                    .header("Content-Type", "application/json")
                    .header("Authorization", "Bearer " + apiToken)
                    .POST(HttpRequest.BodyPublishers.ofString(json))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            String content = response.body();
            int start = content.indexOf("\"response\":\"");
            if (start == -1) {
                start = content.indexOf("\"response\":");
            }
            
            if (start != -1) {
                start = content.indexOf("\"", start + 11) + 1;
                int end = content.indexOf("\"", start);
                if (end > start) {
                    return content.substring(start, end).replace("\\n", " ").replace("\\", "");
                }
            }
            
            return operatorName + " has a safety score of " + safetyScore + "/100 (" + riskLevel + ").";

        } catch (Exception e) {
            System.err.println("❌ Cloudflare AI error: " + e.getMessage());
            return "Safety summary generated with score: " + safetyScore + "/100.";
        }
    }

    public String analyzeSafetyReport(String reportData) {
        try {
            String prompt = """
                    Analyze this safety report and provide recommendations:
                    %s
                    
                    Provide:
                    1. Top 3 concerns
                    2. 2 improvement recommendations
                    3. Overall safety assessment (1-10)
                    """.formatted(reportData);

            String json = """
                    {
                        "messages": [
                            {"role": "system", "content": "You are a safety analyst. Provide detailed, actionable insights."},
                            {"role": "user", "content": "%s"}
                        ],
                        "max_tokens": 300
                    }
                    """.formatted(prompt.replace("\"", "\\\"").replace("\n", " "));

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.cloudflare.com/client/v4/accounts/" + accountId + "/ai/run/" + aiModel))
                    .header("Content-Type", "application/json")
                    .header("Authorization", "Bearer " + apiToken)
                    .POST(HttpRequest.BodyPublishers.ofString(json))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            String content = response.body();
            int start = content.indexOf("\"response\":\"");
            if (start == -1) {
                start = content.indexOf("\"response\":");
            }
            
            if (start != -1) {
                start = content.indexOf("\"", start + 11) + 1;
                int end = content.indexOf("\"", start);
                if (end > start) {
                    return content.substring(start, end).replace("\\n", "\n").replace("\\", "");
                }
            }
            
            return "Analysis complete. Review the safety score for details.";

        } catch (Exception e) {
            System.err.println("❌ Cloudflare AI analysis error: " + e.getMessage());
            return "Analysis unavailable at this time.";
        }
    }

    public String generateAdventureRecommendation(String preferences) {
        try {
            String prompt = """
                    Recommend an adventure activity based on these preferences:
                    %s
                    
                    Provide:
                    1. Recommended activity
                    2. 2-3 safety tips
                    3. Why it's a good match
                    """.formatted(preferences);

            String json = """
                    {
                        "messages": [
                            {"role": "system", "content": "You are an adventure travel expert. Recommend safe, exciting activities."},
                            {"role": "user", "content": "%s"}
                        ],
                        "max_tokens": 250
                    }
                    """.formatted(prompt.replace("\"", "\\\"").replace("\n", " "));

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.cloudflare.com/client/v4/accounts/" + accountId + "/ai/run/" + aiModel))
                    .header("Content-Type", "application/json")
                    .header("Authorization", "Bearer " + apiToken)
                    .POST(HttpRequest.BodyPublishers.ofString(json))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            String content = response.body();
            int start = content.indexOf("\"response\":\"");
            if (start == -1) {
                start = content.indexOf("\"response\":");
            }
            
            if (start != -1) {
                start = content.indexOf("\"", start + 11) + 1;
                int end = content.indexOf("\"", start);
                if (end > start) {
                    return content.substring(start, end).replace("\\n", "\n").replace("\\", "");
                }
            }
            
            return "Adventure recommendation based on your preferences.";

        } catch (Exception e) {
            System.err.println("❌ Cloudflare AI recommendation error: " + e.getMessage());
            return "Recommendation unavailable. Please try again later.";
        }
    }
}