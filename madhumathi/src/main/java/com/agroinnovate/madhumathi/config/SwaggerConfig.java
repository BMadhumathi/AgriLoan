package com.agroinnovate.madhumathi.config;

import static com.agroinnovate.madhumathi.utils.MyConstant.JWT_BEARER_FORMAT;
import static com.agroinnovate.madhumathi.utils.MyConstant.JWT_DESCRIPTION;
import static com.agroinnovate.madhumathi.utils.MyConstant.JWT_LOCALHOST_URL;
import static com.agroinnovate.madhumathi.utils.MyConstant.JWT_SECURITY_SCHEME;
import static com.agroinnovate.madhumathi.utils.MyConstant.JWT_SECURITY_SCHEME_NAME;
import static com.agroinnovate.madhumathi.utils.MyConstant.SWAGGER_INFO_CONTACT_EMAIL;
import static com.agroinnovate.madhumathi.utils.MyConstant.SWAGGER_INFO_CONTACT_NAME;
import static com.agroinnovate.madhumathi.utils.MyConstant.SWAGGER_INFO_CONTACT_URL;
import static com.agroinnovate.madhumathi.utils.MyConstant.SWAGGER_INFO_DESCRIPTION;
import static com.agroinnovate.madhumathi.utils.MyConstant.SWAGGER_INFO_LICENSE_NAME;
import static com.agroinnovate.madhumathi.utils.MyConstant.SWAGGER_INFO_LICENSE_URL;
import static com.agroinnovate.madhumathi.utils.MyConstant.SWAGGER_INFO_TITLE;
import static com.agroinnovate.madhumathi.utils.MyConstant.SWAGGER_INFO_VERSION;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI opeanAPI(){

        return new OpenAPI()
            .info(new Info()
                .title(SWAGGER_INFO_TITLE)
                .description(SWAGGER_INFO_DESCRIPTION)
                .version(SWAGGER_INFO_VERSION)
                .contact(new Contact()
                    .name(SWAGGER_INFO_CONTACT_NAME)
                    .email(SWAGGER_INFO_CONTACT_EMAIL)
                    .url(SWAGGER_INFO_CONTACT_URL))
                .license(new License()
                    .name(SWAGGER_INFO_LICENSE_NAME)
                    .url(SWAGGER_INFO_LICENSE_URL)))
            .servers(List.of(new Server().url(JWT_LOCALHOST_URL)))
            .addSecurityItem(new SecurityRequirement().addList(JWT_SECURITY_SCHEME_NAME))
            .components(new Components().addSecuritySchemes(JWT_SECURITY_SCHEME_NAME, 
                new SecurityScheme()
                    .name(JWT_SECURITY_SCHEME_NAME)
                    .description(JWT_DESCRIPTION)
                    .bearerFormat(JWT_BEARER_FORMAT)
                    .scheme(JWT_SECURITY_SCHEME)
                    .type(SecurityScheme.Type.HTTP)));
    }

}
