package com.authlogin.jwt.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class HelloController {	
	@RequestMapping("/admin")
	public String adminPage() {
		return "Welcome Admin!";
	}
	
	@RequestMapping("/user")
	public String userPage() {
		return "Welcome User!";
	}
}
