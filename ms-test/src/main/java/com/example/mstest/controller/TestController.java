package com.example.mstest.controller;

import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author nanoo - created : 09/05/2020 - 16:18
 */
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class TestController {

    @GetMapping("/userOrAdmin")
    @PreAuthorize("hasAnyRole('admin', 'user')")
    public String testUserAdmin(){
        return "Hello from test user - admin";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('admin')")
    public String testAdmin(){
        return "Hello from test admin";
    }

    @GetMapping("/public")
    @PreAuthorize("permitAll()")
    public String testPublic(){
        return "Hello from test public";
    }

}

