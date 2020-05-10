package com.example.servereureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaClient
@EnableEurekaServer
@SpringBootApplication
public class ServerEurekaApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerEurekaApplication.class, args);
    }

}
