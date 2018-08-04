package com.cd.teamroster.controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.cd.teamroster.models.Team;
import com.cd.teamroster.models.Roster;

/**
 * Servlet implementation class Teams
 */
@WebServlet("/Teams")
public class Teams extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Teams() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		String name = request.getParameter("name");
//		String breed = request.getParameter("breed");
//		int weight = Integer.parseInt(request.getParameter("weight"));
//		Dog dog = new Dog(name, breed, weight);
//		
//		request.setAttribute("dog", dog);
		
		HttpSession session = request.getSession();
		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/NewTeam.jsp");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		String name = request.getParameter("teamName");
		Team team = new Team(name);
		
		if (session.getAttribute("roster") == null) {
			Roster roster = new Roster();
			roster.addTeam(team);
			session.setAttribute("roster", roster);
		} else {
			Roster roster = (Roster) session.getAttribute("roster");
			roster.addTeam(team);
			session.setAttribute("roster", roster);
		}
		
		response.sendRedirect("/TeamRoster/Home");
//		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/NewTeam.jsp");
//		view.forward(request, response);
	}

}
