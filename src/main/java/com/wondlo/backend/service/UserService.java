package com.wondlo.backend.service;

import com.wondlo.backend.model.User;
import com.wondlo.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    public User findOrCreateUser(String firebaseUid, String email, String name) {
        Optional<User> existing = userRepository.findByFirebaseUid(firebaseUid);
        if (existing.isPresent()) {
            return existing.get();
        }

        Optional<User> byEmail = userRepository.findByEmail(email);
        if (byEmail.isPresent()) {
            User user = byEmail.get();
            user.setFirebaseUid(firebaseUid);
            return userRepository.save(user);
        }

        User user = new User();
        user.setFirebaseUid(firebaseUid);
        user.setEmail(email);
        user.setName(name != null ? name : email.split("@")[0]);
        user.setFreeSearchesRemaining(3);
        user.setIsPaidUser(false);
        user.setPlanType("free");
        user.setSearchHistory(new java.util.ArrayList<>());
        user.setCreatedAt(LocalDateTime.now());
        user.setStatus(User.UserStatus.ACTIVE);

        user = userRepository.save(user);

        emailService.sendWelcomeEmail(email, user.getName());

        return user;
    }

    public User getUserByFirebaseUid(String firebaseUid) {
        return userRepository.findByFirebaseUid(firebaseUid)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User useFreeSearch(String firebaseUid) {
        User user = getUserByFirebaseUid(firebaseUid);
        if (user.getFreeSearchesRemaining() > 0) {
            user.setFreeSearchesRemaining(user.getFreeSearchesRemaining() - 1);
            userRepository.save(user);
        }
        return user;
    }

    public void addSearchHistory(String firebaseUid, String searchTerm) {
        User user = getUserByFirebaseUid(firebaseUid);
        user.getSearchHistory().add(searchTerm);
        userRepository.save(user);
    }
}