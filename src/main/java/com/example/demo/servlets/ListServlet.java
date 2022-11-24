package com.example.demo.servlets;

import com.example.demo.model.Model;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.annotation.WebServlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(name = "list", value = "/list")
public class ListServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Model model = Model.getInstance();
        req.setAttribute("userNames", model.list());

        RequestDispatcher requestDispatcher = req.getRequestDispatcher("JSPs/table.jsp");
        requestDispatcher.forward(req, resp);
    }
}
