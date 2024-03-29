package com.agroinnovate.madhumathi.service.impl;

import static com.agroinnovate.madhumathi.enumerated.TokenType.BEARER;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.agroinnovate.madhumathi.dto.request.LoginRequest;
import com.agroinnovate.madhumathi.dto.request.PasswordRequest;
import com.agroinnovate.madhumathi.dto.request.RegisterRequest;
import com.agroinnovate.madhumathi.dto.response.LoginResponse;
import com.agroinnovate.madhumathi.dto.response.PasswordResponse;
import com.agroinnovate.madhumathi.dto.response.RegisterResponse;
import com.agroinnovate.madhumathi.enumerated.Role;
import com.agroinnovate.madhumathi.model.Token;
import com.agroinnovate.madhumathi.model.User;
import com.agroinnovate.madhumathi.Repository.TokenRepository;
import com.agroinnovate.madhumathi.Repository.UserRepository;
import com.agroinnovate.madhumathi.service.AuthenticationService;
import com.agroinnovate.madhumathi.utils.JwtUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService {

        private final PasswordEncoder passwordEncoder;
        private final AuthenticationManager authenticationManager;
        private final JwtUtil jwtUtil;
        private final UserRepository userRepository;
        private final TokenRepository tokenRepository;

        @Override
        public RegisterResponse register(RegisterRequest request) {
                var user = User.builder()
                                .name(request.getName())
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .phone(request.getPhone())
                                .role(Role.valueOf(request.getRole().toUpperCase()))
                                .build();
                userRepository.save(user);
                return RegisterResponse.builder()
                                .message("User registered successfully")
                                .build();
        }

        @Override
        public LoginResponse login(LoginRequest request) {
                authenticationManager
                                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),
                                                request.getPassword()));
                var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
                Map<String, Object> claims = new HashMap<>();
                claims.put("role", user.getRole().toString());
                var accessToken = jwtUtil.generateToken(claims, user);
                revokeAllUserTokens(user);
                saveUserToken(user, accessToken);
                return LoginResponse.builder()
                                .message("Logged in successfully.")
                                .accessToken(accessToken)
                                .build();
        }

        private void saveUserToken(User user, String accessToken) {
                var token = Token.builder()
                                .user(user)
                                .token(accessToken)
                                .tokenType(BEARER)
                                .expired(false)
                                .revoked(false)
                                .build();
                tokenRepository.save(token);
        }

        private void revokeAllUserTokens(User user) {
                var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
                if (validUserTokens.isEmpty())
                        return;
                validUserTokens.forEach(token -> {
                        token.setExpired(true);
                        token.setRevoked(true);
                });
                tokenRepository.saveAll(validUserTokens);
        }

        @Override
        public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
                final String authHeader = request.getHeader(AUTHORIZATION);
                final String refreshToken;
                final String userEmail;
                if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                        return;
                }
                refreshToken = authHeader.substring(7);
                userEmail = jwtUtil.extractUsername(refreshToken);
                if (userEmail != null) {
                        var user = this.userRepository.findByEmail(userEmail).orElseThrow();
                        if (jwtUtil.isTokenValid(refreshToken, user)) {
                                var accessToken = jwtUtil.generateToken(user);
                                revokeAllUserTokens(user);
                                saveUserToken(user, accessToken);
                                var authResponse = LoginResponse.builder()
                                                .message("New access token generated successfully.")
                                                .accessToken(accessToken)
                                                .build();
                                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
                        }
                }
        }

        @Override
        public PasswordResponse forgotPassword(PasswordRequest request) {
                var user=userRepository.findByEmail(request.getEmail())
                        .orElseThrow(()-> new UsernameNotFoundException("user not found with email"+request.getEmail()));
                if(!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())){
                        return PasswordResponse.builder()
                        .message("password incorrect.")
                        .build();
                }
                if(!request.getNewPassword().equals(request.getConfirmPassword())){
                        return PasswordResponse.builder().message("Password mismatch").build();
                }
                user.setPassword(passwordEncoder.encode(request.getNewPassword()));
                userRepository.save(user);
                return PasswordResponse.builder()
                .message("Password updated successfully")
                .build();
        }

}