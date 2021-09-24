package com.authlogin.jwt.model;

import java.io.Serializable;

@SuppressWarnings("serial")
public class JwtResponse implements Serializable {
	
	private final String jwtToken;
	private String username;

	public JwtResponse(String jwtToken, String username) {
		this.jwtToken = jwtToken;
		this.username = username;
	}

	public String getToken() {
		return this.jwtToken;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
}
