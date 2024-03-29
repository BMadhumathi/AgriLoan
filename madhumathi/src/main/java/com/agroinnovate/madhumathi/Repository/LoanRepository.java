package com.agroinnovate.madhumathi.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agroinnovate.madhumathi.model.Loan;

public interface LoanRepository extends JpaRepository<Loan, String> {

    List<Loan> findByLoanStatus(String loanStatus);

    List<Loan> findByEmail(String email);

}
