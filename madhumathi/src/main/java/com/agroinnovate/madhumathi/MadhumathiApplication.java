package com.agroinnovate.madhumathi;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.agroinnovate.madhumathi.dto.request.RegisterRequest;
import com.agroinnovate.madhumathi.service.AuthenticationService;


@SpringBootApplication
public class MadhumathiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MadhumathiApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(AuthenticationService authenticationService) {
		return args -> {
			var admin = RegisterRequest.builder()
					.name("Admin")
					.email("admin@gmail.com")
					.password("Admin@123")
					.phone("9023445678")	
					.role("admin")
					.build();
			System.out.println("Admin Registration: " + authenticationService.register(admin).getMessage());

			var user = RegisterRequest.builder()
					.name("John")
					.email("john@gmail.com")
					.password("John@123")
					.phone("9025993978")
					.role("user")
					.build();
			System.out.println("User Registration: " + authenticationService.register(user).getMessage());
		};
	}


}

	
