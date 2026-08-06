package com.wondlo.backend.controller;

import com.wondlo.backend.model.User;
import com.wondlo.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{firebaseUid}")
    public DashboardResponse getDashboard(@PathVariable String firebaseUid) {
        User user = userRepository.findByFirebaseUid(firebaseUid)
                .orElseThrow(() -> new RuntimeException("User not found"));

        DashboardResponse response = new DashboardResponse();
        response.setName(user.getName());
        response.setEmail(user.getEmail());
        response.setFreeSearchesRemaining(user.getFreeSearchesRemaining());
        response.setIsPaidUser(user.getIsPaidUser());
        response.setSearchHistory(user.getSearchHistory());

        Map<String, Object> safetyCard = new HashMap<>();
        safetyCard.put("totalSearches", user.getSearchHistory().size());
        safetyCard.put("lastSearch", user.getSearchHistory().isEmpty() ? null :
            user.getSearchHistory().get(user.getSearchHistory().size() - 1));
        safetyCard.put("freeSearchesRemaining", user.getFreeSearchesRemaining());
        safetyCard.put("planType", user.getPlanType());
        response.setSafetyCard(safetyCard);

        return response;
    }

    @PostMapping("/search/{firebaseUid}")
    public Map<String, Object> trackSearch(@PathVariable String firebaseUid, 
                                          @RequestBody SearchTrackRequest request) {
        User user = userRepository.findByFirebaseUid(firebaseUid)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.getSearchHistory().add(request.getQuery());
        
        if (user.getFreeSearchesRemaining() > 0) {
            user.setFreeSearchesRemaining(user.getFreeSearchesRemaining() - 1);
        }
        
        userRepository.save(user);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("freeSearchesRemaining", user.getFreeSearchesRemaining());
        response.put("message", "Search tracked successfully");
        return response;
    }

    public static class DashboardResponse {
        private String name;
        private String email;
        private Integer freeSearchesRemaining;
        private Boolean isPaidUser;
        private List<String> searchHistory;
        private Map<String, Object> safetyCard;

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public Integer getFreeSearchesRemaining() { return freeSearchesRemaining; }
        public void setFreeSearchesRemaining(Integer freeSearchesRemaining) { this.freeSearchesRemaining = freeSearchesRemaining; }

        public Boolean getIsPaidUser() { return isPaidUser; }
        public void setIsPaidUser(Boolean isPaidUser) { this.isPaidUser = isPaidUser; }

        public List<String> getSearchHistory() { return searchHistory; }
        public void setSearchHistory(List<String> searchHistory) { this.searchHistory = searchHistory; }

        public Map<String, Object> getSafetyCard() { return safetyCard; }
        public void setSafetyCard(Map<String, Object> safetyCard) { this.safetyCard = safetyCard; }
    }

    public static class SearchTrackRequest {
        private String query;

        public String getQuery() { return query; }
        public void setQuery(String query) { this.query = query; }
    }
}