package com.agroinnovate.madhumathi.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.agroinnovate.madhumathi.dto.response.UploadImageResponse;

public interface DocumentService {
     UploadImageResponse uploadImage(MultipartFile file,String email) throws IOException;
     // public byte[] downloadImage(String email);

}