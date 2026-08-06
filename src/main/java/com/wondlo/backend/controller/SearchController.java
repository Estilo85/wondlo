package com.wondlo.backend.controller;

import com.wondlo.backend.model.Operator;
import com.wondlo.backend.repository.OperatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/search")
@CrossOrigin(origins = "*")
public class SearchController {

    @Autowired
    private OperatorRepository operatorRepository;

    @GetMapping
    public SearchResponse search(@RequestParam String q) {
        if (q == null || q.trim().isEmpty()) {
            throw new RuntimeException("Search query is required");
        }

        List<Operator> results = operatorRepository.findByNameContainingIgnoreCaseOrWebsiteContainingIgnoreCaseOrSocialHandleContainingIgnoreCase(
            q, q, q
        );

        SearchResponse response = new SearchResponse();
        response.setResults(results);
        response.setCount(results.size());
        response.setQuery(q);
        return response;
    }

    @GetMapping("/test")
    public String test() {
        return "✅ Search endpoint is ready!";
    }

    public static class SearchResponse {
        private List<Operator> results;
        private int count;
        private String query;

        public List<Operator> getResults() { return results; }
        public void setResults(List<Operator> results) { this.results = results; }

        public int getCount() { return count; }
        public void setCount(int count) { this.count = count; }

        public String getQuery() { return query; }
        public void setQuery(String query) { this.query = query; }
    }
}