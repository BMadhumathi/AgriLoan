package com.agroinnovate.madhumathi.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agroinnovate.madhumathi.model.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}
