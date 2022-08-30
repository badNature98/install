package com.imooc.demo;
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CrosFilter implements Filter {

    @Override
    public void destroy() {
        // TODO Auto-generated method stub

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletResponse httpServletResponse=(HttpServletResponse) response;
        HttpServletRequest req=(HttpServletRequest)request;
        String origin=req.getHeader("origin");
        String headers=req.getHeader("Access-Control-Request-Headers");
        if(!org.springframework.util.StringUtils.isEmpty(origin)){
            httpServletResponse.setHeader("Access-Control-Allow-Origin", origin);
        }
        if(!org.springframework.util.StringUtils.isEmpty(headers)){
            httpServletResponse.setHeader("Access-Control-Allow-Headers", headers);
        }
        httpServletResponse.setHeader("Access-Control-Allow-Methods", "*");
        httpServletResponse.setHeader("Access-Control-Allow-Credentials", "true");
//        Access-Control-Allow-Credentials
        // 单位为秒
        httpServletResponse.setHeader("Access-Control-Max-Age", "60");
        chain.doFilter(request, httpServletResponse);

    }

    @Override
    public void init(FilterConfig arg0) throws ServletException {
        // TODO Auto-generated method stub

    }

}