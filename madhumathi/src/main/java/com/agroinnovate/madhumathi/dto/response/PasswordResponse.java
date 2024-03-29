package com.agroinnovate.madhumathi.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PasswordResponse {
    @Builder.Default
    private String message="Something went wrong";

}
