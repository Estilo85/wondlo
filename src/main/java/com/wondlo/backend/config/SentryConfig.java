package com.wondlo.backend.config;

import io.sentry.Sentry;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SentryConfig {

    @Value("${sentry.dsn}")
    private String dsn;

    @PostConstruct
    public void initSentry() {
        Sentry.init(options -> {
            options.setDsn(dsn);
            options.setEnvironment("development");
            options.setTracesSampleRate(1.0);
        });
        System.out.println("✅ Sentry initialized");
    }
}