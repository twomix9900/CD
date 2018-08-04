package com.cd.buttonclicker.controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class ShowHome
 */
@WebServlet("/Home")
public class Home extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Home() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		if (session.getAttribute("count") == null) {
			int count = 1;
			session.setAttribute("count", count);
			request.setAttribute("count", count);
		} else {			
			int count = (int) session.getAttribute("count");
			count++;
			session.setAttribute("count", count);
			request.setAttribute("count", count);
		}
		
//		request.setAttribute("cat", cat);
//		int age = Integer.parseInt(request.getParameter("age"));
		
		// Create model
//		Person person = new Person(name, age);
		
		// Set Model for view
//		request.setAttribute("person", person);
		
		// Let view handle the request
		
		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/view/index.jsp");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}