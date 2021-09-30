package com.authlogin.jwt.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class JwtTokenFilter implements HandlerInterceptor {
	@Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,Object handler)throws Exception{
        if(request.getMethod().equals("OPTIONS")){
            response.setStatus(HttpServletResponse.SC_OK);
            return true;
        }

        response.setCharacterEncoding("utf-8");

        String token = request.getHeader("authorization");
        if(token != null){
            boolean result = JwtTokenUtil.verify(token);
            if(result){
                System.out.println("Pass Interceptor");
                return true;
            }
        }
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json; charset=utf-8");
        try{
            JSONObject json = new JSONObject();
            json.put("success","false");
            json.put("msg","Unautorized，Interceptor Failed");
            json.put("code","401");
            response.getWriter().append(json.toString());
            System.out.println("Unautorized，Interceptor Failed");
        }catch (Exception e){
            e.printStackTrace();
            response.sendError(401);
            return false;
        }
        return false;
    }
}
