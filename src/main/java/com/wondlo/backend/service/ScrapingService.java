package com.wondlo.backend.service;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ScrapingService {

    public ScrapedData scrapeWebsite(String url) {
        try {
            if (url == null || url.isEmpty()) {
                return emptyData();
            }

            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
            }

            Document doc = Jsoup.connect(url)
                    .timeout(5000)
                    .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
                    .get();

            String bodyText = doc.body().text().toLowerCase();

            Set<String> certifications = new HashSet<>();
            String[] safetyTerms = {
                "safety", "certified", "licensed", "insurance", 
                "first aid", "iso", "accredited", "training",
                "qualified", "experienced", "professional"
            };

            for (String term : safetyTerms) {
                if (bodyText.contains(term)) {
                    certifications.add(term);
                }
            }

            boolean hasSafetyPage = doc.select("a[href*='safety']").size() > 0 ||
                                   doc.select("a[href*='Security']").size() > 0;

            boolean hasAboutPage = doc.select("a[href*='about']").size() > 0;

            ScrapedData data = new ScrapedData();
            data.setCertifications(new ArrayList<>(certifications));
            data.setHasSafetyPage(hasSafetyPage);
            data.setHasAboutPage(hasAboutPage);
            return data;

        } catch (Exception e) {
            System.err.println("⚠️ Scraping error: " + e.getMessage());
            return emptyData();
        }
    }

    private ScrapedData emptyData() {
        ScrapedData data = new ScrapedData();
        data.setCertifications(new ArrayList<>());
        data.setHasSafetyPage(false);
        data.setHasAboutPage(false);
        return data;
    }

    public static class ScrapedData {
        private List<String> certifications;
        private boolean hasSafetyPage;
        private boolean hasAboutPage;

        public List<String> getCertifications() { return certifications; }
        public void setCertifications(List<String> certifications) { this.certifications = certifications; }

        public boolean isHasSafetyPage() { return hasSafetyPage; }
        public void setHasSafetyPage(boolean hasSafetyPage) { this.hasSafetyPage = hasSafetyPage; }

        public boolean isHasAboutPage() { return hasAboutPage; }
        public void setHasAboutPage(boolean hasAboutPage) { this.hasAboutPage = hasAboutPage; }
    }
}