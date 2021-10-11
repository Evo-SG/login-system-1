package com.authlogin.jwt.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.authlogin.jwt.config.JwtTokenUtil;
import com.authlogin.jwt.model.JwtUserDetails;
import com.authlogin.jwt.service.JwtUserSevice;

@CrossOrigin("*")
@RestController
public class JwtAuthController {	
	@Autowired
    private JwtUserSevice userService;

    @PostMapping(value="/authenticate")
    public Map<String,Object> authLogin(@RequestBody JwtUserDetails jwtUserDetails){
        String username = jwtUserDetails.getUsername();
        String password = jwtUserDetails.getPassword();
        Map<String,Object> map = new HashMap<>();
        JwtUserDetails user = new JwtUserDetails(username,password);

        if(userService.login(user)){
            String token = JwtTokenUtil.sign(user);
            if(token != null){
                map.put("code", "200");
                map.put("message", "Authorized");
                map.put("token", token);
                return map;
            }
        }
        map.put("code", "401");
        map.put("message", "Unauthorized");
        return map;
    }
}
