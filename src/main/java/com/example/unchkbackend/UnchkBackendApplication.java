package com.example.unchkbackend;
import com.example.unchkbackend.repository.AdminRepository;
import org.springframework.boot.CommandLineRunner;
import com.example.unchkbackend.model.Admin;
import com.example.unchkbackend.model.Etudiant;
import org.springframework.context.annotation.Bean;
import com.example.unchkbackend.model.Role;
import com.example.unchkbackend.repository.EtudiantRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;
@SpringBootApplication
public class UnchkBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(UnchkBackendApplication.class, args);
    }
   @Bean
public CommandLineRunner initData(AdminRepository adminRepo, EtudiantRepository etudiantRepo, PasswordEncoder encoder) {
    return args -> {
        // Création d'un admin test
        if (adminRepo.findByUsername("admin1").isEmpty()) {
            Admin admin = new Admin();
            admin.setUsername("admin1");
            admin.setPassword(encoder.encode("adminpass"));
            adminRepo.save(admin);
            System.out.println("✅ Admin admin1 ajouté.");
        }

        // Création d'un étudiant test
         if (etudiantRepo.findByIne("INE12345").isEmpty()) {
            Etudiant etudiant = new Etudiant();
            etudiant.setIne("INE12345");
            etudiant.setNom("Diop");
            etudiant.setPrenom("Amadou");
            etudiant.setPromo("2021");
            etudiant.setDateNaissance("27-01-2001");
            etudiant.setFormation("Sciences politique");
            etudiant.setAnneeDebut("2021");
            etudiant.setAnneeSortie("2025");
            etudiant.setAutresFormations("Anglais");
            etudiant.setPassword(encoder.encode("12345"));
            etudiant.setRole(Role.ETUDIANT); 
            etudiantRepo.save(etudiant);
            etudiantRepo.flush();
            System.out.println("✅ Etudiant INE12345 ajouté.");
        }

       
    };
}


}

