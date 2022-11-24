package com.example.demo.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;

@WebServlet(name = "ControllerServlet", value = "/controller")
public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println(req.getParameter("y_value"));
        System.out.println(req.getParameter("r_value"));
        System.out.println(Arrays.toString(req.getParameterValues("selectedX")));
        PrintWriter out = resp.getWriter();
        out.println("привет!");

    }
}
