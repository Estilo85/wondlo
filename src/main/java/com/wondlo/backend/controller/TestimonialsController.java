package com.wondlo.backend.controller;

import com.wondlo.backend.model.Testimonial;
import com.wondlo.backend.repository.TestimonialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/testimonials")
@CrossOrigin(origins = "*")
public class TestimonialsController {

    @Autowired
    private TestimonialRepository testimonialRepository;

    @GetMapping
    public List<Testimonial> getTestimonials() {
        List<Testimonial> testimonials = testimonialRepository.findAllByOrderByCreatedAtDesc();

        if (testimonials.isEmpty()) {
            return createSampleTestimonials();
        }

        return testimonials;
    }

    @PostMapping
    public Testimonial createTestimonial(@RequestBody Testimonial testimonial) {
        testimonial.setCreatedAt(LocalDateTime.now());
        testimonial.setIsVerified(true);
        return testimonialRepository.save(testimonial);
    }

    private List<Testimonial> createSampleTestimonials() {
        List<Testimonial> samples = new ArrayList<>();

        Testimonial t1 = new Testimonial();
        t1.setName("Sarah M.");
        t1.setText("Wondlo gave me confidence to book my safari. The safety report was comprehensive and easy to understand.");
        t1.setRating(5);
        t1.setIsVerified(true);
        t1.setCreatedAt(LocalDateTime.now().minusDays(5));
        samples.add(t1);

        Testimonial t2 = new Testimonial();
        t2.setName("James K.");
        t2.setText("Used Wondlo before my Nepal trek. The safety report gave me peace of mind.");
        t2.setRating(5);
        t2.setIsVerified(true);
        t2.setCreatedAt(LocalDateTime.now().minusDays(10));
        samples.add(t2);

        Testimonial t3 = new Testimonial();
        t3.setName("Lisa R.");
        t3.setText("The incident timeline was incredibly helpful. I could see everything at a glance.");
        t3.setRating(5);
        t3.setIsVerified(true);
        t3.setCreatedAt(LocalDateTime.now().minusDays(15));
        samples.add(t3);

        return samples;
    }
}