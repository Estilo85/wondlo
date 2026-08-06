package com.wondlo.backend.service;

import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.CreateEmailOptions;
import com.resend.services.emails.model.CreateEmailResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Value("${resend.api-key}")
    private String apiKey;

    public void sendWelcomeEmail(String to, String name) {
        try {
            Resend resend = new Resend(apiKey);

            CreateEmailOptions options = CreateEmailOptions.builder()
                    .from("Wondlo <partnerships@zagotours.com>")
                    .to(to)
                    .subject("Welcome to Wondlo! 🚀")
                    .html("""
                            <h1>Welcome %s!</h1>
                            <p>You're now on the Wondlo waiting list.</p>
                            <p>We'll notify you as soon as we launch!</p>
                            <p>In the meantime, join our Telegram community:</p>
                            <a href="https://t.me/your_wondlo_community">Join Telegram →</a>
                            <br><br>
                            <p>Stay safe out there!</p>
                            <p>- The Wondlo Team</p>
                            """.formatted(name))
                    .build();

            CreateEmailResponse response = resend.emails().send(options);
            System.out.println("✅ Welcome email sent to: " + to + " (ID: " + response.getId() + ")");

        } catch (ResendException e) {
            System.err.println("❌ Failed to send email: " + e.getMessage());
        }
    }

    public void sendSafetyReportEmail(String to, String operatorName, String reportUrl) {
        try {
            Resend resend = new Resend(apiKey);

            CreateEmailOptions options = CreateEmailOptions.builder()
                    .from("Wondlo <hello@wondlo.com>")
                    .to(to)
                    .subject("Your Safety Report for " + operatorName + " is ready!")
                    .html("""
                            <h1>Safety Report Ready 📊</h1>
                            <p>Your report for <strong>%s</strong> is complete.</p>
                            <a href="%s">View Full Report →</a>
                            <br><br>
                            <p>Stay safe out there!</p>
                            <p>- The Wondlo Team</p>
                            """.formatted(operatorName, reportUrl))
                    .build();

            CreateEmailResponse response = resend.emails().send(options);
            System.out.println("✅ Report email sent to: " + to + " (ID: " + response.getId() + ")");

        } catch (ResendException e) {
            System.err.println("❌ Failed to send report email: " + e.getMessage());
        }
    }
}