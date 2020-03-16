package com.kwitter;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;


@WebFilter("/*")
public class TimeFilter implements Filter {


    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        long startTime = System.currentTimeMillis();
        filterChain.doFilter(servletRequest, servletResponse);
        long endTime = System.currentTimeMillis();

        HttpServletRequest httpRequest = (HttpServletRequest)servletRequest;
        StringBuffer path = httpRequest.getRequestURL();
        String method = httpRequest.getMethod();
        System.out.println(String.format("%s '%s' - done (%d ms)", method, path, endTime - startTime));
    }

    @Override
    public void destroy() {

    }
}
