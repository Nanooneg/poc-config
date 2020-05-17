package com.example.serverconfig.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    public void configureGlobal( AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                .passwordEncoder( NoOpPasswordEncoder.getInstance())
                .withUser("confUser")
                .password("confPassword")
                .roles("SYSTEM");
    }

    @Override
    protected void configure( HttpSecurity http) throws Exception {
        http
                .authorizeRequests() //
                .antMatchers(HttpMethod.GET, "/actuator/**").permitAll()
                .and()
                .authorizeRequests().anyRequest().hasRole("SYSTEM").and()
                .httpBasic().and()
                .csrf().disable();
    }
}