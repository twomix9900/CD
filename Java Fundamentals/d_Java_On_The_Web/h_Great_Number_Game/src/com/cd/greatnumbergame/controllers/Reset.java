package com.cd.greatnumbergame.controllers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Reset
 */
@WebServlet("/Reset")
public class Reset extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Reset() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
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
	}

}
