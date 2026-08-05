package com.wondlo.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/health")
@CrossOrigin(origins = "*")
public class HealthController {

    @GetMapping
    public Map<String, Object> health() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "✅ Wondlo Backend Running");
        response.put("version", "1.0.0");
        response.put("timestamp", System.currentTimeMillis());
        response.put("message", "Ready for frontend integration");
        return response;
    }

    @GetMapping("/detailed")
    public Map<String, Object> detailedHealth() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "✅ Running");
        response.put("database", "PostgreSQL");
        response.put("auth", "Firebase");
        response.put("storage", "Amazon S3");
        response.put("email", "Resend");
        response.put("ai", "Cloudflare Workers AI");
        response.put("monitoring", "Sentry");
        response.put("endpoints", Map.of(
            "health", "/api/health",
            "auth", "/api/auth/firebase",
            "search", "/api/search",
            "analyze", "/api/analyze",
            "dashboard", "/api/dashboard",
            "testimonials", "/api/testimonials",
            "ai", "/api/ai"
        ));
        return response;
    }
}