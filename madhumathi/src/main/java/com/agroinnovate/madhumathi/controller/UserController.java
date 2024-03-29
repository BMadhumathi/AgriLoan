package com.agroinnovate.madhumathi.controller;
import static com.agroinnovate.madhumathi.utils.MyConstant.USER;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agroinnovate.madhumathi.dto.request.EmailRequest;
import com.agroinnovate.madhumathi.dto.request.ProfileEditRequest;
import com.agroinnovate.madhumathi.dto.response.DeleteResponse;
import com.agroinnovate.madhumathi.dto.response.ProfileEditResponse;
import com.agroinnovate.madhumathi.model.User;
import com.agroinnovate.madhumathi.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
@Tag(name="User", description = "Get user, Profile edit")
public class UserController {

    private final UserService userService;

    @GetMapping("/get")
    public List<User> getUser() {
        return userService.getUser();
    }

    @GetMapping("/get/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }
    
    @PostMapping("/getEmail")
    public ResponseEntity<?> findByEmail(@RequestBody EmailRequest emailRequest) {
        Optional <User> users = userService.findByEmail(emailRequest.getEmail());
        if (users!=null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(users, HttpStatus.OK);
        }
    }

        @PutMapping("/editProfile/{email}")
    public ResponseEntity<ProfileEditResponse> updateProfile(@RequestBody ProfileEditRequest request, @PathVariable String email) {
        ProfileEditResponse response = new ProfileEditResponse();
        try {
            boolean updated = userService.updateProfile(request.getName(), request.getPhone(),email);
            if(updated) {
                response.setMessage("Profile Updated Successfully!");
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                response.setMessage("Failed to update");
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }
            } catch (Exception e) {
                response.setMessage("Failed to update due to an unexpected error.");
                return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

    @DeleteMapping("/delete/{email}")
    public ResponseEntity<?> deleteProfile(@PathVariable String email) {
        DeleteResponse response = new DeleteResponse();
        try {
            boolean deleted = userService.deleteProfile(email);
            if(deleted) {
                response.setMessage("Profile deleted Successfully!");
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                response.setMessage("Failed to delete");
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }
            } catch (Exception e) {
                response.setMessage("Failed to delete due to an unexpected error.");
                return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }
    }
}