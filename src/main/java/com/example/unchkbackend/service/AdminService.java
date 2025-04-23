package com.example.unchkbackend.service;

import com.example.unchkbackend.model.Admin;
import com.example.unchkbackend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired private AdminRepository adminRepository;
    @Autowired private PasswordEncoder passwordEncoder;

    public boolean authenticate(String username, String password) {
        Optional<Admin> optionalAdmin = adminRepository.findByUsername(username);
        return optionalAdmin
                .map(admin -> passwordEncoder.matches(password, admin.getPassword()))
                .orElse(false);
    }

    public void saveAdmin(String username, String password) {
        Admin admin = new Admin();
        admin.setUsername(username);
        admin.setPassword(passwordEncoder.encode(password));
        adminRepository.save(admin);
    }
}
