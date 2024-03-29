package com.agroinnovate.madhumathi.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.agroinnovate.madhumathi.dto.request.LoanRequest;
import com.agroinnovate.madhumathi.dto.response.LoanResponse;
import com.agroinnovate.madhumathi.model.Loan;
import com.agroinnovate.madhumathi.model.User;
import com.agroinnovate.madhumathi.Repository.LoanRepository;
import com.agroinnovate.madhumathi.Repository.UserRepository;
import com.agroinnovate.madhumathi.service.LoanService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoanServiceImpl implements LoanService {
    
    private final LoanRepository loanRepository;
    private final UserRepository userRepository;

    @Override
    public List<Loan> readLoan() {
        return loanRepository.findAll();
    }
    
    @Override
    public LoanResponse applyLoan(LoanRequest request) {
        // Build the loan entity
        var loan = Loan.builder()
                .loanType(request.getLoanType())
                .userAadharNumber(request.getUserAadharNumber())
                .userPanNumber(request.getUserPanNumber())
                .salary(request.getSalary())
                .loanAmount(request.getLoanAmount())
                .loanRepaymentMonth(request.getLoanRepaymentMonth())
                .loanStatus(request.getLoanStatus())
                .email(request.getEmail())
                .imageUrl(request.getImageUrl())
                .build();
    
        // Fetch the user from the repository
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());
        if (userOptional.isPresent()) {
            // Set the user to the loan entity
         loan.setUser(userOptional.get());
            // Save the loan entity
            loanRepository.save(loan);
            return LoanResponse.builder()
                    .message("Loan Applied Successfully!")
                    .build();
        } else {
            return LoanResponse.builder()
                    .message("Failed to apply loan. User not found.")
                    .build();
        }
    }
    
    
    @Override
    public boolean updatedLoanStatus(String loanId, String loanStatus) {
        Optional<Loan> optionalLoan = loanRepository.findById(loanId);
        if (optionalLoan.isPresent()) {
            Loan loan = optionalLoan.get();
            loan.setLoanStatus(loanStatus);
            loanRepository.save(loan);
            return true;
        } 
        else {
            return false;
        }
}

    @Override
    public List<Loan> findLoansWithStatusPending() {
        return loanRepository.findByLoanStatus("Pending");
    }

    @Override
    public List<Loan> findLoansByEmail(String email) {
        return loanRepository.findByEmail(email);
    }

}