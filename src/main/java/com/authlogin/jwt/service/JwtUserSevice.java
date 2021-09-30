package com.authlogin.jwt.service;

import com.authlogin.jwt.model.JwtUserDetails;

public interface JwtUserSevice {
	public boolean login(JwtUserDetails user);
}
