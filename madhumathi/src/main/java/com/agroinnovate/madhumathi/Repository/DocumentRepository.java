package com.agroinnovate.madhumathi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agroinnovate.madhumathi.model.Document;

public interface DocumentRepository extends JpaRepository<Document, String> {
    // Optional<Document> findByName(String fileName);

    // Optional<Document> findByEmail(String email);
}