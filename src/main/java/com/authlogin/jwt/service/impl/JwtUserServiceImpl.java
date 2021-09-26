package com.authlogin.jwt.service.impl;

import org.springframework.stereotype.Service;

import com.authlogin.jwt.model.JwtUserDetails;
import com.authlogin.jwt.service.JwtUserSevice;

@Service
public class JwtUserServiceImpl implements JwtUserSevice{
	
	@Override
    public boolean login(JwtUserDetails user) {
        String username = user.getUsername();
        String password = user.getPassword();
        if(username.equals("admin") && password.equals("admin") || username.equals("user") && password.equals("user")){
            return true;
        }
        return false;
    }
}
