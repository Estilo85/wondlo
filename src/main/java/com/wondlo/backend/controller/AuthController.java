package com.wondlo.backend.controller;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import com.wondlo.backend.model.User;
import com.wondlo.backend.service.EmailService;
import com.wondlo.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    // ============================================
    // FIREBASE AUTHENTICATION
    // ============================================

    @PostMapping("/firebase")
    public AuthResponse firebaseAuth(@RequestBody FirebaseAuthRequest request) {
        try {
            FirebaseToken decodedToken = FirebaseAuth.getInstance()
                    .verifyIdToken(request.getIdToken());

            String uid = decodedToken.getUid();
            String email = decodedToken.getEmail();
            String name = (String) decodedToken.getClaims().get("name");
            if (name == null) name = email != null ? email.split("@")[0] : "User";

            User user = userService.findOrCreateUser(uid, email, name);

            AuthResponse response = new AuthResponse();
            response.setSuccess(true);
            response.setUserId(uid);
            response.setEmail(email);
            response.setName(user.getName());
            response.setFreeSearchesRemaining(user.getFreeSearchesRemaining());
            response.setIsPaidUser(user.getIsPaidUser());
            response.setMessage("Authentication successful");
            
            return response;

        } catch (Exception e) {
            AuthResponse response = new AuthResponse();
            response.setSuccess(false);
            response.setError("Authentication failed: " + e.getMessage());
            return response;
        }
    }

    @GetMapping("/user/{firebaseUid}")
    public User getUser(@PathVariable String firebaseUid) {
        return userService.getUserByFirebaseUid(firebaseUid);
    }

    // ============================================
    // WAITING LIST ENDPOINT
    // ============================================

    @PostMapping("/waiting-list")
    public WaitingListResponse joinWaitingList(@RequestBody WaitingListRequest request) {
        try {
            String name = request.getName();
            String email = request.getEmail();
            
            // Log the signup
            System.out.println("📝 New waiting list signup:");
            System.out.println("   Name: " + name);
            System.out.println("   Email: " + email);
            
            // Send welcome email
            emailService.sendWelcomeEmail(email, name);
            
            WaitingListResponse response = new WaitingListResponse();
            response.setSuccess(true);
            response.setMessage("Successfully joined waiting list!");
            return response;
            
        } catch (Exception e) {
            System.err.println("❌ Waiting list error: " + e.getMessage());
            WaitingListResponse response = new WaitingListResponse();
            response.setSuccess(false);
            response.setMessage("Error: " + e.getMessage());
            return response;
        }
    }

    // ============================================
    // DTOs
    // ============================================

    public static class FirebaseAuthRequest {
        private String idToken;

        public String getIdToken() { return idToken; }
        public void setIdToken(String idToken) { this.idToken = idToken; }
    }

    public static class AuthResponse {
        private boolean success;
        private String userId;
        private String email;
        private String name;
        private Integer freeSearchesRemaining;
        private Boolean isPaidUser;
        private String message;
        private String error;

        public boolean isSuccess() { return success; }
        public void setSuccess(boolean success) { this.success = success; }

        public String getUserId() { return userId; }
        public void setUserId(String userId) { this.userId = userId; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public Integer getFreeSearchesRemaining() { return freeSearchesRemaining; }
        public void setFreeSearchesRemaining(Integer freeSearchesRemaining) { this.freeSearchesRemaining = freeSearchesRemaining; }

        public Boolean getIsPaidUser() { return isPaidUser; }
        public void setIsPaidUser(Boolean isPaidUser) { this.isPaidUser = isPaidUser; }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }

        public String getError() { return error; }
        public void setError(String error) { this.error = error; }
    }

    public static class WaitingListRequest {
        private String name;
        private String email;
        
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
    }

    public static class WaitingListResponse {
        private boolean success;
        private String message;
        
        public boolean isSuccess() { return success; }
        public void setSuccess(boolean success) { this.success = success; }
        
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }
}