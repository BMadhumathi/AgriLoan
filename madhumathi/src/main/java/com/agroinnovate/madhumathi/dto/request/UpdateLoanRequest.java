package com.agroinnovate.madhumathi.dto.request;

import lombok.Data;

@Data
public class UpdateLoanRequest {

    private String loanId;
    private String loanStatus;

}