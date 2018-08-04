package com.cd.greatnumbergame.controllers;

import java.io.IOException;
import java.util.Random;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Home
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

		Random random = new Random();
		int randomNumber = random.nextInt(100) + 1;
		System.out.println("randomNumber is " + randomNumber);
		session.setAttribute("randomNumber", randomNumber);
		request.setAttribute("randomNumber", randomNumber);
//			session.setAttribute("randomNumber", randomNumber);
//			request.setAttribute("randomNumber", randomNumber);

		
		request.setAttribute("high", false);
		request.setAttribute("low", false);
		request.setAttribute("correct", false);
		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/view/index.jsp");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		int randomNumber = (int) session.getAttribute("randomNumber");
		int guessNumber = Integer.parseInt(request.getParameter("guessNumber"));
		System.out.println("randomNumber is " + randomNumber);
		request.setAttribute("high", false);
		request.setAttribute("low", false);
		request.setAttribute("correct", false);
		if (guessNumber > randomNumber) {
			request.setAttribute("high", true);
		} else if (guessNumber < randomNumber) {
			request.setAttribute("low", true);
		} else if (guessNumber == randomNumber) {
			request.setAttribute("correct", true);
		}
//		request.setAttribute("cat", cat);
//		int age = Integer.parseInt(request.getParameter("age"));
		
		// Create model
//		Person person = new Person(name, age);
		
		// Set Model for view
//		request.setAttribute("person", person);
		
		// Let view handle the request
		response.sendRedirect("/Home/Greeting");
		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/view/index.jsp");
		view.forward(request, response);
	}

}
