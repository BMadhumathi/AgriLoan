package com.agroinnovate.madhumathi.service;

import java.io.IOException;

import com.agroinnovate.madhumathi.dto.request.LoginRequest;
import com.agroinnovate.madhumathi.dto.request.PasswordRequest;
import com.agroinnovate.madhumathi.dto.request.RegisterRequest;
import com.agroinnovate.madhumathi.dto.response.LoginResponse;
import com.agroinnovate.madhumathi.dto.response.PasswordResponse;
import com.agroinnovate.madhumathi.dto.response.RegisterResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;

    PasswordResponse forgotPassword(PasswordRequest request);

}
