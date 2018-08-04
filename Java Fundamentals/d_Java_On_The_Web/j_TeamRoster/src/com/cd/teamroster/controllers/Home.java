package com.cd.teamroster.controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.cd.teamroster.models.Player;
import com.cd.teamroster.models.Roster;
import com.cd.teamroster.models.Team;

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
		Roster roster = (Roster) session.getAttribute("roster");
		request.setAttribute("roster", roster);
//		int randomNumber = (int) session.getAttribute("randomNumber");
//		int guessNumber = Integer.parseInt(request.getParameter("guessNumber"));
//		System.out.println("randomNumber is " + randomNumber);
//		request.setAttribute("high", false);
//		request.setAttribute("low", false);
//		request.setAttribute("correct", false);
//		if (guessNumber > randomNumber) {
//			request.setAttribute("high", true);
//		} else if (guessNumber < randomNumber) {
//			request.setAttribute("low", true);
//		} else if (guessNumber == randomNumber) {
//			request.setAttribute("correct", true);
//		}
////		request.setAttribute("cat", cat);
////		int age = Integer.parseInt(request.getParameter("age"));
//		
//		// Create model
////		Person person = new Person(name, age);
//		
//		// Set Model for view
////		request.setAttribute("person", person);
//		
//		// Let view handle the request
//		response.sendRedirect("/Home/Greeting");
//		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/view/index.jsp");
//		view.forward(request, response);
		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/index.jsp");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		Roster roster = (Roster) session.getAttribute("roster");
		System.out.println("0" + roster);
		String teamName = (String) session.getAttribute("teamName");
		String firstName = request.getParameter("firstName");
		String lastName = request.getParameter("lastName");
		int age = Integer.parseInt(request.getParameter("age"));
		System.out.println("1" + teamName + firstName + lastName + age);
		Player player = new Player(firstName, lastName, age);
		System.out.println("2" + player);
		Team team = (Team) session.getAttribute("team");
		System.out.println("3" + team);
		team.addPlayer(player);
		session.setAttribute("team", team);
		response.sendRedirect("/TeamRoster/Players?" + teamName);
	}

}
