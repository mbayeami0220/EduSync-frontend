package com.example.unchkbackend.controller;

import com.example.unchkbackend.model.UserLoginRequest;
import com.example.unchkbackend.service.AdminService;
import com.example.unchkbackend.service.EtudiantService;
import com.example.unchkbackend.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class AuthController {

    @Autowired private AdminService adminService;
    @Autowired private EtudiantService etudiantService;
    @Autowired private JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequest request) {
        String identifiant = request.getIdentifiant();
        String password = request.getPassword();

        if (adminService.authenticate(identifiant, password)) {
            String token = jwtService.generateToken(identifiant, "ADMIN");
            return ResponseEntity.ok(Map.of("token", token, "role", "ADMIN"));
        } else if (etudiantService.authenticate(identifiant, password)) {
            String token = jwtService.generateToken(identifiant, "ETUDIANT");
            return ResponseEntity.ok(Map.of("token", token, "role", "ETUDIANT"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Identifiants incorrects");
        }
    }
}
