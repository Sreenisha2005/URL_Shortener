package com.urlshortening.backend.Config;

import com.urlshortening.backend.Entity.Admins;
import com.urlshortening.backend.Repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final AdminRepository adminRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (!adminRepo.existsByUsername("admin")) {
            Admins admin = Admins.builder()
                    .username("admin")
                    .password(passwordEncoder.encode("admin123"))
                    .role("ADMIN").build();

            adminRepo.save(admin);
            System.out.println("Admin user initialized");
        }
    }
}
