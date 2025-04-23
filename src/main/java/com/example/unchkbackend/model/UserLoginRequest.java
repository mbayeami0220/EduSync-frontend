package com.example.unchkbackend.model;
import jakarta.persistence.*;

public class UserLoginRequest {
    private String identifiant;
    private String password;

    public String getIdentifiant() {
        return identifiant;
    }

    public void setIdentifiant(String identifiant) {
        this.identifiant = identifiant;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}



