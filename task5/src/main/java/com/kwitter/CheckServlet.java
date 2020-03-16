package com.kwitter;

import com.sun.net.httpserver.Authenticator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/check")
public class CheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().print(new PostResponse(true).json());
    }
}

class PostResponse {
    private boolean success;
    public PostResponse() {
        success = true;
    }
    public PostResponse(boolean success) {
        this.success = success;
    }

    public String json() {
        return new String("{\n\t\"success\": " + Boolean.toString(success) + "\n}");
    }

    public String toString() {
        return Boolean.toString(success);
    }
}
