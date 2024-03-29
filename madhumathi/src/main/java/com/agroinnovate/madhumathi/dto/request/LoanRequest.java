package com.agroinnovate.madhumathi.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoanRequest {
    
    
    @NonNull
    private  String loanType;

    @NonNull
    private String userAadharNumber;

    @NonNull
    private String userPanNumber;

    @NonNull
    private String salary;

    @NonNull
    private String loanAmount;

    @NonNull
    private String loanRepaymentMonth;

    @NonNull
    private String loanStatus;

    @NonNull
    private String email;

    @NonNull
    private String imageUrl;




}
