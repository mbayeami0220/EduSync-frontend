package com.example.unchkbackend.dto;

public class StudentDTO {
    private Long id;
    private String ine;
    private String nom;
    private String prenom;
    private String formation;

    public StudentDTO() {
    }

    public StudentDTO(Long id, String ine, String nom, String prenom, String formation) {
        this.id = id;
        this.ine = ine;
        this.nom = nom;
        this.prenom = prenom;
        this.formation = formation;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getIne() {
        return ine;
    }

    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public String getFormation() {
        return formation;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setIne(String ine) {
        this.ine = ine;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public void setFormation(String email) {
        this.formation = formation;
    }
}
