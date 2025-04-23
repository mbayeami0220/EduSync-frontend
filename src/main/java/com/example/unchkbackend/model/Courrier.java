package com.example.unchkbackend.model;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
public class Courrier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type; // "arrivé" ou "départ"
    private String objet;
    private String expediteur;
    private String destinataire;
    private LocalDate date;
}
