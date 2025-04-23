package com.example.unchkbackend.auth;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthRequest {
    private String identifier; // INE ou username
    private String password;
}
