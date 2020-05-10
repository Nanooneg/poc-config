package com.example.mstest.controller;

import com.example.mstest.model.Result;
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

    private Result result;

    @GetMapping("/userOrAdmin")
    @PreAuthorize("hasAnyRole('admin', 'user')")
    public Result testUserAdmin(){
        result = new Result("Test user - admin");
        return result;
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('admin')")
    public Result testAdmin(){
        result = new Result("Test admin");
        return result;
    }

    @GetMapping("/public")
    @PreAuthorize("permitAll()")
    public Result testPublic(){
        result = new Result("Test public");
        return result;
    }

}

