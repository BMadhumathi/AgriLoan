package com.agroinnovate.madhumathi.service;

import java.util.List;

import com.agroinnovate.madhumathi.dto.request.LoanRequest;
import com.agroinnovate.madhumathi.dto.response.LoanResponse;
import com.agroinnovate.madhumathi.model.Loan;

public interface LoanService {
    LoanResponse applyLoan(LoanRequest request);


    List<Loan> readLoan();

    boolean updatedLoanStatus(String loanId, String loanStatus);


    List<Loan> findLoansWithStatusPending();


    List<Loan> findLoansByEmail(String email);

}
