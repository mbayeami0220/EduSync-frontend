package com.example.unchkbackend.repository;
import com.example.unchkbackend.model.Admin;
import com.example.unchkbackend.model.Courrier;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
@Repository
public interface CourrierRepository extends JpaRepository<Courrier, Long> {
}
