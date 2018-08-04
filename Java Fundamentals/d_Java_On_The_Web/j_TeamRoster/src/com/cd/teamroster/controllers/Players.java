package com.cd.teamroster.controllers;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.cd.teamroster.models.Roster;
import com.cd.teamroster.models.Team;

/**
 * Servlet implementation class Players
 */
@WebServlet("/Players")
public class Players extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Players() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String teamName = request.getParameter("teamName");
		request.setAttribute("teamName", teamName);
		Roster roster = (Roster) session.getAttribute("roster");
		ArrayList<Team> teams = roster.getRoster();
		for (Team team : teams) {
			if (team.getName() == teamName) {
				session.setAttribute("team", team);
				request.setAttribute("team", team);
			}
		}
		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/TeamInfo.jsp");
		view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/NewPlayer.jsp");
		view.forward(request, response);
	}

}
