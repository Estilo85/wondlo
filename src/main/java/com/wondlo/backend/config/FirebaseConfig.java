package com.wondlo.backend.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

@Configuration
public class FirebaseConfig {

    @Value("${firebase.service-account-path}")
    private String serviceAccountPath;

    @Bean
    public FirebaseApp firebaseApp() {
        try {
            System.out.println("🔍 Loading Firebase from: " + serviceAccountPath);
            
            // Try multiple ways to load the file
            InputStream serviceAccount = null;
            
            // Method 1: Try as file from resources
            try {
                String filePath = "src/main/resources/" + serviceAccountPath;
                java.io.File file = new java.io.File(filePath);
                if (file.exists()) {
                    serviceAccount = new FileInputStream(file);
                    System.out.println("✅ Found Firebase file at: " + filePath);
                }
            } catch (Exception e) {
                // Continue to next method
            }
            
            // Method 2: Try as classpath resource (without "classpath:" prefix)
            if (serviceAccount == null) {
                try {
                    serviceAccount = getClass().getClassLoader().getResourceAsStream(serviceAccountPath);
                    if (serviceAccount != null) {
                        System.out.println("✅ Found Firebase file in classpath");
                    }
                } catch (Exception e) {
                    // Continue
                }
            }
            
            // Method 3: Try with "classpath:" prefix
            if (serviceAccount == null) {
                try {
                    String path = serviceAccountPath.replace("classpath:", "");
                    serviceAccount = getClass().getClassLoader().getResourceAsStream(path);
                    if (serviceAccount != null) {
                        System.out.println("✅ Found Firebase file in classpath (without prefix)");
                    }
                } catch (Exception e) {
                    // Continue
                }
            }
            
            if (serviceAccount == null) {
                System.err.println("❌ Firebase service account file not found at: " + serviceAccountPath);
                System.err.println("⚠️ Running WITHOUT Firebase authentication.");
                System.err.println("✅ Backend will still work for testing!");
                return null;
            }

            GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccount);
            serviceAccount.close();

            FirebaseOptions options = FirebaseOptions.builder()
                    .setCredentials(credentials)
                    .build();

            if (FirebaseApp.getApps().isEmpty()) {
                FirebaseApp app = FirebaseApp.initializeApp(options);
                System.out.println("✅ Firebase initialized successfully!");
                return app;
            }
            return FirebaseApp.getInstance();
            
        } catch (IOException e) {
            System.err.println("❌ Firebase initialization failed: " + e.getMessage());
            System.err.println("⚠️ Running WITHOUT Firebase authentication.");
            System.err.println("✅ Backend will still work for testing!");
            return null;
        }
    }
}