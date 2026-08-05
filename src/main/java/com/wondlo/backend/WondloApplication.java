package com.wondlo.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WondloApplication {
    public static void main(String[] args) {
        SpringApplication.run(WondloApplication.class, args);
        System.out.println("""
                
                ╔══════════════════════════════════════════════════════════════╗
                ║                                                              ║
                ║     🌍  WONDLO BACKEND STARTED SUCCESSFULLY                  ║
                ║                                                              ║
                ║     📍  http://localhost:5000                                ║
                ║     🔍  GET  /api/health - Health Check                     ║
                ║     🔐  POST /api/auth/firebase - Firebase Auth             ║
                ║     📊  GET  /api/dashboard/{uid} - Dashboard               ║
                ║     🔎  GET  /api/search?q= - Search Operators              ║
                ║     📋  POST /api/analyze - Analyze Safety                  ║
                ║     🤖  POST /api/ai/analyze-report - AI Analysis           ║
                ║     💬  GET  /api/testimonials - Testimonials               ║
                ║                                                              ║
                ╚══════════════════════════════════════════════════════════════╝
                """);
    }
}